import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePosts from "../components/HomePosts";
import { URL } from "../url";
import Loader from "../components/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loder, setLoder] = useState(false);
  const fetchPosts = async () => {
    setLoder(true);
    try {
      const res = await axios.get(URL + "/api/posts/getall");
      setPosts(res.data);
      console.log(res.data);
      setLoder(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loder ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          posts.length !==0 ? posts.map((post) => <HomePosts key={post._id} post={post} />) : <h1 className="text-2xl font-bold text-center mt-10">No posts found. Create some blogs :)</h1>
        )}
      </div>
    </>
  );
};

export default Home;
