import React from "react";
import SectionTitle from "../common/SectionTitle";
import HowWorksCard from "./Card";
import { homeHowWorks } from "../../../data";

function HowItworksSection() {
  const { cards, subtitle, title } = homeHowWorks;
  return (
    <section className="pt-8 pb-14 px-6 bg-homesection bg-no-repeat bg-howitworkssm sm:bg-howitworksmd  lg:bg-howitworksxl lg:px-[100px] lg:pt-20 lg:pb-[200px] ">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-11 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-12 lg:mt-[68px] lg:grid-cols-5">
        {cards.map(({ title, image }) => (
          <HowWorksCard key={title} imgsrc={image} title={title} />
        ))}
      </div>
    </section>
  );
}

export default HowItworksSection;
