import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Than</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            I'm a passionate developer crafting interactive websites & apps.
            Let’s connect and build something amazing!
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
          </div>

          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Right: Image with Fade In */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/10/14/03/18/man-5653200_1280.jpg"
            alt="Than Profile"
            className="rounded-2xl shadow-lg w-full max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
