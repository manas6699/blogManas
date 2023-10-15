import React from 'react';
import { Link } from 'react-router-dom';


const HomePosts = ({post}) => {
  return (
    <div className="flex flex-col p-5 lg:px-48 lg:py-11">
        <div className="bg-gray-100 p-5 mb-10">
          <h1 className="font-bold text-2xl mb-2"> {post.title}</h1>
          <p className="my-3">
            {post.desc.slice(0, 10)}
          </p>
          <Link to={`/posts/post/${post._id}`}>
          <button className="text-white font-semibold bg-green-600 p-2 my-1 rounded">
            Read More...
          </button>
          </Link>
        </div>
      </div>
  )
}

export default HomePosts

