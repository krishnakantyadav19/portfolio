import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
const Education = () => {
  const [toggel, setToggel] = useState(false);
  const handleClick = () => {
    setToggel(!toggel);
  };
  const [toggel1, setToggel1] = useState(false);
  const handleClick1 = () => {
    setToggel1(!toggel1);
  };
  const [toggel2, setToggel2] = useState(false);
  const handleClick2 = () => {
    setToggel2(!toggel2);
  };
  return (
    <div name="education" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Education
          </p>
        </div>
        <div>
          <div className="w-full text-2xl font-bold mx-auto p-4 flex flex-col justify-center">
            <div onClick={handleClick} className="flex cursor-pointer ">
              <p className="">Master of Computer Application</p>
              {!toggel ? (
                <FcExpand className="m-2" />
              ) : (
                <FcCollapse className="m-2" />
              )}
            </div>
          </div>
          <p
            className={
              !toggel
                ? "hidden"
                : "w-full text-1xl  mx-auto p-4 border-2 rounded-lg "
            }
          >
            <p className="font-bold ">
              National Institue Of Technologies Bhopal 2022 <br /> CGPA 8.14/10
            </p>
            <br />
            Gained hands‑on experience in various programming languages like C,
            C++, JS, NodeJS and SQL, as well as tools and technologies like Git,
            IDEs.Developed expertise in software development and acquired
            experience in full‑stack web development, and software
            testing.During my time as a student, I had the opportunity to work
            on a social media project as part of my college coursework. In this
            project, I was responsible for developing the backend using Node.js,
            Express and MongoDb, with a focus on building a scalable and secure
            application. I gained valuable experience in Node.js and Express, as
            well as the principles of scalable and secure backend development .
          </p>
        </div>
        <div>
          <div className="w-full text-2xl font-bold mx-auto p-4 flex flex-col justify-center ">
            <div onClick={handleClick1} className="flex cursor-pointer ">
              <p className="">Bachelor's of Computer Application</p>
              {!toggel1 ? (
                <FcExpand className="m-2" />
              ) : (
                <FcCollapse className="m-2" />
              )}
            </div>
          </div>
          <p
            className={
              !toggel1
                ? "hidden"
                : "w-full text-1xl  mx-auto p-4 border-2 rounded-lg"
            }
          >
            <p className="font-bold ">
              Devi Ahilya Vishwavidyalaya Indore 2019
              <br /> CGPA 60.14/100
            </p>
            <br />
            As a part of my learning experience,I gained basic knowledge of
            Computer Applications and learn a programming languages lile C/C++,
            DBMS, Data Structures and I built a URL shortener as a mini‑project.
            This project involved designing and implementing a web application
            that allowed users to create shortened URLs that could be easily
            shared and tracked. To achieve this, I used a variety of
            technologies, including Node.js, Express, and MongoDB.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
