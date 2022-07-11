import CardImageGrid from "../CardImageGrid";
import { comfamGridArray } from "../../data";

const ConfamGrid = () => {
  const gridContainer =
    "flex flex-col md:flex-row items-center justify-between gap-[1.5rem]";
  const titleClass =
    "font-semibold text-grey_1 text-[1.125rem] md:text-[2.5rem] mb-[0.875rem] md:mb-[1rem]";
  const descriptionClass =
    "text-grey_2 text-[1rem] md:text-[1.25rem] max-w-[323px] md:max-w-[582px] leading-[1.5rem] md:leading-[1.875rem]";
  return (
    <div className="flex flex-col gap-y-[5.537rem] md:gap-y-[11.125rem] px-[1.125rem] md:px-[6.25rem] pt-[4.313rem] md:pt-[8.188rem]">
    
      {comfamGridArray.map((card, index) => {
        return (
          <CardImageGrid
            key={index}
            gridContainer={gridContainer}
            containerClass={`${card.containerClass} max-w-[300px] md:max-w-[500px]` }
            image={card.img}
            header={card.title}
            text={card.text}
            isNumberedImages
            imageSrc={card.numberIcon}
            imageClass={card.imageClass}
            titleClass={titleClass}
            descriptionClass={descriptionClass}
          />
        );
      })}
      
     </div>
  );
};

export default ConfamGrid;
