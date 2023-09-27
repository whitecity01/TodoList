import { useCallback, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import firebase from "../../api/firebaseApi";

const Todo = ({ getTodos }) => {
  const [todos, setTodos] = useState( getTodos );

  const onInsert = useCallback(async (text) => {
    const newId = Date.now();
    const todo = {
      id: newId,
      text,
      done: false,
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);

    firebase.addData(todo);
  },[todos]);

  const onRemove = useCallback((id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        firebase.removeData(todo);
      }
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  },[todos]);

  const onToggle = useCallback((id) => {    
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, done: !todo.done };
        firebase.editData(todo);
        return updatedTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  },[todos]);

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default Todo;
