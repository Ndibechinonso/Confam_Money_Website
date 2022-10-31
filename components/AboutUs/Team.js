import Card from "../Card";
import { teamArray } from "../../data";
const Team = () => {
  return (
    <>
      <h3 className="text-black_2 font-semibold text-[1.125rem] md:text-[2.5rem] text-center mb-[1.125rem] md:mb-[2rem]">
        Meet the Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[2rem] justify-items-center mb-[9.563rem] md:mb-[17.313rem]">
        {teamArray.map((card, index) => {
          return (
            <Card
            key={index}
              index={index}
              cardClass="w-[300px]"
              cardIcon={card.image}
              iconwidth="295"
              imageClass="rounded"
              cardHeader={card.name}
              headerClass="font-semibold text-[1.125rem] mdz;text-[1.5rem] text-black_3 font-semibold"
              cardText={card.position}
              textClass="text-grey_3 text-[1rem] md:text-[1.25rem]"
            />
          );
        })}
      </div>
    </>
  );
};

export default Team;
