import React from "react";

function SectionTitle({ title, subtitle }) {
  return (
    <header className="px-4 flex flex-col gap-y-3 items-center text-center ">
      <h4 className="font-semibold text-black_2 text-[18px] leading-6">
        {title}
      </h4>
      <p className="font-normal text-black_2 text-[14px] leading-4">
        {subtitle}
      </p>
    </header>
  );
}

export default SectionTitle;
