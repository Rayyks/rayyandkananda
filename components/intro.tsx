"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ME from "@/public/me.webp";
import Secret from "@/components/Secret";

export default function Intro() {
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(3);
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const openLanguageModal = () => {
    setLanguageModalOpen(true);
  };

  const closeLanguageModal = () => {
    setLanguageModalOpen(false);
  };

  const chooseCV = (language: any) => {
    const filePath =
      language === "english" ? "/CV_Rayyand_EN.pdf" : "/CV_Rayyand_ID.pdf";
    window.open(filePath, "_blank");
    closeLanguageModal();
  };

  const experiene = new Date().getFullYear() - 2020;

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="font-bold tooltip tooltip-right tooltip-secondary">
              <Image
                src={ME}
                alt="Ricardo portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                onClick={() => {
                  if (isClicked > 0) {
                    setIsClicked(isClicked - 1);
                    console.log(isClicked - 1);
                  } else {
                    toast(
                      <div>
                        <img
                          src="https://media0.giphy.com/media/8TweEdaxxfuElKkRxz/200w.gif?cid=6c09b952n9ox2hoal1ccrakn6mm86r114p31hax4ibbgt1l1&ep=v1_gifs_search&rid=200w.gif&ct=g"
                          alt="ma balls"
                        />
                      </div>
                    );
                  }

                  if (isClicked === 2) {
                    toast.error("Almost there, keep going! 🎉");
                  }
                }}
                className={`h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl transition ease-in-out duration-500 tooltip  ${
                  isClicked ? "transform rotate-[360deg]" : ""
                }`}
              />
            </div>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rayyand.</span> I'm a{" "}
        <span className="font-bold">Front-end developer</span> with{" "}
        <span className="font-bold">{experiene} years</span> of experience. I
        enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <span className="px-5">Or</span>
        <motion.div
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={openLanguageModal}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </motion.div>

        {/* =============== || POPUP CV DOWNLOAD || ================*/}
        <AnimatePresence>
          {isLanguageModalOpen && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 p-8 rounded-md"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              >
                <p className="mb-4">Choose language:</p>
                <button
                  className="bg-white hover:bg-gray-300 ease-in-out duration-300 text-black font-bold p-3 rounded-xl"
                  onClick={() => chooseCV("english")}
                >
                  English
                </button>
                <button
                  className="mx-5 bg-white hover:bg-gray-300 ease-in-out duration-300 text-black font-bold p-3 rounded-xl"
                  onClick={() => chooseCV("indonesian")}
                >
                  Indonesian
                </button>
                <button
                  className="bg-red-500 hover:bg-red-900 ease-in-out duration-300 text-white font-bold p-3 rounded-xl"
                  onClick={closeLanguageModal}
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-1"
          href="https://github.com/Rayyks"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      <Secret isClicked={isClicked} setIsClicked={setIsClicked} />
    </section>
  );
}
