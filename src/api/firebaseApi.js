import { ref, set, onValue, remove, update } from 'firebase/database';
import db from './firebase';

const updateData = (callback) => {  //데이터 요청
  onValue(ref(db), (snapshot) => {
    const todoList = [];
    if (snapshot.val() !== null) {
      Object.entries(snapshot.val().todos).map((todo) => todoList.push(todo[1]));
    }
    callback(todoList);
  });
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
};

export default firebase;