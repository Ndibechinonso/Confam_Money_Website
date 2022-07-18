import React from "react";
import Image from "next/image";

function HowWorksCard({ title, imgsrc }) {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <div className="relative w-[70px] h-[70px]">
        <Image src={imgsrc} className="absolute" layout="fill" />
      </div>
      <h4 className="text-center">{title}</h4>
    </div>
  );
}

export default HowWorksCard;
