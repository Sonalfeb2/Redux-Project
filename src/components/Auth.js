import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Auth = () => {
  const dispatch = useDispatch();
  
  return (
    <main className={classes.auth}>
      <section>
        
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={()=>dispatch(authActions.login())}>Login</button>
        
      </section>
    </main>
  );
};

export default Auth;
