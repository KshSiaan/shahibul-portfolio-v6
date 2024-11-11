"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "react-use";

const words = [
  "Full Stack Developer & Designer",
  "Software Engineer",
  "Music Producer",
  "UI Designer",
];

export default function WhatAmI() {
  const [word, setWord] = useState(words[0]);
  const [isDefaultWord, setIsDefaultWord] = useState(true);

  const changeWord = () => {
    if (isDefaultWord) {
      const randomIndex = Math.floor(Math.random() * (words.length - 1)) + 1;
      setWord(words[randomIndex]);
      setIsDefaultWord(false);

      // Change back to default word after 1 second
      setTimeout(() => {
        setWord(words[0]);
        setIsDefaultWord(true);
      }, 1000);
    }
  };

  // Random interval between 5 to 10 seconds
  const [delay, setDelay] = useState(() => Math.random() * 5000 + 5000);

  useInterval(() => {
    changeWord();
    setDelay(Math.random() * 5000 + 5000); // Set new random delay
  }, delay);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={word}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {word ? word : words[0]}
      </motion.span>
    </AnimatePresence>
  );
}
