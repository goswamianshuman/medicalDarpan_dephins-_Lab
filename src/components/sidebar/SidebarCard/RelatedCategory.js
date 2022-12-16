import React from "react";
import "./Card.css";
import { related_Cateogry } from "../../../data";

function Related_Cateogry() {
  return (
    <div className="cardContainer">
      <div className="cardName">
        <p>{related_Cateogry.heading}</p>
      </div>
      <ul>
        {related_Cateogry.data.slice(0, 3).map((option, i) => (
          <li key={i} className={"list"}>
            <p>{option}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              // stroke="black"
              className={"cross"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        ))}

        {related_Cateogry.data.slice(3, 4).map((option, i) => (
          <li key={i} className={"newList"}>
            <p>{option}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              // stroke="black"
              className={"newCross"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        ))}

        {related_Cateogry.data.slice(4, 6).map((option, i) => (
          <li key={i} className={"list"}>
            <p>{option}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              // stroke="black"
              className={"cross"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Related_Cateogry;
