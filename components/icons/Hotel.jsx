import React from "react";

function Hotel({ ...props }) {
  return (
    <svg
      width="49"
      height="33"
      viewBox="0 0 49 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 8.5C12.5 7.39543 13.3954 6.5 14.5 6.5H38.7366C39.8411 6.5 40.7365 7.39543 40.7365 8.5V32H12.5V8.5Z"
        fill="#B3E7FF"
      />
      <path
        d="M7 4C7 2.34315 8.34315 1 10 1H38.0427C39.6996 1 41.0427 2.34315 41.0427 4V31.7091H7V4Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M1 32H48.5"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M19.6505 23.0325C19.6505 21.9279 20.5459 21.0325 21.6505 21.0325H25.8861C26.9907 21.0325 27.8861 21.9279 27.8861 23.0325V31.8042H19.6505V23.0325Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M19.6504 23.0325C19.6504 21.9279 20.5458 21.0325 21.6504 21.0325H25.8861C26.9906 21.0325 27.8861 21.9279 27.8861 23.0325V31.8042H19.6504V23.0325Z"
        fill="white"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <rect
        x="12.0566"
        y="8"
        width="5"
        height="7"
        rx="1"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <rect
        x="21.0566"
        y="8"
        width="5"
        height="7"
        rx="1"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <rect
        x="31.2864"
        y="8"
        width="5"
        height="7"
        rx="1"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Hotel;
