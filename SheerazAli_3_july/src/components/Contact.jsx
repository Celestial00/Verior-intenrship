import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Have a project in mind? Let&apos;s connect and bring it to life.
      </p>

      <form
        className="w-full max-w-xl bg-gray-50 p-8 rounded-xl "
        onSubmit={(e) => {
          e.preventDefault();
          // You can later hook this to EmailJS / backend API
          alert("Message sent!");
        }}
      >
        {/* Email Input */}
        <div className="mb-6 text-left">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6 text-left">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Send Message 
          </button>
        </div>
      </form>
    </section>
  );
}
