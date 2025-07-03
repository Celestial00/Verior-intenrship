import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 transition-all duration-500 hover:bg-blue-700">
      <p>&copy; {new Date().getFullYear()} Sheeraz Alee. All rights reserved.</p>
    </footer>
  );
}
