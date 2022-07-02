import Image from "next/dist/client/image";
const Card = ({cardClass, cardIcon, iconwidth, imageClass, cardHeader, headerClass, cardText, textClass}) => {
    return(
        <div className={`${cardClass} text-black_2`}>
<Image src={cardIcon} width={iconwidth} height={iconwidth} className={imageClass} />
<h3  className={`${headerClass} text-black_2`}>{cardHeader}</h3>
<p  className={`${textClass} font-normal`}>{cardText}</p>
        </div>
    )
}

export default Card;