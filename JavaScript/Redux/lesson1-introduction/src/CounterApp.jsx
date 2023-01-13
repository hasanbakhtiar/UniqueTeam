import React from "react";












import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';

// inital state
const initalState = {
  count: 10,
};

// reducer
const counterReducer = (state = initalState, action) => {
    switch (action.type) {

      case "INCREMENT":
        const myCount = typeof action.payload === "number" ? action.payload : 1
        return {
          count: state.count + myCount ,
        };

      case "DECREMENT":
        return {
          count: state.count - 1,
        };
  
      case "RESET":
        return {
          count: 0,
        };

      default:
        return state;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store
const store = createStore(counterReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

// Action
const addCount = (newvalue)=>({
        type:"INCREMENT",
        payload:newvalue
})

const removeCount = ()=>({
    type:"DECREMENT"
})

const resetCount = ()=>({
    type:"RESET"
})

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(addCount(15));



















const CounterApp = () => {
  return <div>CounterApp</div>;
};

export default CounterApp;
