import React from "react";

function Calendar({ ...props }) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="2"
        width="12"
        height="12"
        rx="2"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M7 10L10 10"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M4 6H7"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M9.66675 1V2.33333"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.33325 1V2.33333"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Calendar;
