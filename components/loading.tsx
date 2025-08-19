"use client"
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, animatePresence } from "@magic-ux/magic-motion";

const morningTranslations = [
  "Morning",
  "Buenos días",
  "Bonjour",  // displaying only 3 names as requested
];

export default function Loading() {
  const [index, setIndex] = useState(0);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (cycles >= 3) return; // stop after 3 cycles

    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === morningTranslations.length - 1) {
          setCycles((c) => c + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [cycles]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        <motion.span
          key={morningTranslations[index]}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl font-semibold text-blue-700 select-none"
          magic-motion
        >
          {morningTranslations[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
