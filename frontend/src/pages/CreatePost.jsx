import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const notify = () => toast("post added successfully");
  const validation = () => toast("please enter the title more than 5 characters or description more than 10 characters");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length < 5 || desc.length < 10) {
      validation();
      return;
    }
    const newPost = {
      title,
      desc,
      username: user.username,
      userId: user._id,
    };
    try {
      const res = await axios.post(URL + "/api/posts/create", newPost, {
        withCredentials: true,
      });
      
      setTitle("");
      setDesc("");
      console.log(res.data);
      notify();
    } catch (err) {
      console.log(err);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="px-6 md:px-[200px] mt-5">
      <h1 className="font-bold md:text-2xl mt-8">Create a post</h1>
      <form className="flex flex-col space-y-5 mt-5">
        <input
          className="border-2 border-black outline-none p-2"
          type="text"
          placeholder="Title (minimum 5 charactes long)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border-2 border-black outline-none p-2"
          placeholder="Write your post here (minimum 10 characters long)"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
          className="bg-black text-white font-bold p-2"
          onClick={handleSubmit}
        >
          Create
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
