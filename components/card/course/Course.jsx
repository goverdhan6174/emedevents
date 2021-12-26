import React, { useState } from "react";
import { Credits, Video } from "@components/icons";
import CardContent from "./CardContent";
import CardMenu from "./CardMenu";

function CourseCard({ buy = false }) {
  let [openMenu, setOpenMenu] = useState(false);

  let handleMenu = () => {
    console.log("OPEN MENU", !openMenu);
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-white mb-2 h-full shadow-md">
      <img
        src="https://picsum.photos/id/117/1544/1024"
        alt="picsum photos"
        className="h-36 w-full object-cover"
      />

      <div className="absolute right-0 top-0 rounded-bl-lg flex space-x-4 p-2 bg-white items-center">
        <Credits className="cursor-pointer" />
        <Video className="cursor-pointer" />
      </div>

      <CardContent buy={buy} handleMenu={handleMenu} />

      <CardMenu open={openMenu} handleMenu={handleMenu} />
    </div>
  );
}

export default CourseCard;
