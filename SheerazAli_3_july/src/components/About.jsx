import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.section
        className="py-20 px-6 bg-blue-50  text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-600  mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm a self-taught developer with experience in React, Node.js, and
          modern tools. I love bringing designs to life with animations and
          responsive layouts.
        </p>
      </motion.section>
    </section>
  );
}
