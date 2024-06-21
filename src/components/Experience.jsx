import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
const Experience = () => {
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
    <div
      name="experience"
      className="w-full h-full py-24 bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
        </div>
        <div className="py-4 max-w-[700px]">
          <p className="font-bold">Remote Developer Jan 2022 - Present</p>
          <p>
          I have been working as a Remote Developer at ORIGINSCALE, 
          where I led a team in developing a comprehensive ERP solution that integrates POS,
           CRM, and various third-party services using React, Redux, Node.js, Express, 
           and Serverless architecture. My role involved implementing diverse third-party integrations,
            including UPS, Authorize.net, and Stripe, to enhance the ERP system's functionality and versatility. 
            Additionally, I utilized AWS services such as Lambda and SNS to create a scalable and efficient backend 
            infrastructure.
          </p>
          <p>
          In another project, BanksyCRM, I developed a CRM application using Next.js 
          to manage user payments for NFTs and blockchain transactions. I designed a comprehensive dashboard 
          to display user payment data and analytical graphs, providing clear financial insights. To ensure secure and 
          reliable user authentication, I implemented webhook APIs, multi-factor authentication (MFA), Google OAuth, 
          and biometric login. The technologies used in this project included Next.js, CRM, 
          Webhook APIs, MFA, Google OAuth, and biometric login.
          </p>
        </div>
        <div className="py-4 max-w-[700px]">
          <p className="font-bold">InfoObjects Inc. July 2019 - Dec 2021</p>
          <p>
            As a software developer, I had the opportunity to work on the
            Gupshup app for Zoho CRM Marketplace, where I contributed to both
            the backend development in NodeJS , Express and user interface
            design in ReactJs. I was responsible for designing and developing
            the user interface for the app, with a focus on creating a seamless
            and intuitive user experience. This involved working closely with
            the Gupshup team to understand their requirements. I also
            contributed to the backend development of the app, including API
            development. My experience with API development extends beyond the
            Gupshup app. I've worked on a variety of API-related projects, from
            designing and implementing RESTful APIs to integrating third-party
            APIs into existing systems.
          </p>
          <p>
            During my training at Epsilon, I had the opportunity to work on
            several exciting projects that helped me develop my skills as a
            software developer. One of my key contributions was to the
            development of an application using NGX Formly, an open‑source
            library for building dynamic forms in Angular. I was responsible for
            implementing the form functionality. In addition, I had the
            opportunity to work with MoleculerJS, a modern microservices
            framework for Node.js.Overall, my experience with Epsilon, NGX
            Formly, Angular microservices, MoleculerJS, and NestJS has helped me
            develop a strong foundation in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
