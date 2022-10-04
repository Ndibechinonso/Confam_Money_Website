import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SectionTitle from "../common/SectionTitle";
import TestimonyCard from "./Card";
import { homeClientTestimoney } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useWindowSize } from "../../hooks";

function TestimonySection() {
  const { cards, subtitle, title } = homeClientTestimoney;

  const initialstate = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  const [settings, setSettings] = useState(initialstate);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 640) {
      setSettings((prev) => ({ ...prev, rows: 1, slidesToShow: 1 }));
    }
    if (size.width >= 640) {
      setSettings((prev) => ({ ...prev, rows: 1, slidesToShow: 2 }));
    }

    if (size.width >= 1280) {
      setSettings((prev) => ({ ...prev, rows: 2, slidesToShow: 3 }));
    }
  }, [size.width]);

  return (
    <article className="flex flex-col gap-y-8 pt-15 pb-16 sm:gap-y-8 lg:gap-y-[85px] lg:pt-[94px] lg:pb-[194px] justify-center">
      <SectionTitle headerClassName="px-8" title={title} subtitle={subtitle} />
      <Slider className="" {...settings}>
        {cards.map(({ handle, image, testimony, title }) => (
          <div
            key={title}
            className="flex flex-col gap-y-[0.875rem] lg:gap-y-7 bg-white shadow-home_testimony rounded-2_5 p-3 pb_5_5 lg:pt-[25px] lg:pr-[25px] lg:pb-[35px] lg:pl-5 min-w-[80%] h-full flex-auto sm:max-w-full sm:w-full m-auto"
          >
            <div className="flex items-center gap-x-[0.375rem]">
              <div className="relative w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-circle">
                <Image
                  src={image}
                  className="absolute rounded-circle object-cover object-top"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col gap-y-0 ">
                <h5 className="text-black_2 font-bold text-[13px] leading-[19px] lg:text-[20px] lg:leading-[30px] ">
                  {title}
                </h5>
                <div className="text-grey_4 font-normal text-[0.625rem] leading-[15px] lg:text-[16px] lg:leading-[24px]">
                  {handle}
                </div>
              </div>
            </div>
            <div className="text-grey_2 font-normal text-[12px] lg:text-[18px] leading-[15px] lg:leading-6 mt-[0.875rem] lg:mt-7">
              {testimony}
            </div>
          </div>
        ))}
      </Slider>

    </article>
  );
}

export default TestimonySection;
