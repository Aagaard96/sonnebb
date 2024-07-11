"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FixedBookBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://sonne-bodybalance.planway.com/?fbclid=IwAR14JyAShdeG4tOl3EPBHtMp_onLHOROfLiVgrawWiVyBwH5xlHJw_SrvtE"
          className="font-bold text-[8px] text-center lg:text-sm text-xs flex justify-center  items-center w-[85px] h-[40px]  lg:w-[125px] lg:h-[65px] text-wrap bg-neutral-800 rounded-md text-white hover:bg-accentText uppercase border-2 border-accentText hover:border-zinc-200 fixed right-5 top-10 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Tid
        </motion.a>
      )}
    </AnimatePresence>
  );
}
