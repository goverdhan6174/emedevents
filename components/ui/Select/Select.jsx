import React from "react";

function Select() {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          className="w-full form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option className="flex justify-between px-2" defaultValue>
            Please select your certificates
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M4.99518 5.55447C4.61326 6.23597 3.63239 6.23597 3.25047 5.55447L0.972074 1.48887C0.598513 0.822289 1.08031 8.48968e-08 1.84443 1.53718e-07L6.40122 5.64128e-07C7.16535 6.3295e-07 7.64714 0.822291 7.27358 1.48888L4.99518 5.55447Z"
        fill="#373737"
      />
    </svg>
  );
}

export default Select;
