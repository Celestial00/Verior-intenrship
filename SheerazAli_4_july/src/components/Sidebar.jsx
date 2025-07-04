import React from "react";
import { sidebarLinks } from "../constants";
import {
  Home,
  Video,
  TvMinimal,
  UserRound,
  History,
  Clock4,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  TvMinimalPlay,
  ListMusic,
  Tv,
  Settings,
  Flag,
  CircleHelp,
  MessageSquareWarning,
} from "lucide-react";
import { HeaderLeftSection } from "./Navbar";

const iconComponents = {
  Home,
  Video,
  TvMinimal,
  UserRound,
  History,
  Clock4,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  TvMinimalPlay,
  ListMusic,
  Tv,
  Settings,
  Flag,
  CircleHelp,
  MessageSquareWarning,
};

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <aside
      className={`${
        isSidebarOpen
          ? "max-md:left-0 w-[280px] px-3"
          : "max-md:left-[-100%] w-0 px-0"
      } max-md:absolute max-md:h-screen max-md:top-0 bg-white overflow-hidden no-scrollbar z-30 dark:bg-[#0f0f0f] max-md:transition-all max-md:duration-200`}
    >
      <div className="md:hidden pb-5 pt-2 px-1 sticky top-0 bg-white dark:bg-neutral-900">
        <HeaderLeftSection toggleSidebar={toggleSidebar} />
      </div>

      <div className="overflow-y-auto h-[calc(100vh-70px)] no-scrollbar pb-6">
        {sidebarLinks.map((category, catIndex) => (
          <div key={catIndex}>
            {category.categoryTitle && (
              <h4 className="text-[12px] font-semibold mb-2 ml-2 mt-4 dark:text-neutral-300">
                {category.categoryTitle}
              </h4>
            )}

            {category.links.map((link, index) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <React.Fragment key={`${catIndex}-${index}`}>
                  <Link link={link} IconComponent={IconComponent} />

                  {index === category.links.length - 1 &&
                    catIndex !== sidebarLinks.length - 1 && (
                      <div className="h-[1px] my-2.5 bg-neutral-200 dark:bg-neutral-700"></div>
                    )}
                </React.Fragment>
              );
            })}
          </div>
        ))}

        <div className="h-[1px] my-2.5 bg-neutral-200 dark:bg-neutral-700"></div>
        <div className=" ml-2 text-white text-[12px]">
          <p className="my-5">
            About Press Copyright Contact us Creators Advertise Developers
          </p>

          <p className="mb-5">
            Terms PrivacyPolicy & Safety How YouTube worksTest new features
          </p>

          <p>© 2025 Google LLC</p>
        </div>
      </div>
    </aside>
  );
};

export const Link = ({ link, IconComponent }) => {
  return (
    <a
      href={link.url}
      className={`flex text-[12px] items-center py-2.5 px-3 rounded-lg hover:bg-neutral-200 mb-1 whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-500`}
    >
      {IconComponent && <IconComponent className="mr-2.5 h-5 w-5" />}
      {link.title}
    </a>
  );
};

export default Sidebar;
