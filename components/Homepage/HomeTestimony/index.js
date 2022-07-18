import React from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonyCard from "./Card";
import { homeClientTestimoney } from "../../../data";

function TestimonySection() {
  const { cards, subtitle, title } = homeClientTestimoney;
  return (
    <section className=" pt-15 pb-16 ">
      <SectionTitle headerClassName="px-8" title={title} subtitle={subtitle} />
      <div className="px-6 pb-10 w-full overflow-scroll lg:px-[100px]">
        <div className=" mt-8 px-1 flex gap-x-6 sm:grid sm:grid-rows-2 sm:overflow-x-scroll sm:grid-cols-[repeat(5,400px)] sm:gap-6 sm:py-8  ">
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
