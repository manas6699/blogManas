import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PostDetails from "./pages/PostDetails";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Register from "./pages/Register";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/post/:id" element={<PostDetails />}/>
        <Route path="/write" element={<CreatePost/>} />
      </Routes>
      <Footer/>
    </UserContextProvider>
  );
};

export default App;
