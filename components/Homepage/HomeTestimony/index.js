import React from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonyCard from "./Card";
import { homeClientTestimoney } from "../../../data";

function TestimonySection() {
  const { cards, subtitle, title } = homeClientTestimoney;
  return (
    <section className="flex flex-col gap-y-8 pt-15 pb-16 sm:gap-y-8 lg:gap-y-[85px] lg:pt-[94px] lg:pb-[194px]">
      <SectionTitle headerClassName="px-8" title={title} subtitle={subtitle} />
      <div className="px-6 pb-10 w-full overflow-scroll scroll-m-0 scroll- lg:px-[100px]">
        <div className="px-1 flex gap-x-6 sm:grid sm:grid-rows-2 sm:overflow-x-scroll scroll-m-0 sm:grid-cols-[repeat(5,400px)] sm:gap-6 lg:gap-x-10 lg:gap-y-9  ">
          {cards.map(({ handle, image, testimony, title }) => (
            <TestimonyCard
              key={title}
              body={testimony}
              imgSrc={image}
              mention={handle}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonySection;
