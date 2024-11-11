"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BookUser,
  CodeXml,
  House,
  Library,
  Mail,
  Menu,
  MoonIcon,
  SunIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const navig = useRouter();

  const toggleNav = () => setIsOpen(!isOpen);

  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 left-0 w-full h-auto z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: "-50%" }}
            exit={{
              x: "100%",
              opacity: [1, 1, 0],
              transition: { duration: 0.5, times: [0, 0.9, 1] },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute h-[48px] px-5 py-4 left-1/2 bottom-0 flex items-center justify-around gap-8 bg-background border-2 border-primary rounded-full shadow-lg shadow-black"
          >
            {navigs.map((nav, index) => (
              <TooltipProvider key={index}>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger className="hover:scale-110 transition-transform z-40">
                    <nav.icon
                      onClick={() => {
                        navig.push(nav.link);
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{nav.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ y: 0 }}
            animate={{ y: -64 }}
            exit={{
              y: 0,
              opacity: 0,
            }}
            transition={{ type: "spring", ease: "easeInOut", duration: 0.5 }}
            className="absolute bg-background flex justify-center z-[5] items-center shadow-sm shadow-black w-[48px] h-[48px] right-4 bottom-0 border-2 rounded-full border-primary"
            onClick={() => {
              if (theme == "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          >
            {theme == "light" ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        onClick={toggleNav}
        className="absolute shadow-md shadow-black bg-background z-10 bottom-0 right-4 w-[48px] h-[48px] rounded-full border-2 border-primary flex justify-center items-center hover:scale-110 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>
    </div>
  );
}

const navigs = [
  { name: "Home", icon: House, link: "/" },
  { name: "Projects", icon: Library, link: "/projects" },
  { name: "About Me", icon: BookUser, link: "/about" },
  { name: "Skills", icon: CodeXml, link: "/skills" },
  { name: "Contact Me", icon: Mail, link: "/contact" },
];
