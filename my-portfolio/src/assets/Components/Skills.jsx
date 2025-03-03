import React from "react";
("use client");
import { AnimatedTooltip } from "./animated-tooltip";
import { people } from "./People";
import { Backend } from "./Backend";
import { Button } from "./moving-border";

function Skills() {
  return (
    <div className="" id="Skills">
      <div class="container">
        <div class="timeline ">
          <ul>
            <li>
              <div class="">
                <Button
                  borderRadius="1.75rem"
                  className=" bg-transparent  w-[380px] h-[190px]
         dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <h1 className="first-h3 pt-5">React Js Development</h1>
                  <p className="first-h5 font-semibold">
                    That sounds like you have some experience working with
                    React.js! React.js is a popular JavaScript library used for
                    building user interfaces, known for its component-based
                    architecture and efficient rendering.
                  </p>
                </Button>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <Button
                  borderRadius="1.75rem"
                  className=" bg-transparent [380px] h-[190px]
         dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <h1 className="first-h3 pt-4">Front-End Developement</h1>
                  <p className="first-h5 font-semibold">
                    Having experience in front-end development with technologies
                    like HTML, CSS, and JavaScript, along with frameworks such
                    as React.js.It often involves creating user interfaces that
                    are visually responsive.
                  </p>
                </Button>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <Button
                  borderRadius="1.75rem"
                  className=" bg-transparent [380px] h-[190px]
         dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <h1 className="first-h3 pt-3">Back-End Developement</h1>
                  <p className="first-h5 font-semibold">
                    Having experience in backend development typically means
                    proficiency in server-side programming languages such as
                    Python Node.js, among others.I often use frameworks like
                    Express.js to build systems.
                  </p>
                </Button>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <Button
                  borderRadius="1.75rem"
                  className=" bg-transparent [380px] h-[190px] 
         dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <h1 className="first-h3 pt-3">Team Management</h1>
                  <p className="first-h5 font-semibold">
                    Experienced in team management and leadership, adept at
                    fostering collaboration, communication, and motivation.
                    Skilled in organizing teams toward shared goals.
                  </p>
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* other skills like Icons */}
      <div>
        <div className="flex flex-col gap-20 flex-wrap ml-[-10px] md:ml-0 mt-10">
          <div className="text-center md:text-3xl text-[15px] first-h5">Front-End & Back-End Languages</div>
          <div className=" flex flex-row items-center flex-wrap justify-center mt-5 gap-10 md:gap-14 mb-10 sm:w-full md:max-w-[1510px]  max-w-[500px]">
            <AnimatedTooltip items={people} />
          </div>
        </div>

        {/* Second Backend language */}
        <div className="flex flex-col gap-16 flex-wrap mt-5">
          <div className="flex flex-row items-center flex-wrap justify-center mt-5 gap-10 md:gap-14 mb-10 sm:w-full  md:max-w-[1510px]  max-w-[500px]">
            <AnimatedTooltip items={Backend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
