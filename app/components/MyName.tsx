import React from "react";

const MyName = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <h1 className="font-bold text-4xl">
       I'm <span className="text-white">Abhi Ranjan</span>{" "}
      </h1>
      <p className="mt-1 text-white font-bold">( Abhishek Ranjana Gouda G )</p>
      <p className="mt-2 ">Software Engineer</p>
      {/* <p> 1.6+ Years of experience</p> */}

      <button className="bg-black p-5 rounded-3xl text-white mt-5 w-44">
        <div className="flex gap-3 justify-center ">
          <p className="font-semibold">Hire me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default MyName;
