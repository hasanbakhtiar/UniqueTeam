import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/bootstrap.min.css';
import configureStore from './store/configureStore';
import { addBlog } from './actions/blogAction';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
const store = configureStore();


store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addBlog({img:"https://reactjs.org/logo-og.png",title:"React",desc:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality"}));
store.dispatch(addBlog({img:"https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5186775737696256/image/download/6611525209948160",title:"Redux",desc:"Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr."}));

// const data = ['table','pen','copybook']
// console.log(...data);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <AppRouter/>
  </Provider>
  </React.StrictMode>
);

