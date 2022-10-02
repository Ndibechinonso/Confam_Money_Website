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
    <article className="flex flex-col gap-y-7 md:gap-y-20 px-4 pt-8 pb-14 md:pt-20 md:pb-[11.25rem] xl:px-[100px]  bg-home_sec bg-homeimgedge bg-no-repeat bg-homeimgedgesm sm:bg-homeimgedgedsk sm:bg-homeimgedgemd lg:bg-homeimgedgexl">
      <SectionTitle {...data} />
      <div className="flex flex-col gap-y-11 sm:flex-row sm:gap-x-5 md:gap-x-9 lg:gap-x-[84px] lg:flex-1 xl:justify-center ">
        <div className="flex flex-col  gap-y-4  sm:gap-y-8 lg:justify-center">
          {homeWhyUs.map(({ body, image, title }) => (
            <Card key={title} body={body} imgsrc={image} title={title} />
          ))}
        </div>
        <div className="relative w-[328px] h-[424px] self-center  shadow-home_why_img rounded-2xl overflow-hidden sm:w-full md:min-w-[328px] md:max-w-md md:h-[576px] md:rounded-[30px]  xl:h-[728px] xl:w-[562px] xl:max-w-full ">
          <Image
            src={"/images/home_why_shake1.png"}
            className="absolute inset-0"
            layout="fill"
          />
        </div>
      </div>
    </article>
  );
}

export default WhyUsSection;
