import React from "react";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import hello from "../Images/hello.png";
import portfolio from "../Images/Portfolio1.json";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { Spotlight } from "./Spotlight";
// import Spotlight from './Spotlight'


function Home() {
  return (
    <>
    
      <div className="md:pt-48 pt-32">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      
        <div className=" flex flex-row  justify-around align-middle flex-wrap ml-16 md:gap-10 gap-40">
          <div className=" flex flex-col ml-[-80px] md:ml-0 md:mt-0 mt-[-50px]">
            <div className="flex gap-2">
              <div className="">
              <Spotlight
        className="top-[3rem] left-0 md:left-20 md:top-[2rem]"
        fill="white"
      />
                <h1 className="first-h1 text-blue-700 text-3xl md:ml-0 ml-[-52px] md:text-5xl text-start md:text-center">
                  Hii I'm Shashi
                </h1>
              </div>
              <div>
                <img className=" w-10 h-10" src={hello} />
              </div>
            </div>
            

            <div className=" mt-2 md:mt-5">
              <TypeAnimation
                className="first-h1 text-white text-3xl md:ml-0 ml-[-52px] md:text-5xl text-start md:text-center  "
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  // "For Indian & Chinese cuisine |",
                  // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " A Web Developer",
                  1000,
                  "A Coder ",
                  1000,
                  "A Learner ",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  
                  display: "inline-block",
                  textAlign: "center",
                  // position:"fixed"
                }}
                repeat={Infinity}
              />
            </div>
            <div className=" mt-4 md:mt-3 md:ml-0 -ml-[50px]">
              <p className="first-h1 md:text-xl text-base text-violet-500 font-bold">
                From Odisha , India
              </p>
            </div>
          </div>

          <div>
            <Lottie
              className=" w-[400px] h-[400px] ml-[-80px]  -mt-[100px] md:-mt-[130px] md:ml-24"
              animationData={portfolio}
            />
          </div>
        </div>
      </div>

      {/* Our Other Menus */}
      <div>
        <div className=" ">
          <About />
        </div>
      </div>

      <div>
        <div className=" ">
          <Skills />
        </div>
      </div>

     <div>
     <div className=" ">
          <Project />
        </div>
     </div>

     <div>
        <div className=" ">
          <Contact/>
        </div>
      </div>
       
     
    </>
  );
}

export default Home;
