import Image from "next/dist/client/image";
const Card = ({
  cardClass,
  cardIcon,
  iconwidth,
  imageClass,
  cardHeader,
  headerClass,
  cardText,
  textClass,
  usp,
  contact,
  contactImage,
  footerContent
}) => {
  return (
    <div className={`${cardClass} text-black_2 ${usp ? 'overflow-hidden' : ''}`}>
        {contact && <div className="absolute -top-[45px] w-[100%] flex flex-row justify-center"><Image src={contactImage} width={111} height={111} /></div>}
      {usp ? (
        <>
          <div className="absolute -bottom-[10px] right-[0]">
            <Image
              src="/images/pricing_card_band_2.png"
              width={183.51}
              height={40}
            />{" "}
          </div>
          <div className="absolute -bottom-[20px] right-[0]">
            <Image
              src="/images/pricing_card_band_1.png"
              width={120}
              height={40}
            />{" "}
          </div>
        </>
      ) : null}

      {cardIcon ? (
        <Image
          src={cardIcon}
          width={iconwidth}
          height={iconwidth}
          className={imageClass}
        />
      ) : null}
      <h3 className={`${headerClass} text-black_2`}>{cardHeader}</h3>
      <p className={`${textClass} font-normal`}>{cardText}</p>


      {contact && <div className="bg-body_bg md:bg-white py-[12px]"><p>{footerContent}</p></div>}
    </div>
  );
};

export default Card;
