import React from "react";

function Sound({ ...props }) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6665 4.52386L6.48132 8.33339H3.6665V13.1906H6.48132L11.6665 17.0002V4.52386Z"
        fill="#B3E7FF"
      />
      <path
        d="M11.6334 1L5.72594 5.72594H1V12.8148H5.72594L11.6334 17.5408V1Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.541 1C19.756 3.21561 21.0002 6.22022 21.0002 9.35309C21.0002 12.486 19.756 15.4906 17.541 17.7062"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9963 4.54443C15.5093 5.95465 16.3593 7.86706 16.3593 9.86111C16.3593 11.8552 15.5093 13.7676 13.9963 15.1778"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Sound;
