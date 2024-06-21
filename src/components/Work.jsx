import React from "react";
import spotify from "../assets/projects/spotify.jpg";
import SnowBall from "../assets/projects/snowball.png";
import ckn from "../assets/projects/ckn.png";
import Gupshup from "../assets/projects/gupshup.png";
import OriginScale from "../assets/projects/originscale.png";
import BankcyCrm from "../assets/projects/banksyCRM.png";
// import realeState from "../assets/projects/ckn.png";
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
            style={{ backgroundImage: `url(${SnowBall})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SnowBall CRM
              </span>
              <p className="text-1xl text-white tracking-wider">
              A website that businesses use to manage and analyze customer interactions and 
              data throughout the customer lifecycle
              </p>
              <div className="pt-8 text-center">
                <a href="https://snowballcrm-one.vercel.app/signin">
                  <button className="text-center roundend-lg px-1 rounded-sm py-1 m-1 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${OriginScale})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              OriginScale
              </span>
              <p className="text-1xl text-white tracking-wider">
              Led a team in developing a comprehensive ERP solution that includes POS, CRM, and third-party integrations
              using React, Redux, Node.js, Express, and Serverless architecture.
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.chaikenashedi.in/">
                  <button className="text-center roundend-lg  px-1 rounded-sm py-1 m-1 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BankcyCrm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              BankcyCrm CRM
              </span>
              <p className="text-1xl text-white tracking-wider">
              Developed a CRM application using Next.js that manages user payments for NFTs and blockchain transactions.
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.chaikenashedi.in/">
                  <button className="text-center roundend-lg  px-1 py-1 rounded-sm m-1 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Gupshup})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              Gupshup
              </span>
              <p className="text-1xl text-white tracking-wider">
              Use Zoho CRM to engage with customers through WhatsApp unobtrusively. 
              Send text messages and multimedia to your leads, contacts, and customers from within Zoho CRM screens. 
              </p>
              <div className="pt-8 text-center">
                <a href="https://marketplace.zoho.com/app/crm/gupshup-whatsapp-messaging-for-zoho-crm">
                  <button className="text-center roundend-lg  px-1 py-1 m-1 rounded-sm bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${spotify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              spotify clone
              </span>
              <p className="text-1xl text-white tracking-wider">
              web development by building an improved version of Spotify.
              </p>
              <div className="pt-8 text-center">
                <a href="https://main--sunny-pegasus-2b4d01.netlify.app/">
                  <button className="text-center roundend-lg  px-1 py-1 rounded-sm m-1 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ckn})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/** Hover */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              ckn
              </span>
              <p className="text-1xl text-white tracking-wider">
                Live Client Application for Billing
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.chaikenashedi.in/">
                  <button className="text-center roundend-lg  px-1 py-1 rounded-sm m-1 bg-white text-gray-700 font-bold text-lg">
                    Demo
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
