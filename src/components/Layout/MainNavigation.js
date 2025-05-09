import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const MainNavigation = () => {
  const AuthCtx = useContext(AuthContext);
  console.log(AuthCtx);
  const isLoggedIn = AuthCtx.isLoggedIn;

  const logoutHandler = () => {
    AuthCtx.logout();
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {
            isLoggedIn &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {
            isLoggedIn &&
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header >
  );
};

export default MainNavigation;
