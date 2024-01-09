import {createStore} from 'redux'
const CounterReducer = (
  initialState = {
    counter: 0,
    showCounter: true
  },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: initialState.counter + 1,
      showCounter: true
    };
  }
  if(action.type==='decrement'){
    return{
        counter: initialState.counter - 1,
        showCounter: true
    }
  }
  if(action.type==='increase'){
    return{
        counter: initialState.counter + action.amount,
        showCounter: true
    }
  }
  if(action.type==='toggle'){
    return {
        showCounter: !initialState.showCounter,
        counter: initialState.counter
    }
  }
  return initialState;
};

const store = createStore(CounterReducer);

export default store;