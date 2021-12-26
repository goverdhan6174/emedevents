import React from "react";

function HamburgerMenu({ ...props }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1H20"
        stroke="#1A3795"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.27734 10L19.9669 10"
        stroke="#1A3795"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 19H20"
        stroke="#1A3795"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HamburgerMenu;
