import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styles from "../../styles/todo/TodoListItem.module.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, done } = todo;

  const handleToggleClick = () => {
    onToggle(id);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className={styles.TodoListItem}>
      <div
        className={`${styles.checkbox} ${done ? styles.checked : ""}`}
        onClick={handleToggleClick}
      >
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.remove} onClick={handleRemoveClick}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
