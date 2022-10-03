import AboutCard from "./AboutCard";

const Mission = () => {
  return (
    <div className="mb-[6.25rem] md:mb-[12.813rem]">
      <h3 className="text-center text-[1.125rem] md:text-[2.5rem] mb-[1.5rem] md:mb-[5.625rem] font-semibold">
        Our Vision and Mission{" "}
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[573px] gap-[2rem]">
        <AboutCard
          containerClass="md:self-start bg-white"
          header="Our Vision"
          text="Our vision as a team is to build a product which will reflect our passion for smooth, transparent transactions, a product that embodies integrity as we stand in as an intermediary with the sole aim of bridging the gap between customers and their sales/purchase transactions."
        />
        <AboutCard
          containerClass="md:self-end bg-primary_8"
          header="Our Mission"
          text="At COFAM MONEY, our mission is to become the best escrow service provider, aimed at ensuring that each user has a unique and unforgettable experience through the course of every transaction carried out on our platform."
        />
      </div>
    </div>
  );
};
export default Mission;
