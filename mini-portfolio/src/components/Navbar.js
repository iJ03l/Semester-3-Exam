import me from "../assets/images/me.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);
  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const handleClick = () => {
    window.location.replace("https://github.com/ij03l", "_blank");
  };
  const handleEmail = () => {
    window.location.replace("https://idahorjoel@gmail.com");
  };

  return (
    <nav className="h-auto md:my-auto md:py-5 md:px-6 shadow-lg p2 bg-white w-full mx-auto transition-all ease-in-out">
      <div className="flex justify-between md:items-center items-center px-6 md:px-0">
        <Link to="/">
          <img className="w-48" src={me} alt="logo-image" />
        </Link>
        <div className="hidden md:flex">
          <NavLink className="nav-link" to="/" onClick={clickHandler}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/" onClick={clickHandler}>
            Who is Joel?
          </NavLink>
        </div>
        <div className="md:flex gap-4 hidden font-semibold">
          <div className="tooltip tooltip-bottom" data-tip="Github profile">
            <button
              onClick={handleClick}
              className="py-3 px-5 border-2 border-orang-800 hover:shadow-lg flex items-center justify-center border-orange-700 gap-2 rounded-lg font-bold bg-white border-lg text-lg text-orange-800"
            >
              <span id="show"> GITHUB</span>
            </button>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Send a mail">
            <button
              onClick={handleEmail}
              className="py-3 px-5 btn bg-orange-600 rounded-lg border-none text-white hover:shadow-lg"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <button
          className="flex items-center justify-center md:hidden btn bg-green-600 border-none text-white hover:shadow-lg"
          onClick={clickHandler}
        >
          {togglerNav ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      <div
        className={
          togglerNav
            ? "flex flex-col absolute bg-white w-full z-50 gap-4 md:inline"
            : "hidden md:inline"
        }
        id="nav-dropdown"
      >
        <NavLink className="nav-link" to="/" onClick={clickHandler}>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/" onClick={clickHandler}>
          Who is Joel?
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
