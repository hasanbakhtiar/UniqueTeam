import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/blogs"  element={<BlogList />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="/login" element={<Dashboard />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
          <Route path="/edit/:id" element={<EditBlog />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
// npm i react-router-dom@5
export default AppRouter;
