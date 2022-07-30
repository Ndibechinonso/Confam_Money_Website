import Image from "next/image";

const PageIntro = ({
  title,
  description,
  titleClass,
  descriptionClass,
  pageTitle,
  containerClass,
  listedIntro,
  children,
  isNumberedImages,
  imgSrc,
}) => {
  return (
    <section
      className={`${
        pageTitle
          ? "flex flex-col gap-[1rem] md:gap-[1.5rem] items-center"
          : containerClass
      }`}
    >
      {isNumberedImages && (
        <section className="mb-[1rem] md:mb-[1.5rem]">
          {" "}
          <Image src={imgSrc} width={50} height={50} />{" "}
        </section>
      )}
      <h2
        className={`${
          pageTitle
            ? "text-black_2 font-semibold text-[1.5rem] md:text-[2.5rem]"
            : titleClass
        } `}
      >
        {title}
      </h2>
      {!listedIntro && (
        <p
          className={`${
            pageTitle
              ? "text-grey_2 font-medium text-center text-[1rem] md:text-[2rem] max-w-[400px] md:max-w-[828px]"
              : descriptionClass
          } `}
        >
          {description}
        </p>
      )}
      {listedIntro && children}
    </section>
  );
};

export default PageIntro;
