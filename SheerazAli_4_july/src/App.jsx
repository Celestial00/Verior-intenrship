import { useEffect, useState } from "react";
import CategoryPill from "./components/CategoryPill";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoItem from "./components/VideoItem";
import { categories } from "./constants";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) setIsSidebarOpen(true);
  }, []);

  return (
    <div className="max-h-screen flex flex-col no-scrollbar dark:bg-[#0f0f0f]">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex overflow-auto">
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div
          onClick={toggleSidebar}
          className={`md:hidden ${
            !isSidebarOpen && "opacity-0 pointer-events-none"
          } transition-all bg-black bg-opacity-50 h-screen w-full fixed left-0 top-0 z-20`}
        ></div>

        <div
          className={`w-full px-4 overflow-hidden no-scrollbar ${
            isSidebarOpen && "hide_thumb"
          }`}
        >
          <div className="sticky bg-white top-0 z-10 pb-3 flex gap-3 overflow-y-auto  no-scrollbar dark:bg-neutral-900">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
          </div>

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(380px,1fr))] mt-5 pb-6">
            {Array.from({ length: 15 }, (_, i) => i + 1).map((video, index) => (
              <VideoItem key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
