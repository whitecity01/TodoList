import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import styles from "../styles/todo/TodoLayout.module.scss";
import firebase from "../api/firebaseApi";
import Todo from "../components/todo/Todo";

const TodoLayout = () => {
  const { getTodos } = useLoaderData();

  return (
    <div className={styles.TodoLayout}>
      <h1 className={styles["app-title"]}>TodoList</h1>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={getTodos}>
          {(getTodos) => <Todo getTodos={getTodos} />}
        </Await>
      </Suspense>
    </div>
  );
};

export function loader() {
  return defer({
    getTodos: firebase.loadTodos(),
  });
}

export default TodoLayout;
