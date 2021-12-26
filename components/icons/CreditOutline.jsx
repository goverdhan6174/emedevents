import React from "react";

function CreditOutline({ ...props }) {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.33309 11.6662C9.27848 11.6662 11.6662 9.27848 11.6662 6.33309C11.6662 3.38771 9.27848 1 6.33309 1C3.38771 1 1 3.38771 1 6.33309C1 9.27848 3.38771 11.6662 6.33309 11.6662Z"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.92115 10.5886L1.7948 16.9999L6.44914 14.8886L11.1035 16.9999L9.97712 10.5815"
        stroke="#171717"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CreditOutline;
