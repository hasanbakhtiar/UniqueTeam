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
        return {
          count: state.count + 1,
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
const addCount = ()=>({
        type:"INCREMENT"
})

const removeCount = ()=>({
    type:"DECREMENT"
})

const resetCount = ()=>({
    type:"RESET"
})

store.dispatch(addCount())
store.dispatch(addCount())
store.dispatch(resetCount())
store.dispatch(removeCount())



console.log(store.getState());















const CounterApp = () => {
  return <div>CounterApp</div>;
};

export default CounterApp;
