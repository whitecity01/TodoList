import { useCallback, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import styles from "../../styles/todo/TodoTemplate.module.scss";
import firebase from "../../api/firebaseApi";

const Todo = ({ getTodos }) => {
  const [todos, setTodos] = useState(getTodos);

  const onInsert = useCallback(
    async (text) => {
      //todo 추가
      const newId = Date.now();
      const todo = {
        id: newId,
        text,
        done: false,
      };
      const newTodos = [...todos, todo];
      setTodos(newTodos);

      firebase.addData(todo);
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      //todo 삭제
      todos.forEach((todo) => {
        if (todo.id === id) {
          firebase.removeData(todo); // 해당하는 id의 todo 삭제
        }
      });
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {    
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, done: !todo.done };
          firebase.editData(todo);
          return updatedTodo;
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className={styles.TodoTemplate}>
      <h1 className={styles["app-title"]}>TodoList</h1>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default Todo;
