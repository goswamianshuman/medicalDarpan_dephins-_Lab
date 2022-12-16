import React from "react";
import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="mainContainer">
      {/* breadcrum */}
      <ul className="breadcrum">
        <li>
          <p>Medical darpan</p>
        </li>
        <li>
          <p>Search</p>
        </li>
        <li>
          <p>
            <span>FabiFlu Tablet</span>
          </p>
        </li>
      </ul>

      {/* searchbar */}

      <div className="searchBar">
        {/* search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          className="cross_search"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input type="text" placeholder="Paracetamol" />
        <button>Search</button>
      </div>

      {/* product heading */}

      <div className="product_heading">
        <p className="heading">
          Paracetamol <span>(128 products)</span>
        </p>

        <div className="commonSelector">
          <p>Aceclofenac</p>
          {/* svg */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            id="cross"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="commonSelector">
          <p>500 mg</p>
          {/* svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            id="cross"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <a className="remove" href="#">
          Remove all
        </a>
      </div>
    </div>
  );
}

export default BottomNav;
