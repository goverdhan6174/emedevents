import React from "react";

function Bookmark({ ...props }) {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.25 19L7.125 14L13 19V3C13 2.46957 12.7893 1.96086 12.4142 1.58579C12.0391 1.21071 11.5304 1 11 1H3.25C2.71957 1 2.21086 1.21071 1.83579 1.58579C1.46071 1.96086 1.25 2.46957 1.25 3V19Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Bookmark;
