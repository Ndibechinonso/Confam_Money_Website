import Image from "next/image";
const ShortStory = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-x-[2.938rem] gap-y-[3.44rem] text-black_2 pb-[5rem] md:pb-[11.5rem] pt-[3.436rem] md:pt-[9.875rem] px-[1.875rem] md:px-[6.25rem]">
      <div className="flex flex-col max-w-[325px] max-w-[548px] gap-[0.625rem] md:gap-[1.25rem]">
        <h3 className="font-semibold text-[1.125rem] md:text-[2.5rem] leading-[24px] md:leading-[48px]">
          Find Out How Our Company Can Help What Your Needs
        </h3>
        <p className="text=[1rem] md:text-[1.125rem] leading-[24px] md:leading-[30px]">
          We are a team of individuals brought together by our passion for
          seamless, transparent transactions. We embody the truth in integrity
          as we stand in the gap as an intermediary with the sole aim of
          bridging the gap between customers and their needs. We bring both the
          world of the sellers and the buyers to a point of clear, concise
          negotiation, validation, and satisfaction.
        </p>
      </div>
      <div className="rounded-2xl">
        <Image src="/images/about_us_img1.png" width={644} height={494} />
      </div>
      {/* <div className="flex flex-row h-[573px] gap-[2rem]">
    <div className="self-start"><Image src="/images/story_guy.png" width={275} height={535} /></div>
    <div className="self-end"> <Image src="/images/story_girl.png" width={275} height={535} /></div>
    
</div> */}
    </div>
  );
};

export default ShortStory;
