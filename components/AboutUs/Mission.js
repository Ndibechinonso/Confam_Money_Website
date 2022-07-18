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
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate eget, arcu."
        />
        <AboutCard
          containerClass="md:self-end bg-primary_8"
          header="Our Mission"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate eget, arcu. "
        />
      </div>
    </div>
  );
};
export default Mission;
