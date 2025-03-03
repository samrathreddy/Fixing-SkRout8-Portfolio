"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import weather from "../Images/weather.png";
import Netflix from "../Images/Netflix.png";
import Discord from "../Images/Discord.png";
import Morden from "../Images/Morden.png";
import Techfest from "../Images/Techfest.png";
import Spotify from "../Images/Spotify.png";

import { link } from "./Links";


function Project() {
  return (
    <div className="" id="Project">
      <div>
        <div className=" flex gap-3 justify-center align-middle mt-20">
          <div className="md:w-44 w-16 h-[5px] md:h-2 body3 rounded-full mt-3 md:mt-8  "></div>

          <h1 className=" first-h1 text-[20px] md:text-7xl mt-0 md:mt-0  text-center">Projects Overview</h1>
          <div className=" md:w-44 w-16 h-[5px] md:h-2 body3 rounded-full mt-3 md:mt-8  "></div>
        </div>
      </div>




      <div className="mypoint flex md:flex-row flex-col md:mt-0  mt-[-50px] justify-around gap-24 md:gap-[200px] -ml-5 md:mr-[200px] ">



        <div className=" mt-[300px] ml-[200px]">
          <PinContainer href="">
            <div className="flex  basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">

              <div className=" flex gap-5 md:flex-row flex-col   justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Weather App
                </h3>

                <a href={link}>
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>

              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  It provides detailed local forecast & weather forecast world
                  wide.
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={weather} />
            </div>
          </PinContainer>
        </div>

        <div className=" mt-[300px] ml-[200px]">
          <PinContainer href="">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className=" flex gap-5  justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Netflix App
                </h3>

                <a href="https://github.com/SkRout8/Netflix-clone/tree/main/Netflix%20clone">
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  It is a streaming service that allows our members to watch TV
                  shows.
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={Netflix} />
            </div>
          </PinContainer>
        </div>

        <div className=" mt-[300px]  ml-[200px] ">
          <PinContainer href="">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className=" flex gap-5  justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Discord Website
                </h3>

                <a href="https://github.com/SkRout8/dicord_clone">
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  Discord is a voice, video, and text chat app that's used by
                  millions of people
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={Discord} />
            </div>
          </PinContainer>
        </div>
      </div>












      <div className=" mypoint flex md:flex-row flex-col md:mt-28 mt-24 justify-around gap-24 md:gap-[200px] -ml-5 md:mr-[200px]  ">
        <div className=" mt-[300px] ml-[200px]">
          <PinContainer href="">
            <div className="flex basis-28 flex-1 flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className=" flex gap-5  justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Morden Chair
                </h3>

                <a href="https://github.com/SkRout8/Morden__chair/tree/main/modern%20chair">
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  Most of the modern chairs in the present era are made from
                  materials
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={Morden} />
            </div>
          </PinContainer>
        </div>

        <div className=" mt-[300px] ml-[200px] ">
          <PinContainer href="">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className=" flex gap-5  justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Techfest Web
                </h3>

                <a href="https://github.com/SkRout8/Fest-Saksham-2024">
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  It is a Techfest is the annual science and technology festival
                  Website.
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={Techfest} />
            </div>
          </PinContainer>
        </div>

        <div className=" mt-[300px] ml-[200px] ">
          <PinContainer href="">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className=" flex gap-5  justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 first-h6">
                  Spotify App
                </h3>

                <a href="https://github.com/SkRout8/spotifyclone/tree/main/Spotify%20Clone">
                  <button
                    id="btn"
                    className=" -mt-2 text-white   w-[150px] first-h6 h-10"
                  >
                    Source code
                  </button>
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white top-2 relative first-h3 ">
                  potify is a digital music that gives you access to millions of
                  songs.
                </span>
              </div>
              <div className=" mt-3 " />
              <img className=" rounded-lg  object-cover" src={Spotify} />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}

export default Project;
