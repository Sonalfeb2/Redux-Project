// import {createStore} from 'redux'
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: true
};
const authInitialState = {
  isLogin: false
};
const authSlices = createSlice({
  name: "authenticate",
  initialState: authInitialState,
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
    }
  }
});
const CounterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: state => {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  reducer: { counter: CounterSlices.reducer, authenticate: authSlices.reducer }
});
export const counterActions = CounterSlices.actions;
export const authActions = authSlices.actions;
// const CounterReducer = (
//   initialState = {
//     counter: 0,
//     showCounter: true
//   },
//   action
// ) => {
//   if (action.type === "increment") {
//     return {
//       counter: initialState.counter + 1,
//       showCounter: true
//     };
//   }
//   if(action.type==='decrement'){
//     return{
//         counter: initialState.counter - 1,
//         showCounter: true
//     }
//   }
//   if(action.type==='increase'){
//     return{
//         counter: initialState.counter + action.amount,
//         showCounter: true
//     }
//   }
//   if(action.type==='toggle'){
//     return {

//         ...initialState,
//         showCounter: !initialState.showCounter
//     }
//   }
//   return initialState;
// };

// const store = createStore(CounterReducer);

export default store;
