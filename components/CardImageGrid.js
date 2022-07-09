import PageIntro from "./PageIntro";
import Image from "next/dist/client/image";

const CardImageGrid = ({
  gridContainer,
  image,
  header,
  text,
  imageClass,
  titleClass,
  descriptionClass,
  containerClass,
  listedIntro,
  children,
  isNumberedImages,
  imageSrc,
}) => {
  return (
    <div className={gridContainer}>
        <div className={imageClass}>
      <Image src={image} width={530} height={309}  /> </div>
      <PageIntro
        title={header}
        description={text}
        containerClass={containerClass}
        titleClass={titleClass}
        descriptionClass={descriptionClass}
        listedIntro={listedIntro}
        children={children}
        isNumberedImages={isNumberedImages}
        imgSrc={imageSrc}
      />
    </div>
  );
};

export default CardImageGrid;
