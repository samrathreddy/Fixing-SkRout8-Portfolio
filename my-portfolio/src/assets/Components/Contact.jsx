import React from "react";
import GlobeDemo from "./GlobeDemo";
import Login from "./SignupFormDemo";

export default function Contact() {
  return (
    <div className="mt-[380px]" id="Contact">
      <div>
        <div className=" flex gap-3 justify-center align-middle mt-20">
          <div className="md:w-44 w-16 h-[5px] md:h-2 body3 rounded-full mt-3 md:mt-8  "></div>

          <h1 className=" first-h1 text-[20px] md:text-7xl mt-0 md:mt-0  text-center">
            Contact Me
          </h1>
          <div className=" md:w-44 w-16 h-[5px] md:h-2 body3 rounded-full mt-3 md:mt-8  "></div>
        </div>
      </div>

      <div className=" flex flex-wrap md:flex-row flex-col  mt-[100px] justify-center gap-[55px] md:ml-[90px]">
        <form className="formhandler" method="POST">
          <Login />
        </form>
        <div className=" md:-mt-4 -mt-[150px]">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
}
