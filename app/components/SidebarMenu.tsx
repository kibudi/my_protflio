"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import {
  GiByzantinTemple,
  GiMagicPortal,
  GiEvilBook,
  GiChampions,
} from "react-icons/gi";

type SidebarProps = { isOpen: boolean; onClose: () => void };

export default function SidebarMenu({ isOpen, onClose }: SidebarProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const links = [
    {
      name: t("sidebar.home.name"),
      path: "/",
      icon: <GiByzantinTemple size={23} />,
      color:
        "from-[rgba(60,50,90,0.8)] via-[rgba(80,60,120,0.8)] to-[rgba(60,50,90,0.8)]",
      description: t("sidebar.home.description"),
    },
    {
      name: t("sidebar.about.name"),
      path: "/about",
      icon: <GiEvilBook size={23} />,
      color:
        "from-[rgba(20,40,60,0.8)] via-[rgba(40,80,100,0.8)] to-[rgba(20,40,60,0.8)]",
      description: t("sidebar.about.description"),
    },
    {
      name: t("sidebar.projects.name"),
      path: "/projects",
      icon: <GiMagicPortal size={23} />,
      color:
        "from-[rgba(20,60,50,0.8)] via-[rgba(40,120,100,0.8)] to-[rgba(20,60,50,0.8)]",
      description: t("sidebar.projects.description"),
    },
    {
      name: t("sidebar.contact.name"),
      path: "/contact",
      icon: <GiChampions size={23} />,
      color:
        "from-[rgba(60,20,20,0.8)] via-[rgba(120,40,40,0.8)] to-[rgba(60,20,20,0.8)]",
      description: t("sidebar.contact.description"),
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-20"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              mass: 0.8,
            }}
            className="fixed top-0 left-0 h-screen w-96 z-30 flex flex-col p-6"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl h-full flex flex-col overflow-hidden relative">
              {/* Header */}
              <div className="relative flex items-center justify-between p-8 border-b border-white/10 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 group"
                  onClick={onClose}
                >
                  <FaArrowLeft
                    size={20}
                    className="group-hover:animate-pulse"
                  />
                </motion.button>
              </div>

              {/* Scrollable Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="scrollbar-thin scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40 scrollbar-track-transparent transition-colors duration-300">
                  {links.map((link, index) => (
                    <Link key={link.name} href={link.path}>
                      <div
                        className="group relative block p-5 rounded-2xl
                         bg-[rgba(20,18,40,0.7)] backdrop-blur-md border
                         border-transparent hover:border-white/20 hover:bg-[rgba(30,25,60,0.85)]
                         overflow-hidden transition-all duration-300"
                        onMouseEnter={() => setActiveIndex(index)}
                      >
                        {activeIndex === index && (
                          <motion.div
                            layoutId="activeTab"
                            className={`absolute inset-0 rounded-2xl opacity-30 bg-gradient-to-r ${link.color}`}
                          />
                        )}

                        <div className="relative flex items-center space-x-5">
                          <div
                            className={`p-4 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-lg`}
                          >
                            {link.icon}
                          </div>

                          <div className="flex-1">
                            <div className="text-white font-bold text-xl">
                              {link.name}
                            </div>
                            <div className="text-white/60 text-sm mt-1">
                              {link.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
