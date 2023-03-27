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
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="m-10">
            <img className="rounded-full" src={DP} alt="Profile Picture" />
          </div>
          <div className="m-10">
            <p>
              I'm a Full-Stack Web Developer with expertise in HTML,
              CSS/Tailwind, JavaScript, React, Node.js, Express, Git/GitHub, and
              more. I also have experience in C/C++, MongoDB, SQL, REST APIs,
              Nest.JS, and Microservices. I specialize in building scalable and
              efficient web applications with a focus on user experience. My
              passion for solving complex problems drives me to explore the
              latest web technologies and stay up-to-date with industry trends
              and I'm always eager to learn new things and collaborate with
              others. I have a passion for building high-quality, scalable, and
              efficient web applications that solve real-world problems. My
              expertise in front-end technologies like React.js and back-end
              technologies like Node.js allows me to build full-stack
              applications that are fast, responsive, and user-friendly.Take a
              look around my portfolio to see some of the projects I've worked
              on and get in touch if you'd like to discuss your next project or
              have any questions for me. Thanks for visiting!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
