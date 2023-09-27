import { useState } from "react";
import styles from "../../styles/todo/TodoInsert.module.scss";

const TodoInsert = ({onInsert}) => {
  const [inputValue, setValue] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() !== "") {      
      onInsert(inputValue);
      setValue("");
    }
  };

  return (
    <form className={styles.TodoInsert} onSubmit={onSubmit}>
      <input
        placeholder=" 할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;
