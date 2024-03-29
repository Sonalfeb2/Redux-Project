import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const isLogin = useSelector(state => state.authenticate.isLogin);
  const dispatch = useDispatch();
  const handleAuthentication = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLogin &&
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              <button onClick={handleAuthentication}>LogOut</button>
            </li>
          </ul>}
      </nav>
    </header>
  );
};

export default Header;
