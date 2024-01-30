import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-400 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 cursor-pointer transition-all">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/104735566?v=4"
            alt="user image"
            height={50}
            width={50}
            className="rounded-full p-1"
          />
        </div>
        <div className="col-span-11 pl-2">
          <h5>Deep soni</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
            nisi accusantium fugiat aperiam culpa cupiditate voluptate quam.
            Temporibus libero architecto tempora, et amet minima?
          </p>
          <div className="flex justify-between p-2 pr-10 mt-6 text-xl items-center">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
