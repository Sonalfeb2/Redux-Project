import {createStore} from 'redux'
const CounterReducer = (
  initialState = {
    counter: 0
  },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: initialState.counter + 1
    };
  }
  if(action.type==='decrement'){
    return{
        counter: initialState.counter - 1
    }
  }
  
  if(action.type==='incrementby2'){
    return{
        counter: initialState.counter + 2
    }
  }
  
  if(action.type==='decrementby2'){
    return{
        counter: initialState.counter - 2
    }
  }
  return initialState;
};

const store = createStore(CounterReducer);

export default store;