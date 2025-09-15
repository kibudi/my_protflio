"use client";
import ContactForm from "../components/Form";
import { FaLinkedin, FaEnvelope, FaGithub,  } from "react-icons/fa";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GrAction } from "react-icons/gr";
import { GiCaravel, GiCarillon } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const email = "shahar002000@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/shahar-kibudi-b5a653376/";
  const github = "https://github.com/kibudi";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: t("contact.social.email"),
      href: `mailto:${email}`,
      color: "from-red-500 to-pink-600",
      description: t("contact.social.emailDesc"),
    },
    {
      icon: <FaLinkedin />,
      label: t("contact.social.linkedin"),
      href: linkedIn,
      color: "from-blue-600 to-indigo-700",
      description: t("contact.social.linkedinDesc"),
      target: "_blank",
    },
    {
      icon: <FaGithub />,
      label: t("contact.social.github"),
      href: github,
      color: "from-gray-800 to-black",
      description: t("contact.social.githubDesc"),
      target: "_blank",
    },
  ];

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-800 to-black" />

          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />

          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        <motion.section
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto p-8 pt-20"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="text-center mb-16">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                {t("contact.title")}
              </span>
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                {t("contact.subtitle")}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              {t("contact.description")}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={item} className="relative">
              <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 pointer-events-none" />

                <div className="mb-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block mb-4"
                  >
                    <GiCarillon className="text-4xl text-purple-400" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {t("contact.sendMessage")}
                  </h2>
                </div>

                <ContactForm />
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <GrAction className="text-purple-400" />
                  {t("contact.connectWithMe")}
                </h3>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.target ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center justify-between p-6 bg-gradient-to-r ${social.color} rounded-2xl text-white font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl"
                      >
                        {social.icon}
                      </motion.div>
                      <div>
                        <div className="text-lg">{social.label}</div>
                        <div className="text-sm text-white/80">
                          {social.description}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <GiCaravel className="text-3xl" />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-2xl" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-2xl" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-2xl" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-2xl" />
      </div>
    </>
  );
}
