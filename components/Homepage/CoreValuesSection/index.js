import React from "react";
import SectionTitle from "../common/SectionTitle";
import { homeCoreValues } from "../../../data";
import ValueCard from "./ValueCard";

function CoreValues() {
  const { title, subtitle, cards } = homeCoreValues;

  return (
    <>
      <hr className="mt-4 bg-gradient-to-r from-light_ruler_1 via-light_ruler_2 to-light_ruler_1 h-[1px] border-0 mx-[1.875rem] md:mx-[6.25rem]" />
      <article className="flex flex-col gap-y-8 items-center pb-[60px]  px-[1.875rem] pt-8 md:gap-y-14 md:px-[6.25rem] lg:pt-16 lg:pb-36">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 gap-y-6  sm:grid-cols-2 sm:gap-6  lg:grid-cols-3 lg:gap-8 lg:p-4">
          {cards.map(({ img, sub, title }) => (
            <ValueCard key={title} img={img} sub={sub} title={title} />
          ))}
        </div>
      </article>
    </>
  );
}

export default CoreValues;
