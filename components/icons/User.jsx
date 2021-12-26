import React from "react";

function User({ ...props }) {
  return (
    <svg
      width="63"
      height="62"
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.5961 60.6154C48.3877 60.6154 62 47.27 62 30.8077C62 14.3454 48.3877 1 31.5961 1C14.8045 1 1.19226 14.3454 1.19226 30.8077C1.19226 47.27 14.8045 60.6154 31.5961 60.6154Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.6756 13.0034C35.5984 13.0034 39.5892 17.1476 39.5892 22.2598V28.4307C39.5892 33.5428 35.5984 37.687 30.6756 37.687C25.7528 37.687 21.7621 33.5428 21.7621 28.4307V22.2598C21.7621 17.1476 25.7528 13.0034 30.6756 13.0034Z"
        fill="white"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 60.5C49.5 59.8519 54 50.5 54.5 50.5C51.5 47.5 42.3273 42.1295 30.6711 42.129C19.0149 42.1284 7.5 49 7.5 49C7.5 49 14.5 61.1481 32 60.5Z"
        fill="white"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;
