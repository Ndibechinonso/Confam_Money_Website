import Image from "next/image";
import React from "react";

function WhyCard({ imgsrc, title, body }) {
  return (
    <div className=" flex-1 py-3 pl-[14px] pr-[0.625rem] grid grid-cols-[28px_1fr] grid-rows-[max-content_max-content] gap-x-3 gap-y-1 bg-[#F5F5FF] border-solid border border-grey_5 rounded-xl min-h-[86px]">
      <div className="relative row-start-1 row-end-3 ">
        <Image src={imgsrc} className="w-7 h-7 absolute" layout="fill" />
      </div>
      {/* <div className="flex flex-col gap-y-1 self-start"> */}
      <h6 className="font-semibold text-black_2 text-[14px] leading-4">
        {title}
      </h6>
      <p className="font-normal text-grey_2 text-[13px] leading-4">{body}</p>
      {/* </div> */}
    </div>
  );
}

export default WhyCard;
