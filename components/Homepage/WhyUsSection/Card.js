import Image from "next/image";
import React from "react";

function WhyCard({ imgsrc, title, body }) {
  return (
    <div className="w-full min-w-[325px] max-w-[593px] py-3 pl-[14px] pr-[0.625rem] grid grid-cols-[28px_1fr] grid-rows-[max-content_max-content] gap-x-3 gap-y-1 bg-gradient-to-br from-body_bg to-grey_6 border-solid border border-grey_6 rounded-xl min-h-[86px] shadow-home_why_card sm:flex-1 md:px-8 md:py-[30px]  lg:rounded-3xl lg:gap-y-2 lg:gap-x-6 lg:grid-cols-[50px_1fr]">
      <div className="relative w-7 h-7 shadow rounded-circle lg:w-[50px] lg:h-[50px] row-start-1 row-end-3">
        <Image src={imgsrc} className="absolute inset-0 " layout="fill" />
      </div>
      <h6 className="font-semibold text-black_2 text-[14px] leading-4 lg:text-[24px] lg:leading-[30px]">
        {title}
      </h6>
      <p className="font-light text-grey_2 text-[13px] leading-4 lg:text-xl lg:leading-[30px]">
        {body}
      </p>
    </div>
  );
}

export default WhyCard;
