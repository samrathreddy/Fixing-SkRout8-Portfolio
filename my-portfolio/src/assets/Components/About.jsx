import React from "react";
import ThreeDCardDemo from "./ThreeDCardDemo";
import Resume from "../Images/Shashikanta Rout Cv.pdf";


// import Home from './Home'

function About() {
  return (
    <div className="mt-28" id="About">
      <div className="flex justify-center align-middle gap-3">
        <div className=" md:w-44 w-16 h-[5px] md:h-2 body3 rounded-full mt-3 md:mt-8 "></div>
        <div>
          <h1 className=" first-h1 text-3xl md:text-7xl -mt-1 md:mt-0  text-center">Overview</h1>
        </div>
        <div className=" md:w-44 w-16 h-[5px] md:h-2 bg-white rounded-full mt-3 md:mt-8  body3 "></div>
      </div>
      <div className="flex justify-around align-middle flex-wrap -space-x-10">
        <div>
          <ThreeDCardDemo />
        </div>
        <div className="md:w-[540px] max-w-[500px] md:pl-0 pl-[83px] md:pr-0 pr-[40px] md:mt-0 mt-[-80px]">
          <p className=" text-justify first-h8 mt-20 ">
            Heyy This is Shashikanta Rout,I'm 22-year-old and I'm a React JS
            developer from Odisha,India. Passionate about web development, I
            specialize in creating dynamic applications using React JS.
            Recently,I completed an enriching internship at Meta Craftlab, where
            I refined my skills in frontend development and gained hands-on
            experience in collaborative project environments.I am dedicated to
            mastering new technologies and methodologies, ensuring that my
            applications not only meet but exceed user expectations. With a
            strong foundation in React JS,I strive to innovate and deliver
            user-friendly solutions that make a positive impact. Beyond coding,
            I am enthusiastic about exploring emerging trends in technology and
            contributing to the vibrant developer community.
          </p>
          <div className="first-h4 mt-5 flex flex-row flex-wrap gap-5">
            <div>Age: 22</div>
            <div>Email: Routshashikanta5@gmail.com</div>
            <div>Place: Balasore,Odisha</div>
          </div>
          <div className=" mt-10">
            <a href={Resume} download="download" target="_blank">
              <button class="button ">
                <span className="one">Resume</span>
                <span className="two text-white">100%</span>
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
