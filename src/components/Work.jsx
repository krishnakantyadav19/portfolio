import React from "react";
import workImg from "../assets/projects/spotify.jpg";
import realeState from "../assets/projects/ckn.png";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 py-20 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Work
          </p>
          <p className="py-6">This section include my previous projects.</p>
        </div>
        {/** container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/** grid item */}
          <div
            style={{ backgroundImage: `url(${realeState})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Chai Ke Nasedi
              </span>
              <p className="text-1xl text-white tracking-wider">
                Live Client Application
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.chaikenashedi.in/">
                  <button className="text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <p className="text-1xl text-white tracking-wider">
                web development by building an improved version of Spotify.
              </p>
              <div className="pt-8 text-center">
                <a href="https://main--sunny-pegasus-2b4d01.netlify.app/">
                  <button className="text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/krishnakantyadav19/spotify">
                  <button className="text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
