import PageIntro from "./PageIntro"
import Image from "next/dist/client/image"
const cardImageGrid = ({gridContainer, image, header, text, imgageClass, titleClass, descriptionClass, containerClass, listedIntro, children }) =>{
    return(
        <div className={gridContainer}>
<Image src={image} width={530} height={309} className={imgageClass}/>
<PageIntro title={header} description={text} containerClass={containerClass} titleClass={titleClass} descriptionClass={descriptionClass} listedIntro={listedIntro} children={children}/>
        </div>
    )
}

export default cardImageGrid