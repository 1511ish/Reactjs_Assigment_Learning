import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passInputRef.current.value;

    setIsLoading(true);
    if (isLogin) {
      setTimeout(() => {
        let res = {token: "this will get from backend api"};
        alert(`${enteredEmail} is loggedIn`)
        AuthCtx.login(res.token);
        setIsLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        alert(`${enteredEmail} is Signuped.`)
        setIsLoading(false);
      }, 500);
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'LogIn' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
