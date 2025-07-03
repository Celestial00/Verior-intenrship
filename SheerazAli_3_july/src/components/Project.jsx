import React from "react";

const projects = [
  {
    title: "E-commerce Store",
    description: "A modern e-commerce web app using MERN stack.",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site with animations.",
  },
  {
    title: "Chat App",
    description: "A real-time chat app using Socket.IO and React.",
  },
];

export default function Projects() {
  return (
    <section id='projects' className="py-20 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
