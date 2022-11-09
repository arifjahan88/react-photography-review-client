import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import logo from "../Assets/nav logo/navicon.png";

const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const Handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const navoptions = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blog</Link>
        {user?.uid && (
          <>
            <Link to="/reviews">My Reviews</Link>
            <Link to="/addservice">Add Service</Link>
          </>
        )}
        {user?.uid ? (
          <Link>
            <button onClick={Handlelogout}>Log Out</button>
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>

          <Link to="/">
            <div className="flex justify-center items-center ml-5">
              <div>
                <img className="w-11" src={logo} alt="" />
              </div>
              <p className=" text-2xl ml-2 font-mono mt-2 font-semibold">
                Lens Graphy
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.displayName && (
            <>
              <p className="mr-3">Welcome</p>
              <p className="font-bold font-mono mr-5">{user.displayName}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
