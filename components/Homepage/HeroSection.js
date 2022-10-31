import Image from "next/image";

const HeroSection = () => {
  return (
    <article
      className={`relative pt-[106px] bg-no-repeat h-[80vh] w-full flex flex-col items-center gap-y-12 px-5 md:py-[5.625rem] lg:py-44  md:h-screen sm:flex-row md:items-start sm:justify-between xl:px-[100px] `}
    >
      {/* <div className="absolute inset-0 [clip-path:polygon(0_0,_100%_0%,_100%_60%,_0_90%)] bg-homeheroedgemobile bg-homeheromb lg:bg-homeheroedge lg:bg-homeherolg bg-no-repeat "> */}
      <div className="absolute inset-0 bg-nav_bg [clip-path:polygon(0_0,_100%_0%,_100%_54%,_0_89%)] bg-homeheroedgemobile bg-homeheromb lg:bg-homeheroedge lg:bg-homeherolg bg-no-repeat ">
        <div
          className={`backdrop-filter absolute inset-0 z-0  bg-nav_bg  animate-bg-animate blur-[100px] `}
        />
      </div>

      <div className="w-full  text-center sm:text-left z-[1] sm:w-auto ">
        <h1 className="font-semibold text-[1.5rem] leading-[1.875rem] md:text-[3rem] md:leading-10 lg:text-[56px] lg:leading-[67px]">
          Make Safe and Secure <br /> Payment
        </h1>
        <h5 className="font-normal text-grey_2 text-base mt-4 md:text-xl lg:mt-6 lg:text-[2rem] lg:leading-10 ">
          Confam Money Provides payment services <br />
          for Business and Individual across Nigeria
        </h5>
        <a
          href="https://buyer.confammoney.com/signup/buyer"
          target="_blank"
          rel="noreferrer"
          className={`bg-btn_bg cursor-pointer text-white font-medium text-[1.25rem] py-[10px] px-[30px] rounded-lg mt-[30px] inline-block lg:mt-6`}
        >
          Get Started
        </a>
      </div>
      <div className="flex relative w-[148px] h-[296px]  lg:w-80 lg:h-[600px]  ">
        <Image
          src="/images/iPhoneimg.svg"
          className="absolute inset-0  "
          priority
          layout="fill"
        />
      </div>
    </article>
  );
};

export default HeroSection;
