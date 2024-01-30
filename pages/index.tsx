import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

import React from "react";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string; // Change the type from String to string
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-18">
          <div className="text-3xl h-fit hover:bg-gray-800 p-4 w-fit rounded-full cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => {
                return (
                  <li
                    key={item.title} // Fix the type error here
                    className="flex mt-2 justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 cursor-pointer w-fit"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 px-5">
              <button className="bg-[#1d9bf0] font-semibold text-lg py-5 px-4 rounded-full w-full  mx">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 h-screen overflow-scroll border-l-[1px] border-r-[1px]  border-gray-400">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
