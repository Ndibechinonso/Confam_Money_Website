import Image from "next/image";
import React from "react";

function ValueCard({ img, title, sub }) {
  return (
    <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
      <div className="relative h-12 w-12">
        <Image src={img} layout="fill" className="absolute inset-0" />
      </div>
      <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">{title}</h6>
      <p className="text-[14px] leading-[17px] text-footer_border_color ">
        {sub}
      </p>
    </div>
  );
}

export default ValueCard;
