const PageIntro = ({title, description, titleClass, descriptionClass}) => {
    return(
        <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] items-center">
<h2 className={`${titleClass} text-black_2 font-semibold text-[1.5rem] md:text-[2.5rem]`}>{title}</h2>
<p className={`${descriptionClass} text-grey_2 font-medium text-center text-[1rem] text-[2rem]  max-w-[400px] md:max-w-[828px]`}>{description}</p>
        </div>
    )
}

export default PageIntro