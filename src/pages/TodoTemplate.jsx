import { useCallback, useEffect, useRef, useState } from "react";
import TodoInsert from "../components/todo/TodoInsert";
import TodoList from "../components/todo/TodoList";
import styles from "../styles/todo/TodoTemplate.module.scss";
import firebase from "../api/firebaseApi";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  useEffect(() => {
    readTodos();
  }, []);

  const readTodos = () => {
    firebase.loadTodos((todoList) => {
      console.log(todoList);
      setTodos(todoList);
      todoList.forEach((todo) => {
        if (todo.id >= nextId.current) nextId.current = todo.id + 1;
      });
    });
  };

  const onInsert = useCallback((text) => {
    //todo 추가
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };
    firebase.addData(todo);
    readTodos();
  }, []);

  const onRemove = useCallback(
    (id) => {
      //todo 삭제
      todos.forEach((todo) => {
        if (todo.id === id) {
          firebase.removeData(todo); // 해당하는 id의 todo 삭제
        }
      });
      readTodos();
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      //todo 변경(checked) immer 활용
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
          firebase.editData(todo);
        }
        return todo;
      });
      readTodos();
    },
    [todos]
  );

  return (
    //3번
    <div className={styles.TodoTemplate}>
      <h1 className={styles["app-title"]}>TodoList</h1>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export function loader() {
  //1번
}

export default TodoTemplate;
