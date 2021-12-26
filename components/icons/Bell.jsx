import React from "react";

function Bell({ ...props }) {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.2223 7.34768C16.2223 5.66417 15.5849 4.04961 14.4503 2.85919C13.3157 1.66877 11.7769 1 10.1724 1C8.56791 1 7.0291 1.66877 5.89454 2.85919C4.75997 4.04961 4.12258 5.66417 4.12258 7.34768C4.12258 14.7533 1.09766 16.8692 1.09766 16.8692H19.2472C19.2472 16.8692 16.2223 14.7533 16.2223 7.34768Z"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.43958 20.2695L7.21538 20.735C8.48211 21.495 10.0646 21.4951 11.3313 20.735L12.1071 20.2695"
        stroke="#2C4DB9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Bell;
