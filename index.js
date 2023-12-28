const redux = require("redux");

const CounterReducer = (
  initialState = {
    counter: 0
  },
  action
) => {
  return {
    counter: initialState.counter + 1
  };
};

const store = redux.createStore(CounterReducer);

const CounterSubcription = () => {
  console.log(store.getState());
};
store.subscribe(CounterSubcription);
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});

store.dispatch({type:'increment'});
store.dispatch({type:'increment'});

store.dispatch({type:'increment'});
store.dispatch({type:'increment'});