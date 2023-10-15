import React from "react";
import axios from "axios";
import { URL } from "../url";
import { useState , useContext} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";


const PostDetails = () => {
  const postId = useParams().id;
  const [loder, setLoder] = useState(false);
  // console.log(postId);
  
  // user details are in user
  const {user}=useContext(UserContext)
  
  const [post, setPost] = useState({});
  const fetchPost = async () => {
    setLoder(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      setPost(res.data);
      console.log(res.data);
      setLoder(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  useEffect(() => {
    fetchPost();
  }, [postId]);
  return (
    <>
    {loder?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
    
      <h1 className="text-green-500 font-extrabold text-5xl ">{post.title}</h1>
      {/* author and date */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center space-x-2">
          <p className="font-extrabold">{post.username}</p>
          <p className="text-gray-500 text-sm">{new Date(post.updatedAt).toString().slice(0,15)}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-5">
        {post.desc}
      </p>
      
    </div>
    }
    </>
  );
};

export default PostDetails;
