import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  // console.log(user);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-between px-5 md:px-[200px] py-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Blog<span className="text-green-500">Manas</span>
        </h1>
      </Link>

      <div className="flex items-center space-x-4">
        {user ? (
          <Link to="/write">create</Link>
        ) : (
          <Link to="/login">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </Link>
        )}
        {user ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleLogout();
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="/register">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Register
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
