import Image from "next/image";
import PageIntro from "../PageIntro";
const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[70px] lg:flex-row items-center justify-between">
      <Image src="/images/testimonial_img.png" width={605} height={442} />
      <div className="max-w-[312px] md:max-w-[503px]">
        <h4 className="text-primary_5 font-semibold text-center text-[1.125rem] md:text-[1.5rem] mb-[1rem] md:mb-[1.5rem]">Unlimited Transactions</h4>
        <PageIntro
          title="Join more than 1000 happy clients"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Aenean massa.consectetuer adipiscing elit. Aenean commodo ligula"
       titleClass="text-black_2 text-[1.5rem] m-auto md:ml-0 md:text-[2.5rem] font-semibold leading-[1.5rem] md:leading-[2.5rem] max-w-[268px] md:max-w-[446px] text-center md:text-left mb-[1.5rem] md:mb-[1.75rem]"
       descriptionClass="text-black_3 text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem] mb-[1.5rem] md:mb-[3.625rem]"
       />
       <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-[6px] items-center font-semibold"><p className="text-primary_5 text-[1.25rem] md:text-[2.5rem] leading-[1.875rem] md:leading-[3rem]">4.7/5.0</p><p className="text-black_2 text-[0.875rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem]">Customer Rating</p></div>
        <div className="flex flex-col gap-[6px] items-center font-semibold"><p className="text-primary_5 text-[1.25rem] md:text-[2.5rem] leading-[1.875rem] md:leading-[3rem]">1000</p><p className="text-black_2 text-[0.875rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem]">Satisfied Clients</p></div>
        <div className="flex flex-col gap-[6px] items-center font-semibold"><p className="text-primary_5 text-[1.25rem] md:text-[2.5rem] leading-[1.875rem] md:leading-[3rem]">80%</p><p className="text-black_2 text-[0.875rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem]">Transaction Rate</p></div>
       </div>
      </div>
    </div>
  );
};

export default Testimonials;
