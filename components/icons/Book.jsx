import React from "react";

function Book({ ...props }) {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 12.1058C1 11.685 1.18108 11.2814 1.50341 10.9839C1.82574 10.6864 2.26291 10.5192 2.71875 10.5192H12"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.71875 1H12V13.6923H2.71875C2.26291 13.6923 1.82574 13.5252 1.50341 13.2276C1.18108 12.9301 1 12.5265 1 12.1058V2.58654C1 2.16576 1.18108 1.76222 1.50341 1.46469C1.82574 1.16715 2.26291 1 2.71875 1V1Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Book;
