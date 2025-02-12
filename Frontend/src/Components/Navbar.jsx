import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import LogOut from "./LogOut";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { authUser } = useAuth();
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCourseClick = () => {
    if (!authUser) {
      const loginModal = document.getElementById("my_modal_3");
      if (loginModal) {
        loginModal.showModal();
      }
    } else {
      navigate("/Course");
    }
  };

  const navItems = (
    <>
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <a onClick={handleCourseClick} className="cursor-pointer">Course</a>
      </li>
      <li className="text-lg">
        <Link to="/ContactUs">Contact</Link>
      </li>
      <li className="text-lg">
        <Link to="/AboutUs">About Us</Link>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-100 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50 ${sticky ? "shadow-md bg-base-200" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold cursor-pointer">BookStore</Link>
      </div>
      <div className="navbar-end space-x-5">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="hidden md:block">
          <label className="px-3 py-2 border rounded-md flex items-center gap-2">
            <input type="text" className="grow outline-none" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {
          authUser ? <LogOut /> :
          <div className="">
            <a className="bg-pink-500 text-white px-5 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
            <Login />
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
