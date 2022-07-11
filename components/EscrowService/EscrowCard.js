import PageIntro from "../PageIntro"

const EscrowCard = ({cardTitle, cardDescription}) => {
    return(
        <div className="bg-white m-auto h-[307px] md:h-[360px] pt-[3.125rem] md:pt-[3.75rem] pb-[6.563rem] md:pb-[7.875rem] px-[2.375rem] md:px-[3.375rem] shadow-2xl rounded-2xl max-w-[324px] md:max-w-[386px]">
<PageIntro title={cardTitle} description={cardDescription} titleClass="text-black_2 text-[1.125rem] md:text-[1.5rem] leading-[1.5rem] md:leading-[1.875rem] font-semibold mb-[2rem] md:mb-[1.5rem]" descriptionClass="text-grey_2 text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem]" containerClass="" />
        </div>
    )
}

export default EscrowCard