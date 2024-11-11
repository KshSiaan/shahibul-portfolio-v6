"use client";
import ExpandableImage from "@/components/sub-components/expandableImg";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";

import React, { useState } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Page() {
  const [itemSelect, setItemSelect] = useState<number>(0);
  const [categorySel, setCategorySel] = useState<number>(0);

  function up() {
    if (itemSelect > 0) {
      setItemSelect(itemSelect - 1);
    }
  }
  function left() {
    if (categorySel == 1) {
      setCategorySel(0);
    }
    if (itemSelect > interactive.length - 1) {
      setItemSelect(interactive.length - 1);
    }
  }
  function down() {
    const selectedArray = categorySel === 0 ? interactive : designs;

    if (itemSelect < selectedArray.length - 1) {
      setItemSelect(itemSelect + 1);
    }
  }
  function right() {
    if (categorySel == 0) {
      setCategorySel(1);
    }
    if (itemSelect > designs.length - 1) {
      setItemSelect(designs.length - 1);
    }
  }

  function getProject() {
    if (categorySel == 0) {
      return interactive[itemSelect];
    } else if (categorySel == 1) {
      return designs[itemSelect];
    } else {
      return interactive[0];
    }
  }

  return (
    <main className="p-4 h-dvh grid grid-cols-2 font-afacad">
      <div className="w-full h-full grid grid-rows-3 bg-background">
        <div
          className="row-span-1 w-full h-full grid gap-4 p-4"
          style={{
            gridTemplateColumns: `repeat(${
              getProject().img.length
            }, minmax(0, 1fr))`,
          }}
        >
          {getProject().img.map((item, index) => (
            <ExpandableImage
              src={item}
              alt="thumbnail"
              index={index}
              key={index}
            />
          ))}
          {getProject().img.length == 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              No image found
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="row-span-2 w-full h-full">
          <h1 className="text-3xl">Project Name: {getProject().title}</h1>
          <h3 className="text-xl mt-2">
            Built with: {getProject().techs.join(" , ")}
          </h3>
          <p className="text-lg mt-4 whitespace-pre-line">
            {getProject().desc}
          </p>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-2">
        <div className="w-full h-full">
          <h3 className="text-2xl text-center">Interactive Projects</h3>
          <ul className="w-full p-0 m-0 grid gap-y-2">
            {interactive.map((item, index) => (
              <li
                key={index}
                className={
                  categorySel == 0 && itemSelect == index
                    ? "text-2xl"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setCategorySel(0);
                  setItemSelect(index);
                }}
              >
                {categorySel == 0 && itemSelect == index ? "> " : ""}
                {index + 1}. {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-full">
          <h3 className="text-2xl text-center">Design Projects</h3>
          <ul className="w-full p-0 m-0 grid gap-y-2">
            {designs.map((item, index) => (
              <li
                key={index}
                className={
                  categorySel == 1 && itemSelect == index
                    ? "text-2xl"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setCategorySel(1);
                  setItemSelect(index);
                }}
              >
                {categorySel == 1 && itemSelect == index ? "> " : ""}
                {index + 1}. {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 w-full h-full">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <div className="">
              <Button
                onClick={() => {
                  up();
                }}
              >
                <ChevronUpIcon />
              </Button>
            </div>
            <div className="flex flex-row justify-between items-center gap-4">
              <Button
                onClick={() => {
                  left();
                }}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                onClick={() => {
                  down();
                }}
              >
                <ChevronDownIcon />
              </Button>
              <Button
                onClick={() => {
                  right();
                }}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      {...props} // Spreading props here
      className={`p-4 border-2 active:shadow-none border-primary rounded-md shadow-md shadow-primary ${
        props.className || ""
      }`}
      whileTap={{ y: 2 }}
    >
      {children}
    </motion.button>
  );
};

const interactive = [
  {
    img: [
      "/assets/project/ravenbloom01.webp",
      "/assets/project/ravenbloom02.webp",
    ],
    title: "RavenBloom 2.0",
    techs: [
      "NextJS 14",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Redux",
      "ShadCN",
    ],
    desc: `RavenBloom is a full-stack flower shop application built with Next.js 14. It offers a seamless shopping experience for flower enthusiasts, allowing users to browse, purchase, and manage their orders easily. There is also admin panel and admin.

But dont expect a lifeful design. The UI is built on ShadCN. this very developer's favourite UI library is mostly used to make modern web applications rather then custom web designing. :)`,
  },
  {
    img: ["/assets/project/noir01.webp"],
    title: "Noir",
    techs: ["React", "Typescript", "NodeJS", "ExpressJS", "Socket.IO"],
    desc: `A real-time chat application built using React, Node.js, and Express.js, designed to provide seamless communication between users. The front-end leverages React to create a dynamic and responsive user interface, while the back-end is powered by Node.js and Express.js to handle real-time data exchange and user authentication. The application supports instant messaging, group chats, and notifications, ensuring smooth interaction between users. By utilizing WebSockets (or socket.io), it enables live chat functionality, ensuring messages are sent and received without delay.`,
  },
  {
    img: [],
    title: "QuickDigit",
    techs: ["Flutter"],
    desc: `A full functional Calculator made using Flutter`,
  },
  {
    img: ["/assets/project/ravenzone01.webp"],
    title: "RavenZone",
    techs: ["HTML5", "CSS3", "Javascript"],
    desc: `A personal project where lots of APIs will be available for some interesting outputs`,
  },
];

const designs = [
  {
    img: ["/assets/project/nurture01.webp", "/assets/project/nurture02.webp"],
    title: "Nurture UI",
    techs: ["Figma"],
    desc: `Porter robinson's Nurture inspired UI Design`,
  },
  {
    img: [
      "/assets/project/briar01.webp",
      "/assets/project/briar02.webp",
      "/assets/project/briar03.webp",
    ],
    title: "Briar Game Character UI",
    techs: ["Figma"],
    desc: `Briar from League Of Legends inspired UI Design`,
  },
];
