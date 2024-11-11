import Image from "next/image";

const languages = [
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png"
        alt="c-plus-plus-logo"
      />
    ),
    title: "C/C++",
    desc: "The Root structure",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/javascript.png"
        alt="javascript"
      />
    ),
    title: "Javascript",
    desc: "The language I vibe with, making the web alive",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/typescript--v1.png"
        alt="typescript--v1"
      />
    ),
    title: "Typescript",
    desc: "Isn't it what makes Javascript better and safe?",
  },
];

const frameworks = [
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/bootstrap.png"
        alt="bootstrap"
      />
    ),
    title: "Bootstrap & Tailwind CSS",
    desc: "Fashioning style from pixels",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/express-js.png"
        alt="express-js"
      />
    ),
    title: "Express.js",
    desc: "Crafting backend magic",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/nextjs.png"
        alt="next.js"
      />
    ),
    title: "Next.js",
    desc: "Navigating through the future of React",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/redux.png"
        alt="redux"
      />
    ),
    title: "Redux",
    desc: "Ruling over app state with an iron grip",
  },
];

const devAndDesign = [
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/html-5.png"
        alt="html5"
      />
    ),
    title: "HTML5 & CSS3",
    desc: "The skeleton and soul of my creations",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/react-native.png"
        alt="react"
      />
    ),
    title: "React",
    desc: "The beating heart of my interfaces",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-color-tal-revivo.png"
        alt="external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-color-tal-revivo"
      />
    ),
    title: "Framer Motion",
    desc: "Where animation and flow harmonize",
  },
];

const backend = [
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/nodejs.png"
        alt="node.js"
      />
    ),
    title: "Node.js",
    desc: "Running JavaScript serverside like a pro",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/database.png"
        alt="mysql-mongodb"
      />
    ),
    title: "MySQL & MongoDB",
    desc: "Structured or flexible, I store the data tales",
  },
];

const toolbox = [
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/figma.png"
        alt="figma"
      />
    ),
    title: "Figma",
    desc: "The stage where designs come to life",
  },
  {
    icon: (
      <Image
        width="48"
        height="48"
        src="https://img.icons8.com/nolan/64/miro.png"
        alt="miro"
      />
    ),
    title: "Miro",
    desc: "Collaborating visually, from brainstorming to building workflows",
  },
];

export { languages, frameworks, devAndDesign, toolbox, backend };
