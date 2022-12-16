import React from "react";
import "./Card.css";
import { Strength } from "../../../data";

function StrengthCard() {
  return (
    <div className="cardContainer">
      <div className="cardName">
        <p>{Strength.heading}</p>
      </div>
      <ul>
        {Strength.data.slice(0, 1).map((option, i) => (
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

        {Strength.data.slice(1).map((option, i) => (
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

export default StrengthCard;
