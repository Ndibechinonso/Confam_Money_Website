import Image from "next/image";
import React from "react";

function TestimonyCard({ title, mention, imgSrc, body }) {
  return (
    <div className="flex flex-col gap-y-[0.875rem] bg-white shadow-home_testimony rounded-2_5 p-3 pb_5_5 min-w-[80%] max-w-[80%] w-[80%] h-full flex-auto sm:max-w-full sm:w-full ">
      <div className="flex items-center gap-x-[0.375rem]">
        <div className="relative w-8 h-8 rounded-circle">
          <Image
            src={imgSrc}
            className="absolute rounded-circle object-cover object-top"
            layout="fill"
          />
        </div>
        <div className="flex flex-col gap-y-0 ">
          <h5 className="text-black_2 font-bold text-[13px] leading-[19px] ">
            {title}
          </h5>
          <p className="text-grey_4 font-normal text-[0.625rem] leading-[15px]">
            {mention}
          </p>
        </div>
      </div>
      <p className="text-grey_2 font-normal text-[12px] leading-[15px]">{body}</p>
    </div>
  );
}

export default TestimonyCard;
