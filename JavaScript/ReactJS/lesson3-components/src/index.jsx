import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./sass/style.css";

import List from "./components/List";
import Nav from "./components/Nav";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <h1>Hello</h1>
        <List />
        <Products />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
