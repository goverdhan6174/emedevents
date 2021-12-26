import React from "react";

function Close({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.625 6.625L13.375 13.375"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.375 6.625L6.625 13.375"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Close;
