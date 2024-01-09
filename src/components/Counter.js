import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const countValue = useSelector(state => state.counter);
  const show = useSelector(state=>state.showCounter);
  const dispatch = useDispatch();
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        {show &&  countValue }
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>

        <button onClick={() => dispatch({ type: "increase", amount: 2 })}>
          Increase By 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
