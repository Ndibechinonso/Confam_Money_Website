import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
const HeroSection = () => {

  const [herobg, setHerobg] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 82) {
      setHerobg(true)
    } else {
      setHerobg(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => { 
      window.removeEventListener("scroll", changeBackground)
     }
  },[])

  return (
    <div
      className={`relative pt-20 md:py-[5.625rem] lg:py-44 bg-no-repeat h-[100vh] w-[100%] flex flex-col-reverse md:flex-row-reverse px-5 xl:px-[100px] `}
    >
      <div
        className={`${styles.hero} ${herobg? "":styles.heroanimation} absolute top-0 left-0 right-0 bottom-0 z-0`}
      ></div>

      <div className="md:absolute md:right-[100px] md:bottom-0">
        <Image src="/images/iphoneX.svg" width={"320px"} height={"640px"} />
      </div>
      <div className="w-screen h-[100%]  flex flex-col gap-y-6 justify-start text-center lg:text-left z-[1] ">
        <h1 className="font-bold text-[2rem] lg:text-[4rem]">
          Make Safe and Secure <br /> Payment
        </h1>
        <h5 className="font-medium text-[1rem] lg:text-[2rem]">
          Confam Money Provides payment services <br />
          for Business and Individual across Nigeria
        </h5>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={`bg-btn_bg cursor-pointer text-white font-medium text-[1.25rem] py-[10px] px-[30px] rounded-lg self-center md:self-start`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
