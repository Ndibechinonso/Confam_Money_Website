const AboutCard = ({header, text, containerClass}) =>{
    return(
        <div className={` ${containerClass} h-[325px] md:h-[500px] max-w-[332px] md:max-w-[600px] text-black_2 shadow-2xl rounded-2xl pt-[2.5rem] md:pt-[4rem] pb-[1.25rem] md:pb-[11rem] px-[1.875rem]`}>
<h4 className="text-center text-[1rem] md:text-[2rem] font-semibold mb-[1.25rem] md:mb-[2.5rem]">{header}</h4>
<p className="text-[1rem] md:text-[1.25rem]">{text}</p>
        </div>
    )
}

export default AboutCard