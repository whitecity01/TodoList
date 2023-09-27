import TodoListItem from "./TodoListItem";
import styles from "../../styles/todo/TodoList.module.scss";

const TodoList = ({todos , onRemove , onToggle}) => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;