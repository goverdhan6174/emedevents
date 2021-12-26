import React from "react";

function Video({ ...props }) {
  return (
    <svg
      width="21"
      height="14"
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.9997 7.3321L13.9547 7.04234L19.9997 11.3602V7.3321Z"
        fill="white"
      />
      <path
        d="M19.9999 2.72559L13.9549 7.04345L19.9999 11.3613V2.72559Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2591 4.16636H4.51845C3.74117 4.16636 3.11105 4.70646 3.11105 5.3727V11.4044C3.11105 12.0707 3.74117 12.6108 4.51845 12.6108H12.2591C13.0364 12.6108 13.6665 12.0707 13.6665 11.4044V5.3727C13.6665 4.70646 13.0364 4.16636 12.2591 4.16636Z"
        fill="#B3E7FF"
      />
      <path
        d="M12.2264 1H2.72714C1.77327 1 1 1.77327 1 2.72714V11.3629C1 12.3167 1.77327 13.09 2.72714 13.09H12.2264C13.1803 13.09 13.9536 12.3167 13.9536 11.3629V2.72714C13.9536 1.77327 13.1803 1 12.2264 1Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Video;
