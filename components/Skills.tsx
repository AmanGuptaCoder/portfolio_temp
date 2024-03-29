import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import { Skill as SkillType } from "../typings";
// import Skill from "./Skill";
import Github from "../public/github.png";
import Gitlab from "../public/icons8-gitlab-480.png";
import Postman from "../public/postman-icon.webp";
import Tailwind from "../public/icons8-tailwind-css-480.png";
import Jira from "../public/icons8-jira-480.png";
import Html from "../public/html-5.png";
import Css from "../public/css-3.png";
import Js from "../public/java-script.png";
import Reactjs from "../public/react.png";
import Typescript from "../public/icons8-typescript-480.png";
import Figma from "../public/icons8-figma-480.png";
import Vscode from "../public/icons8-visual-studio-480.png";
import Clickup from "../public/clickup.webp";





type Props = {
  //   skills: SkillType[];
  //   directionLeft?: boolean;
};

export default function Skills({}: Props) {
  return (
    <div className="h-screen  flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h1 className="absolute lg:top-44 2xl:top-24 xl:top-12 top-24 uppercase tracking-[20px] text-litepurple text-2xl">
        Skills
      </h1>



     
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-4 mt-48 lg:-mt-12">

        <div className="group relative flex cursor-pointer">
          <Image
            src={Html}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Css}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Tailwind}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Js}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                75%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Reactjs}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                75%
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <Image
            src={Github}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Gitlab}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Jira}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Figma}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Clickup}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Postman}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                60%
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <Image
            src={Typescript}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Vscode}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
