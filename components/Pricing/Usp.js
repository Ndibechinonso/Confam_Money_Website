import Card from "../Card";
import { uspArray } from "../../data";

const Usp = () => {
  return (
    <div className="px-[1.125rem] text-center md:px-[6.25rem] mb-[8.375rem] md:mb-[13.813rem]">
      <h3 className="text-black_2 font-semibold text-[1.125rem] md:text-[2.5rem] mb-[1.125rem] md:mb-[1.813]">
        Our Priority is your satisfaction
      </h3>
      <p className="text-black_2 m-auto max-w-[298px] leading-[1.25rem] md:max-w-[828px] md:leading-[1.875rem] text-[1rem] md:text-[1.25rem]">
      At CONFAM MONEY, we go the extra mile to ensure the safety and security of our customers by including other features to ensure transactional credibility.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.688rem] gap-y-[4.625rem] mt-[1.5rem] md:mt-[4.5rem] justify-items-center">
        {uspArray.map((card, index) => {
          return (
            <Card
              key={index}
              usp
              cardClass="relative bg-white max-w-[324px] md:max-w-[395px] pt-[3.125rem] md:pt-[4rem] px-[1.625rem] pb-[6.563rem] md:pb-[8.063rem] rounded-2xl shadow-2xl"
              cardHeader={card.header}
              headerClass="text-[1.125rem] md:text-[2rem] font-semibold text-primary_5 mb-[2rem] md:mb-[2.5rem]"
              cardText={card.text}
              textClass="text-grey_1 text-[1rem] md:text-[1.25rem] leading-[24px] md:leading-[30px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Usp;
