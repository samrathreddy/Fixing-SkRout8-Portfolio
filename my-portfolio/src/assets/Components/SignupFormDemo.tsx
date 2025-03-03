"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../Images/utils/cn";


export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
      <h2 className="font-bold text-xl first-h3 ">
        Welcome to Shashi Codes
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 first-h5">
        Send to me if you don&apos;t  contact me 
        yet .........
      </p>

      <form className="my-8" method="POST" onSubmit={handleSubmit} action="https://formspree.io/f/myzgynqo">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="username" >Enter Your Name</Label>
            <Input className="bg-gray-600 first-h7"  id="firstname" placeholder="Enter Your Name" type="text"
            name="username"
            required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" >Email Address</Label>
          <Input className="bg-gray-600 first-h7"  id="email" placeholder="Email Address" type="email"
          name="email"
          required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="text" ></Label>
          <Input className="bg-gray-500 first-h7 h-28" id="password" placeholder="Enter Your Messege" type="text"
          name="text"
          required />
        </LabelInputContainer>
      

        <button 
          className=" mt-14 bg-gradient-to-br relative group/btn from-pink-800 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] animate-bounce"
          type="submit"
        >
         Send Me
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          
          
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
