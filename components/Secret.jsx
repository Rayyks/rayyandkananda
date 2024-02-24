import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { socials } from "@/lib/data";

const Secrets = ({ isClicked, setIsClicked }) => {
  return (
    <AnimatePresence>
      {isClicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 bottom-0 z-[999] flex items-center rounded-3xl justify-center secret-modal"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto p-8 rounded-badge shadow-md w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black bg-opacity-80 secret-bg rounded-3xl"
          >
            <div className="mx-auto h-screen px-4">
              <div className="flex justify-end">
                <motion.button
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  className="text-gray-300 text-2xl hover:text-gray-400 font-semibold"
                  onClick={() => setIsClicked(false)}
                >
                  <IoMdClose className="w-14 h-14 transform transition ease-in-out duration-500" />
                </motion.button>
              </div>

              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  {/* Connect Button */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <div className="flex justify-center">
                        {socials.map((social, index) => (
                          <a
                            key={index}
                            className="bg-blue-600 active:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <social.icon className="text-2xl" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          20
                        </span>
                        <span className="text-sm text-blueGray-400">
                          years old
                        </span>
                      </div>
                      {/* Add more stats here */}
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div className="text-center mt-12 ">
                  <h3 className="text-5xl font-extrabold leading-normal mb-2 text-white">
                    Rayyand Kananda Syahputra
                  </h3>
                  <div className="text-base leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Batam, Indonesia
                  </div>
                  <div className="mb-4 w-32 mx-auto text-white text-2xl font-bold bg-purple-700 rounded-full p-2">
                    INTJ - A
                  </div>
                </div>

                {/* Profile Description */}
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-6 text-xl leading-relaxed text-blueGray-400">
                        Passionate and self-taught developer with a strong
                        background in web development and design. A fast
                        learner, hard worker, and a problem solver. Welcome to
                        the future of tech with a touch of INTJ brilliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Secrets;
