"use client"

const NavBar = () => {
  return (
    <nav className="flex flex-col justify-center items-center md:justify-between m-10">
      <div className="flex flex-col  text-sm font-semibold gap-3 md:flex-row md:items-center">
        <h1 className="bg-slate-300 p-2 rounded-2xl">
          Abhishekranjanagoudag@gmail.com
        </h1>

        <div className="flex gap-4 justify-center">
          <button className="bg-background p-2 w-24 rounded-xl "
          onClick={()=>{
            navigator.clipboard.writeText("abhishekranjanagoudag@gmail.com").then(
              ()=>{
               alert("Email copied to clipboard")
              }
            )
          }}
          >
            <div className="flex gap-1 justify-center ">
         
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
              </svg>
              <p>Copy</p>
            </div>
          </button>
          <button className="bg-background p-2 w-24 rounded-xl ">
            <div className="flex gap-1 justify-center ">
              <a href="/assets/abhishek_resume.pdf" download>Resume</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div>
        <ul className="flex mt-10 gap-2 cursor-pointer font-semibold">
          <li><a href=" https://www.linkedin.com/in/abhishekranjanagouda" target="_blank">Linked In |</a></li>
          <li ><a href="https://github.com/abhiranjan2123" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
