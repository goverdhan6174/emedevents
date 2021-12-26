import React from "react";

function Star({ ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 5 14.5 5 11C5 7.5 7.68629 5 11 5C14.3137 5 16.5 7.18629 16.5 10.5Z"
        fill="#B3E7FF"
      />
      <circle
        cx="9"
        cy="9"
        r="8"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.44444 4L9.5157 7.36332L12.8889 7.39525L10.1778 9.50583L11.1913 12.8889L8.44444 10.83L5.69763 12.8889L6.71111 9.50583L4 7.39525L7.37319 7.36332L8.44444 4Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Star;
