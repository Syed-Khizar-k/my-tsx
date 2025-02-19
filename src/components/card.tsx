"use client"; // Needed for Framer Motion in Next.js App Router
import { motion } from "framer-motion";

export default function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        className="relative w-80 h-48 bg-gray-800 overflow-hidden rounded-2xl shadow-lg"
        whileHover="hover"
      >
        {/* Background Gradient Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-0"
          variants={{
            hover: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: "100%" },
          }}
          initial="initial"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Card Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
          Hover Me
        </div>
      </motion.div>
    </div>
  );
}
