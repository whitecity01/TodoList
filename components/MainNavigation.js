import { NavLink} from "react-router-dom";
import styles from "../styles/MainNavigation.module.scss";

function MainNavigation() {

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              TodoList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
