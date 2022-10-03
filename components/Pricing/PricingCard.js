import Image from "next/image";
import { buyerPricingCardArray } from "../../data";
import PricingBand1 from "../CustomIcons/PricingBand1";
import PricingBand2 from "../CustomIcons/PricingBand2";
import PricingCheck from "../CustomIcons/PricingCheck";

const PricingCard = () => {
  return (
    <div
      className={`relative mb-[4.688rem] md:mb-[9.375rem] mt-[4.561rem] md:mt-[6.25rem] bg-white rounded-2xl shadow-pricing_card max-w-[324px] md:max-w-[966px] pt-[4.313rem] md:pt-10 pb-[3.563rem] md:pb-[4.25rem] px-0 md:px-[2.063rem] m-auto`}
    >
      <span className="hidden md:block absolute top-0 left-0">
        <PricingBand1 />
      </span>
      <span className="hidden md:block absolute bottom-0 right-0"> 
        <PricingBand2 />
      </span>
      <p
        className={`hidden md:block text-grey_3 text-2xl font-medium max-w-[653px] m-auto text-center`}
      >
        These are the only payment you’re meant to pay during transactions, no
        other hidden charges
      </p>
      <div className="text-grey_3 flex flex-row justify-between border-b-[1px] pb-4 px-10 mt-[3.188rem] text-base md:text-2xl font-semibold ">
        <p>Rate</p> <p>Percentage (%)</p>
      </div>
      <div className="text-grey_1 flex flex-row justify-between b-grey_5 py-6 px-2.5 md:py-[2.213rem] md:px-[2.375rem] text-base md:text-2xl font-semibold border-b-[1px]">
        <p className="flex flex-row gap-2 md:gap-x-6 items-center">
          <PricingCheck /> 0.00 - 1,999,999.99
        </p>
        <p>2.00%</p>
      </div>
      <div className="text-grey_1 flex flex-row justify-between b-grey_5 py-6 px-2.5 md:py-[2.213rem] md:px-[2.375rem] text-base md:text-2xl font-semibold border-b-[1px]">
        <p className="flex flex-col md:flex-row gap-1">
          <p className="flex flex-row gap-2 md:gap-x-6 md:items-center items-start">
            <PricingCheck />
            <p className="flex flex-col md:flex-row gap-1 md:gap-2">
              <p>2,000,000.00 -</p>
              <p>9,999,999.99</p>
            </p>
          </p>
        </p>
        <p className="flex flex-col md:flex-row gap-1">
          <p>50,000.00</p>
          <p>Naira + 0.5%</p>
        </p>
      </div>
      <div className="text-grey_1 flex flex-row justify-between b-grey_5 py-6 px-2.5 md:py-[2.213rem] md:px-[2.375rem] text-base md:text-2xl font-semibold border-b-[1px]">
        <p className="flex flex-row gap-2 md:gap-x-6 items-center">
          <PricingCheck /> Over 10,000,000
        </p>
        <p>1.00%</p>
      </div>
      <div className="text-center mt-[3.125rem] md:mt-[2.625rem]">
        <a
          href="https://buyer.confammoney.com/signup/buyer"
          target="_blank"
          rel="noreferrer"
          className="text-white text-xl md:text-2xl font-medium py-2.5 md:py-4 w-full bg-primary_5 rounded-lg max-w-[200px] mmax-w-[364px] inline-block text-center m-auto"
        >
          Get started
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
