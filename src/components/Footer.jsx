import React from "react";
import Logo from "../assets/k.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="lg:hidden flex flex-col justify-between text-center items-center">
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            <li>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/krishnakant-yadav-6025431b4/"
              >
                LinkedIn <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/krishnakantyadav19"
              >
                GitHub <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:krishnakantyadav19@gmail.com"
              >
                Email <HiOutlineMail size={20} />
              </a>
            </li>
            <li>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/1XPHOq_v0Ahll-OTYp5-b6G1bfrUsUsAY/view?usp=sharing"
              >
                Resume <BsFillPersonLinesFill size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-xs">
            <p>&copy; 2023 My Portfolio. All Rights Reserved.</p>
          </div>
          <div className="flex justify-between text-center items-center">
            <img
              className="rounded-3xl"
              src={Logo}
              alt="Logo"
              style={{ width: "40px" }}
            />
            <p className="justify-between text-center m-2 text-gray-300 items-center">
              Designed and Developed by Krishnakant yadav
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
