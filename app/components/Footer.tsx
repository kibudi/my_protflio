"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-6 mb-6"
      >
        {[
          {
            icon: <FaGithub />,
            href: "https://github.com/kibudi",
            color: "hover:text-purple-400",
            title: t("footer.social.github"),
          },
          {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/shahar-kibudi-b5a653376/",
            color: "hover:text-blue-400",
            title: t("footer.social.linkedin"),
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
            whileHover={{ scale: 1.3, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 text-white/60 ${social.color} transition-all duration-300 text-2xl`}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <p className="text-center text-gray-400 mt-6 text-sm">
        {t("footer.rights")}
      </p>
    </footer>
  );
}
