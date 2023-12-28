const redux = require("redux");
const CounterReducer = (
  initialState = {
    counter: 0
  },
  action
) => {
  if (action.type == "increment") {
    return {
      counter: initialState.counter + 1
    };
  }
  if(action.type=='decrement'){
    return{
        counter: initialState.counter - 1
    }
  }
  
  if(action.type=='incrementby2'){
    return{
        counter: initialState.counter + 2
    }
  }
  
  if(action.type=='decrementby2'){
    return{
        counter: initialState.counter - 2
    }
  }
};

const store = redux.createStore(CounterReducer);

const CounterSubcription = () => {
  console.log(store.getState());
};
store.subscribe(CounterSubcription);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

store.dispatch({ type: "incrementby2" });

store.dispatch({ type: "decrementby2" });
