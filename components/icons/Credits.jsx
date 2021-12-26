import React from "react";

function Credits({ ...props }) {
  return (
    <svg
      width="14"
      height="21"
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.59967 13.6671C11.3978 13.6671 13.6662 11.3987 13.6662 8.60058C13.6662 5.80244 11.3978 3.53409 8.59967 3.53409C5.80152 3.53409 3.53317 5.80244 3.53317 8.60058C3.53317 11.3987 5.80152 13.6671 8.59967 13.6671Z"
        fill="#B3E7FF"
      />
      <path
        d="M7.33312 13.6662C10.8308 13.6662 13.6662 10.8308 13.6662 7.33312C13.6662 3.83543 10.8308 1 7.33312 1C3.83543 1 1 3.83543 1 7.33312C1 10.8308 3.83543 13.6662 7.33312 13.6662Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.28174 12.3865L1.94418 20.0001L7.47127 17.4928L12.9984 20.0001L11.6608 12.3781"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Credits;
