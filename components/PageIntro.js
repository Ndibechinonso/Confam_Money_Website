const PageIntro = ({title, description, titleClass, descriptionClass}) => {
    return(
        <div className="text-black_2 flex flex-col gap-[0.5rem] md:gap-[0.375rem] items-center">
<h2 className={`${titleClass} font-semibold`}>{title}</h2>
<p className={`${descriptionClass} text-center`}>{description}</p>
        </div>
    )
}

export default PageIntro