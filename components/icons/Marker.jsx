import React from "react";

function Marker({ ...props }) {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.4545 6.72727C12.4545 11.1818 6.72727 15 6.72727 15C6.72727 15 1 11.1818 1 6.72727C1 5.20831 1.60341 3.75155 2.67748 2.67748C3.75155 1.60341 5.20831 1 6.72727 1C8.24624 1 9.70299 1.60341 10.7771 2.67748C11.8511 3.75155 12.4545 5.20831 12.4545 6.72727Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.72745 8.63654C7.78181 8.63654 8.63654 7.78181 8.63654 6.72745C8.63654 5.67309 7.78181 4.81836 6.72745 4.81836C5.67309 4.81836 4.81836 5.67309 4.81836 6.72745C4.81836 7.78181 5.67309 8.63654 6.72745 8.63654Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Marker;
