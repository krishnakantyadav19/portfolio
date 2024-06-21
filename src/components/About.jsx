import React from "react";
import DP from "../assets/dp.jpeg";
const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  gap-8 px-4">
          {/* <div className="m-10">
            <img className="rounded-full" src={DP} alt="Profile Picture" />
          </div> */}
          <div className="m-10">
            <p>
            I'm a Full-Stack Web Developer with expertise in HTML, 
            CSS/Tailwind, JavaScript, React, Node.js, Express, Git/GitHub, 
            and more. I also have experience in C/C++, MongoDB, SQL, REST APIs, 
            Nest.JS, and Microservices. Additionally, 
            I'm skilled in DevOps practices and tools such as Docker, 
            Kubernetes, Jenkins, and AWS. My familiarity with project management 
            and collaboration tools includes Jira, Trello, and GitLab, ensuring 
            efficient workflow and communication within teams. I have experience 
            with Firebase for backend services, including authentication, real-time 
            databases, and cloud functions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
