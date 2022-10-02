import React from "react";

function SectionTitle({ title, subtitle, headerClassName }) {
  return (
    <header
      className={`px-4 flex flex-col text-center gap-y-3  sm:w-[600px] sm:mx-auto sm:px-0 lg:w-[740px]  lg:gap-y-4  ${headerClassName}`}
    >
      <h4 className="font-semibold text-black_2 text-[18px] leading-6 md:text-[40px] md:leading-[48px]">
        {title}
      </h4>
      <div className="font-normal text-black_2 text-[14px] leading-4 md:text-[20px] md:leading-[30px] ">
        {subtitle}
      </div>
    </header>
  );
}

export default SectionTitle;
