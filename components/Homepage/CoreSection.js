import Image from "next/image";
import React from "react";

function CoreSection() {
  return (
    <section className="flex flex-col gap-y-8 md:gap-y-14 items-center pb-5 border-t-red px-[1.875rem] pt-8  lg:pt-20 lg:pb-36 md:px-[6.25rem]">
      <header className="flex flex-col gap-y-3 md:gap-y-4 text-center md:w-[640px]">
        <h4 className="font-semibold text-[1.125rem]  md:text-[2.5rem]">
          Our Core Values
        </h4>
        <p className="font-normal text-sm md:text-[1.25rem] md:leading-[1.875rem]">
          Our values as an esteemed third-party service provider, align to
          ensure customers and users have a unique experience, We remain
          committed to creating ease, bridging the gaps between the sellers,
          buyers, goods, and services.
        </p>
      </header>
      {/* <div className="xl:px-[100px]"> */}
      <div className="grid grid-cols-1 gap-y-6  sm:grid-cols-2 sm:gap-6  lg:grid-cols-3 lg:gap-8 lg:p-4">
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_opacity.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Transparency
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We provide transactions void of ambiguity in all forms.
          </p>
        </div>
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_solutions.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Integrity
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We stand true to the truth.
          </p>
        </div>
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_timer.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Promptness
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We are just a click away from meeting and exceeding all service
            delivery expectations.
          </p>
        </div>
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_briefcase.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Professionalism
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We operate a high level of skill set and competence in all
            transactions.
          </p>
        </div>
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_network.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Dependability
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We run a system with strong measures of availability and timeliness.
          </p>
        </div>
        <div className="py-8 shadow-home_core_card px-[5px] pt-2 pb-[6px] border-solid border border-grey_6 rounded-lg flex flex-col items-center text-center sm:py-6 md:px-4 md:py-8">
          <Image src="/images/core_speedometer.svg" width={48} height={48} />
          <h6 className=" text-base font-medium mt-2 mb-1 text-black_2">
            Efficiency
          </h6>
          <p className="text-[14px] leading-[17px] text-footer_border_color ">
            We create a solid merge between expectation and delivery at all
            times without fail.
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default CoreSection;
