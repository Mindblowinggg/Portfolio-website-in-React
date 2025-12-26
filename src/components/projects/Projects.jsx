import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/Themecontext";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = () => {
  const allowedProjects = [
    "Business-Website",
    "modern-business-landing-page-react-tailwindcss-main",
    "Portfolio-website-in-React",
    "Modern-Portfolio-website",
  ];

  const { theme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/Mindblowinggg/repos?sort=updated"
      );

      const bestRepos = response.data.filter((repo) =>
        allowedProjects.includes(repo.name)
      );
      setRepos(bestRepos);
      setLoading(false);
    } catch (error) {
      console.error(`somthing is wrong:${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div
      className={`min-h-screen pt-25 pb-20 px-5 ${
        theme === "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Featured Projects 🚀
      </motion.h2>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl animate-pulse font-semibold">
            Loading Projects from GitHub...
          </p>
        </div>
      ) : (
        /* Grid Layout for Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-xl overflow-hidden shadow-lg border flex flex-col h-full ${
                  theme === "light"
                    ? "bg-white border-gray-200"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                {/* --- Card Body --- */}
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold capitalize leading-tight">
                      {repo.name.replace(/-/g, " ")}
                    </h3>

                    {repo.language && (
                      <span className="px-2 py-1 text-xs font-bold rounded-md bg-amber-400 text-black shadow-sm">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {repo.description ||
                      "A cool project built with React and passion."}
                  </p>

                  {/* Stars & Forks Count */}
                  <div className="flex gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1 text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                  </div>
                </div>

                {/* --- Card Footer (Links) --- */}
                <div
                  className={`p-4 border-t flex justify-between items-center ${
                    theme === "light"
                      ? "border-gray-100 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-amber-500 transition font-bold"
                  >
                    <FaGithub size={18} /> Source Code
                  </a>

                  {/* Agar GitHub par Live Link dala hai tabhi button dikhega */}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-amber-500 transition font-bold"
                    >
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            // Agar allowedProjects mein naam galat hua toh yeh dikhega
            <p className="text-center col-span-3 text-red-500 font-bold">
              Error: Koi Project match nahi hua! 'allowedProjects' array mein
              spelling check karo.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
