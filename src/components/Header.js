import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Trying to learn Redux</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My account</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
