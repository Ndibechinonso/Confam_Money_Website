import { homeWhyUs } from "../../../data";
import Card from "./Card";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";

function WhyUsSection() {
  const data = {
    title: "Why Choose Us",
    subtitle:
      " We truly believe in the seamless buying and selling of goods or services and ensure every one is safe and protected at the same time.",
  };

  return (
    <section className="flex flex-col gap-y-7 md:gap-y-20 px-4 pt-8 pb-14 md:pt-20 md:pb-[11.25rem] md:px-[100px]  bg-home_sec">
      <SectionTitle {...data} />
      <div className="flex flex-col gap-y-11 sm:flex-row sm:gap-x-10 md:gap-x-[84px] ">
        <div className="flex flex-col  gap-y-4  sm:gap-y-8">
          {homeWhyUs.map(({ body, image, title }) => (
            <Card key={title} body={body} imgsrc={image} title={title} />
          ))}
        </div>
        <div>
          <Image src={"/images/home_why_shake.png"} width={562} height={728} />
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
