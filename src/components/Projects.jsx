import oneBtn from "../assets/onebtn.gif";
import apWeb from "../assets/ap-web-gif.gif";
import {
  FaTools,
  FaFilePdf,
  FaPython,
  FaDesktop,
  FaReact,
  FaNodeJs,
  FaFire,
  FaDatabase,
  FaChartBar,
  FaWindows,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss, SiExpo, SiPandas, SiVite } from "react-icons/si";
import { useState } from "react";
import TechStackModal from "./subcomponents/TechStackModal.jsx";
import Tooltip from "./subcomponents/Tooltip.jsx";

/* 
Todo: 
    - Hook up Mobile App button
*/

const techStacks = {
  ap: [
    { tech: "Python", symbol: FaPython },
    { tech: "Tkinter", symbol: FaDesktop },
    { tech: "SQLite3", symbol: FaDatabase },
    { tech: "Pandas", symbol: SiPandas },
    { tech: "PyWin32", symbol: FaWindows },
    { tech: "PyMuPDF", symbol: FaFilePdf },
    { tech: "Playwright", symbol: FaNetworkWired },
  ],
  stat: [
    { tech: "React", symbol: FaReact },
    { tech: "Tailwind", symbol: SiTailwindcss },
    { tech: "Chart.js", symbol: FaChartBar },
    { tech: "Node.js", symbol: FaNodeJs },
    { tech: "Vite", symbol: SiVite },
  ],
  disc: [
    { tech: "React Native", symbol: FaReact },
    { tech: "Firebase", symbol: FaFire },
    { tech: "Expo", symbol: SiExpo },
  ],
};

export default function Projects() {
  const [openStack, setOpenStack] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleStackClick = (id) => {
    const isSame = openStack === id;
    setOpenStack(isSame ? null : id);
    setShowModal(!isSame);
  };

  return (
    <section id="projects" className="bg-zinc-900 text-white px-12 py-12 pb-24 pt-16 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-b border-zinc-700 pb-4">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* AP Automation suite */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold mb-2">AP Automation Suite</h3>
              <div className="relative">
                <Tooltip content="View the full tech stack for this project">
                <button
                  onClick={() => handleStackClick("ap")}
                  className="relative cursor-pointer focus:outline-none"
                >
                  <FaTools
                    className="text-2xl text-zinc-400 hover:text-zinc-600 mt-1"
                    title="Tech Stack"
                  />
                </button>
                </Tooltip>
                <TechStackModal
                  stack={techStacks.ap}
                  isVisible={openStack === "ap" && showModal}
                  onClose={() => {
                    setOpenStack(null);
                    setShowModal(false);
                  }}
                />
              </div>
            </div>
            <img src={oneBtn} alt="An automation script GIF" className="p-2" />
            <p className="text-zinc-300 mb-4">
              An end-to-end Python-based system that automated invoice intake,
              email parsing, PDF renaming, PO matching, AS400 macros, and check
              runs.
            </p>
            <div className="flex space-x-4 justify-between">
              <a
                href="https://github.com/c-mccormick007/ap_solutions/blob/main/README.md"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Impact Report March 2025 (Github)
              </a>
            </div>
            <p className="text-sm text-zinc-400 italic mt-4">
              Source code available upon request for demonstration purposes
              only.
            </p>
          </div>

          {/* AP stat website */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold mb-2">AP Stat Dashboard</h3>
              <div className="relative">
                
                <Tooltip content="View the full tech stack for this project">
                <button
                  onClick={() => handleStackClick("stat")}
                  className="relative cursor-pointer focus:outline-none"
                >
                  <FaTools
                    className="text-2xl text-zinc-400 hover:text-zinc-600 mt-1"
                    title="Tech Stack"
                  />
                </button>
                </Tooltip>
                <TechStackModal
                  stack={techStacks.stat}
                  isVisible={openStack === "stat" && showModal}
                  onClose={() => {
                    setOpenStack(null);
                    setShowModal(false);
                  }}
                />
              </div>
            </div>
            <img src={apWeb} alt="An automation script GIF" className="p-2" />
            <p className="text-zinc-300 mb-4">
              A React based web app that visualizes usage stats from the
              automation suite— showcasing processed invoice counts, saved
              keystrokes, and time reductions with real-time data.
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/c-mccormick007/my-ap-stats"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
                <a
                  href="https://c-mccormick007.github.io/my-ap-stats/"
                  target="_blank"
                  className="text-zinc-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <p className="text-sm text-zinc-400 italic mt-4">
              Server side source code and website password available by request
              only.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-semibold mb-12 border-b border-zinc-700 mt-6 pb-4">
          In Development
        </h3>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between pb-2">
            <h3 className="text-2xl font-bold mb-2">
              Disc Golf League Mobile App
            </h3>
            <div className="relative">
                <Tooltip content="View the full tech stack for this project">
              <button
                onClick={() => handleStackClick("disc")}
                className="cursor-pointer focus:outline-none"
              >
                <FaTools
                  className="text-2xl text-zinc-400 hover:text-zinc-600"
                  title="Tech Stack"
                />
              </button>
              </Tooltip>
              <TechStackModal
                  stack={techStacks.disc}
                  isVisible={openStack === "disc" && showModal}
                  onClose={() => {
                    setOpenStack(null);
                    setShowModal(false);
                  }}
                />
            </div>
          </div>
          <p className="text-zinc-300 mb-4">
            An iOS/Android/Web based application designed to centralize a disc
            golf clubs event calendar, keep track of league/tag placements, and
            send push notifications in the event of tournament changes or
            weather.
          </p>
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/*
                <a
                    href="https://github.com/c-mccormick007/my-ap-stats"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    View on GitHub
                </a>
                <a
                    href="https://c-mccormick007.github.io/my-ap-stats/"
                    target="_blank"
                    className="text-zinc-400 hover:underline"
                >
                    Live Demo
                </a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
