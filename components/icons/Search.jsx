import React from "react";

function Search({ ...props }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.71368 18.7777C14.6264 18.7777 18.609 14.798 18.609 9.88886C18.609 4.97968 14.6264 1 9.71368 1C4.80093 1 0.818359 4.97968 0.818359 9.88886C0.818359 14.798 4.80093 18.7777 9.71368 18.7777Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8344 21.0003L15.9973 16.167"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Search;
