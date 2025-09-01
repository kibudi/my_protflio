"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiSocketdotio,
  SiHtml5,
  SiCsswizardry,
  SiPostman,
  SiI18Next,
} from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="w-8 h-8" /> },
  { name: "CSS", icon: <SiCsswizardry className="w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "React", icon: <SiReact className="w-8 h-8" /> },
  { name: "React Native", icon: <SiReact className="w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="w-8 h-8" /> },
  { name: "Git", icon: <SiGit className="w-8 h-8" /> },
  { name: "GitHub", icon: <SiGithub className="w-8 h-8" /> },
  { name: "socket.io", icon: <SiSocketdotio className="w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="w-8 h-8" /> },
  { name: "I18Next", icon: <SiI18Next className="w-8 h-8" /> },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          I’m a <span className="font-semibold">full-stack developer</span> who
          loves turning ideas into interactive, user-friendly web and mobile
          applications.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          I’m fascinated by the process of taking a concept and turning it into
          something tangible, real product that users can enjoy and rely on.
          Whether it’s building a sleek website, a dynamic web app, or a mobile
          experience, I enjoy finding creative solutions to tricky problems.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I focus on writing{" "}
          <span className="font-semibold">clean, maintainable code</span> while
          constantly learning new technologies. I’m always eager to take on
          challenges that push me to grow and create{" "}
          <span className="font-semibold">real impact</span> through my work.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg gap-2 transition-transform"
        >
          <FaFileDownload className="w-5 h-5" /> Download My Resume
        </motion.a>
      </motion.div>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-center text-lg sm:text-base leading-relaxed max-w-3xl mx-auto">
        These are the technologies and tools I use to bring my projects to life
        from creating interactive web applications to crafting seamless mobile
        experiences. Each one plays a role in helping me write clean,
        maintainable code and build solutions that have a real impact.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm transition"
          >
            {skill.icon}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
