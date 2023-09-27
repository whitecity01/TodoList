import { ref, set, onValue, remove, update } from 'firebase/database';
import db from './firebase';
import axios from "axios";

const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL;

const updateData = (callback) => {  //데이터 요청
  onValue(ref(db), (snapshot) => {
    const todoList = [];
    if (snapshot.val() !== null) {
      Object.entries(snapshot.val().todos).map((todo) => todoList.push(todo[1]));
    }
    callback(todoList);
  });
};

const loadTodos = async (callback) => {
  try {
    const res = await axios.get(
      `${databaseURL}/todos.json`
    );
    const todosData = res.data;

    if (todosData) {
      const todosArray = Object.values(todosData);
      callback(todosArray);
    }
  } catch (error) {
    console.error("Firebase 데이터 가져오기 에러:", error);
  }
};


const addData = (todo) => {  //데이터 추가
  set(ref(db, `/todos/${todo.text}`), todo);
};

const editData = (todo) => { //데이터 수정(checked)
  update(ref(db, `/todos/${todo.text}`), todo);
};

const removeData = (todo) => {  //데이터 삭제
  remove(ref(db, `/todos/${todo.text}`));
};

const firebase = {
  updateData: updateData,
  addData: addData,
  editData: editData,
  removeData: removeData,
  loadTodos : loadTodos,
};

export default firebase;