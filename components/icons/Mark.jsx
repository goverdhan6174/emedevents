import React from "react";

function Mark({ ...props }) {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3579 15.0954V5.57153C14.3579 4.51955 13.562 3.66675 12.5801 3.66675H5.46896C4.48711 3.66675 3.69116 4.51955 3.69116 5.57153V15.0954C3.69116 16.1474 4.48711 17.0002 5.46896 17.0002H12.5801C13.562 17.0002 14.3579 16.1474 14.3579 15.0954Z"
        fill="#B3E7FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5713 14.5713V3.26188C14.5713 2.01268 13.5586 1 12.3094 1H3.26188C2.01268 1 1 2.01268 1 3.26188V14.5713C1 15.8205 2.01268 16.8332 3.26188 16.8332H12.3094C13.5586 16.8332 14.5713 15.8205 14.5713 14.5713Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95801 7.22003H11.7436"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M4.95801 11.7436H8.35083"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Mark;
