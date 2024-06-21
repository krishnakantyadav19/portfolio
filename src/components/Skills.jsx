import React from "react";

import HTML from "../assets/html.png";
import Jenkins from "../assets/jenkins8460.jpg";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import REACT from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import DOCKER from "../assets/docker.png";
import Kubernetes from "../assets/Kubernetes_logo_without_workmark.svg.png";
import AWS from "../assets/AWS.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            List of technical skills related to my area of expertise. This can
            include programming languages, software tools.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="HTML" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={DOCKER} alt="HTML" />
            <p className="my-4">DOCKER</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Kubernetes} alt="HTML" />
            <p className="my-4">Kubernetes</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jenkins} alt="HTML" />
            <p className="my-4">Jenkins</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
