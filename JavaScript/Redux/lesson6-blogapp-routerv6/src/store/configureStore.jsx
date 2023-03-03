import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { blogReducer } from "../reducers/blogReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store
const configureStore =()=>{
  const store = createStore(
    blogReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}

export default configureStore;