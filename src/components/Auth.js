import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
