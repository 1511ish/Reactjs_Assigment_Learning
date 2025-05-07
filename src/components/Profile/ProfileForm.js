import { useRef, useState } from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const passRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passRef.current.value;
    setIsLoading(true);
    setTimeout(() => {
      alert(`New Password: ${enteredPassword}`);
      setIsLoading(false);
    }, 500)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passRef} required />
      </div>
      <div className={classes.action}>
        {!isLoading ? <button>Change Password</button> : <p>Sending Request...</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
