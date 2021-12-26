import React from "react";

function Planer({ ...props }) {
  return (
    <svg
      width="41"
      height="33"
      viewBox="0 0 41 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 32H40"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M15 10C15 8.34315 16.3431 7 18 7H33C34.1046 7 35 7.89543 35 9V30C35 31.1046 34.1046 32 33 32H18C16.3431 32 15 30.6569 15 29V10Z"
        fill="white"
      />
      <path d="M15.0174 5.5V28" stroke="black" strokeWidth="0.5" />
      <path
        d="M9.90527 8.5V3C9.90527 1.89543 10.8007 1 11.9053 1H33.1659C34.2705 1 35.1659 1.89543 35.1659 3V27.1372V30.1764V30.1764C35.1659 31.1836 34.3495 32 33.3424 32H11.9053C10.8007 32 9.90527 31.1045 9.90527 30V24M9.90527 8.5H8.5M9.90527 8.5V14M9.90527 14H8.5M9.90527 14V19M9.90527 19H8.5M9.90527 19V24M9.90527 24H8.5"
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default Planer;
