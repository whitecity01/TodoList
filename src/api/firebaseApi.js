import axios from "axios";
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL;

const loadTodos = async () => {
  try {
    const res = await axios.get(`${databaseURL}/todos.json`);
    const todosData = res.data;

    if (todosData) {
      const todosArray = Object.values(todosData);
      return todosArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error("데이터 가져오기 에러:", error);
  }
};

const addData = async (todo) => {
  try {
    await axios.put(`${databaseURL}/todos/${todo.id}.json`, todo);
  } catch (error) {
    console.error("데이터 추가 에러:", error);
  }
};

const editData = async (todo) => {
  try {
    await axios.patch(`${databaseURL}/todos/${todo.id}.json`, {
      done: !todo.done,
    });
  } catch (error) {
    console.error("데이터 업데이트 에러:", error);
  }
};

const removeData = async (todo) => {
  try {
    await axios.delete(`${databaseURL}/todos/${todo.id}.json`);
  } catch (error) {
    console.error("데이터 삭제 에러:", error);
  }
};

const firebase = {
  addData: addData,
  editData: editData,
  removeData: removeData,
  loadTodos: loadTodos,
};

export default firebase;
