import React from "react";

function Left({ ...props }) {
  return (
    <svg
      width="7"
      height="14"
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.49634 13L1.00001 7L6.49634 1"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Left;
