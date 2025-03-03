"use client";

import React from "react";
import Image from "../Images/Shashi.jpeg";
import { CardBody, CardContainer, CardItem } from "../Components/3d-card";
// import Link from "";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] body4 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className=" first-h2 text-xl font-bold text-white dark:text-white"
        >
          Shashikanta Rout
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        ></CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={Image}
            className="h-[290px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className=" first-h2 flex mt-14">
          Shahi Codes 
        </div>
      </CardBody>
    </CardContainer>
  );
}
