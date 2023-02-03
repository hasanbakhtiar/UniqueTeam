import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Header from "../components/Header";
import { UserProvider } from "../context/UserContext";
import Home from "../pages/Home";

const AppRouters = () => {
  return (
    <>
        <BrowserRouter>
      <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
      </UserProvider>
        </BrowserRouter>
    </>
  );
};

export default AppRouters;
