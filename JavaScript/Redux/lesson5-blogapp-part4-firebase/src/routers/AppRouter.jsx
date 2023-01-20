import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import BlogDetails from "../pages/BlogDetails";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Dashboard from "../pages/admin/Dashboard";
import EditBlog from "../pages/admin/update/EditBlog";
import AddBlog from "../pages/admin/update/AddBlog";
import Login from "../pages/auth/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" exact component={BlogList}></Route>
          <Route path="/blogs/:id" component={BlogDetails}></Route>
          <Route path="/login" component={Dashboard}></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/add" component={AddBlog}></Route>
          <Route path="/edit/:id" component={EditBlog}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
// npm i react-router-dom@5
export default AppRouter;
