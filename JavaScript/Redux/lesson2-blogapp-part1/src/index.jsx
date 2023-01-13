import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore';
import { addBlog } from './actions/blogAction';
const store = configureStore();


store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addBlog({img:"img",title:"Hello1",desc:"Desc1"}));
store.dispatch(addBlog({img:"img",title:"Hello1",desc:"Desc2"}));
store.dispatch(addBlog({img:"img",title:"Hello1",desc:"Desc3"}));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

