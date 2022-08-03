import React from "react";
import Slider from "react-slick";
import SectionTitle from "../common/SectionTitle";
import TestimonyCard from "./Card";
import { homeClientTestimoney } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function TestimonySection() {
  const { cards, subtitle, title } = homeClientTestimoney;
  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <article className="flex flex-col gap-y-8 pt-15 pb-16 sm:gap-y-8 lg:gap-y-[85px] lg:pt-[94px] lg:pb-[194px]">
      <SectionTitle headerClassName="px-8" title={title} subtitle={subtitle} />
      {/* <div className="px-6 pb-10 w-full overflow-scroll scroll-m-0 scroll- lg:px-[100px]"> */}
        {/* <div className="px-1 flex gap-x-6 sm:grid sm:grid-rows-2 sm:overflow-x-scroll scroll-m-0 sm:grid-cols-[repeat(5,400px)] sm:gap-6 lg:gap-x-10 lg:gap-y-9  "> */}
        <Slider
          className="testimoney"
          {...settings}
        >
          {cards.map(({ handle, image, testimony, title }) => (
            <div
              key={title}
              className="flex flex-col gap-y-[0.875rem] lg:gap-y-7 bg-white shadow-home_testimony rounded-2_5 p-3 pb_5_5 lg:pt-[25px] lg:pr-[25px] lg:pb-[35px] lg:pl-5 min-w-[80%] max-w-[80%] w-[80%] h-full flex-auto sm:max-w-full sm:w-full "
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
      {/* </div> */}
      {/* </div> */}
    </article>
  );
}

export default TestimonySection;
