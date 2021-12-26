import React from "react";

function VerticalDots({ ...props }) {
  return (
    <svg
      width="5"
      height="19"
      viewBox="0 0 5 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.01458 11.0625C2.87256 11.0625 3.52917 10.3409 3.52917 9.49997C3.52917 8.65902 2.87256 7.93747 2.01458 7.93747C1.15661 7.93747 0.5 8.65902 0.5 9.49997C0.5 10.3409 1.15661 11.0625 2.01458 11.0625Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.01458 3.625C2.87256 3.625 3.52917 2.90345 3.52917 2.0625C3.52917 1.22155 2.87256 0.5 2.01458 0.5C1.15661 0.5 0.5 1.22155 0.5 2.0625C0.5 2.90345 1.15661 3.625 2.01458 3.625Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.01458 18.5C2.87256 18.5 3.52917 17.7784 3.52917 16.9375C3.52917 16.0965 2.87256 15.375 2.01458 15.375C1.15661 15.375 0.5 16.0965 0.5 16.9375C0.5 17.7784 1.15661 18.5 2.01458 18.5Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default VerticalDots;
