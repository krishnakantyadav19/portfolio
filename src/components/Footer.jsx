import React from "react";
import Logo from "../assets/k.png";
function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            <p>&copy; 2023 My Portfolio. All Rights Reserved.</p>
          </div>
          <div className="flex justify-between text-center items-center">
            <img
              className="rounded-3xl"
              src={Logo}
              alt="Logo"
              style={{ width: "50px" }}
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
