import { Suspense} from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
//import TodoInsert from "../components/todo/TodoInsert";
//import TodoList from "../components/todo/TodoList";
//import styles from "../styles/todo/TodoTemplate.module.scss";
import firebase from "../api/firebaseApi";
import Todo from "../components/todo/Todo";

const TodoTemplate = () => {
  const { getTodos } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={getTodos}>{(getTodos) => <Todo getTodos={getTodos} />}</Await>
    </Suspense>
  );
};

export function loader() {
  return defer({
    getTodos: firebase.loadTodos(),
  });
}

export default TodoTemplate;
