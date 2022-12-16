import React from "react";
import "./TopNav.css";

function TopNav() {
  return (
    <nav>
      <div className="navContainer">
        {/* logo and name */}
        <div className="logo">
          <div className="logo_container" />
          <p>medical darpan</p>
        </div>

        {/* menu */}
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Distributors</a>
            </li>
            <li>
              <a href="#">Manufactures</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* accounts */}
        <div className="accounts">
          <a href="#" className="login">
            Login
          </a>
          {/* account logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="white"
            className="svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
