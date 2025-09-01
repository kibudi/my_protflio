"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Zap, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  icon: React.ElementType;
  gradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function Projects() {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      title: t("projects.cards.smartCart.title"),
      description: t("projects.cards.smartCart.description"),
      imageUrl:
        "https://biztechmagazine.com/sites/biztechmagazine.com/files/styles/cdw_article_hero/public/articles/202004/supermarket%20iot%20hero.jpg.webp?itok=Ns3dU-6n",
      projectUrl: "https://github.com/Hahabob/hackathon",
      technologies: [t("projects.technologies.fullStack"), t("projects.technologies.navigation"), t("projects.technologies.react")],
      icon: Zap,
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
    },
    {
      title: t("projects.cards.ecommerce.title"),
      description: t("projects.cards.ecommerce.description"),
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
      projectUrl: "https://github.com/YuvalAmit8471/react-native",
      technologies: [t("projects.technologies.reactNative"), t("projects.technologies.mobile"), t("projects.technologies.ecommerce")],
      icon: Smartphone,
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4 tracking-wider uppercase"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("projects.subtitle")}
            </motion.p>

            <motion.h2
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              {t("projects.title")}
            </motion.h2>

            <motion.div
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
              <motion.div
                className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("projects.description")}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gray-600 dark:text-gray-300 text-lg">
                {t("projects.wantMore")}
              </span>
              <motion.a
                href="https://github.com/kibudi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Github className="w-5 h-5" />
                </motion.div>
                <span>{t("projects.visitGitHub")}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative perspective-1000"
    >
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0`}
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-semibold">{t("projects.viewProject")}</span>
              <ExternalLink className="w-4 h-4 text-gray-700" />
            </motion.a>
          </motion.div>
        </div>

        <div className="p-8">
          <motion.h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6"
            animate={{ color: isHovered ? "#4B5563" : "#6B7280" }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className={`px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-md`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + techIndex * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className={`h-1 bg-gradient-to-r ${project.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
};
