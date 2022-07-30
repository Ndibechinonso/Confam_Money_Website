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
    <section className="flex flex-col gap-y-7 md:gap-y-20 px-4 pt-8 pb-14 md:pt-20 md:pb-[11.25rem] md:px-[100px]  bg-home_sec bg-homeimgedge bg-no-repeat bg-homeimgedgesm sm:bg-homeimgedgedsk sm:bg-homeimgedgemd lg:bg-homeimgedgexl">
      <SectionTitle {...data} />
      <div className="flex flex-col gap-y-11 sm:flex-row sm:gap-x-5 md:gap-x-9 lg:gap-x-[84px] xl:justify-center ">
        <div className="flex flex-col  gap-y-4  sm:gap-y-8 lg:justify-center">
          {homeWhyUs.map(({ body, image, title }) => (
            <Card key={title} body={body} imgsrc={image} title={title} />
          ))}
        </div>
        <div className="relative w-[328px] h-[424px] self-center sm:w-full md:h-[576px] xl:h-[728px]  xl:w-[562px] ">
          <Image
            src={"/images/home_why_shake1.png"}
            className="absolute inset-0 object-contain rounded-2xl "
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
