"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableImageProps {
  src: string;
  alt: string;
  index: number;
}

export default function ExpandableImage({
  src,
  alt,
  index,
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const variants = {
    expanded: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      transition: { duration: 0.3 },
    },
    collapsed: {
      position: "relative",
      zIndex: "auto",
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="h-full w-full cursor-pointer"
        key={index}
        layout
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        exit="collapsed"
        variants={variants}
        onClick={toggleExpand}
      >
        <motion.div
          className={`w-full h-full ${
            isExpanded ? "fixed inset-0 bg-black" : ""
          }`}
          layout
        >
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className={`w-full h-full ${
              isExpanded ? "object-contain" : "object-cover"
            }`}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
