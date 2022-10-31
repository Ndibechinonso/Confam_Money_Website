import CardImageGrid from "../CardImageGrid";

const ScamControlGrid = () => {

  const gridContainer = "flex flex-col xl:flex-row items-center justify-between gap-y-[1.5rem] gap-x-[125px]"
  const titleClass= "font-semibold text-grey_1 text-[1.125rem] md:text-[2.5rem] mb-[0.875rem] md:mb-[1rem] text-center"
  const descriptionClass = "text-grey_2 text-[1rem] md:text-[1.25rem] max-w-[323px] md:max-w-[582px] leading-[1.5rem] md:leading-[1.875rem]"
  const listedClass = "max-w-[325px] md:max-w-[549px] leading-[1.5rem] md:leading-[1.875rem] text-grey_2 text-[1rem] md:text-[1.25rem] round"
  
  return (
    <div className="flex flex-col gap-y-[4rem] md:gap-y-[12.5rem] px-[1.125rem] md:px-[6.25rem] pt-[4.313rem] md:pt-[8.188rem]">
      <CardImageGrid
       gridContainer={gridContainer}
        image="/images/scam_1.png"
        header="Overview of Escrow scam"
        text="The Escrow Space in its entirety is renowned for its large flow of Funds. This has made it imperatively the target of hackers and cybercriminals from the onset. However, CONFAM MONEY has implemented the approach of a highly secured verification and authentication process within its platform which serves as a shield and validation for all transactions."
        containerClass=""
        imageClass="order-2"
        titleClass={titleClass}
        descriptionClass={descriptionClass}
     />

<CardImageGrid
       gridContainer={gridContainer}
        image="/images/scam_2.png"
        header="Red Flags of possible payment Scam"
        containerClass=""
        imageClass="order-first"
        titleClass={titleClass}
        listedIntro
        children
><ul className={listedClass}>
    <li className="red_flags text-black_2">Straw buyers</li>
    <p className="">These are loan applicants used by fraudsters to disguise the true buyer or the true nature of the transaction.</p>

    <li className="red_flags text-black_2">Property flipping</li>
    <p className="">This is when a property or goods is purchased and resold quickly in violation of the lender's short sale regulations at a price that results from an appraisal that has been artificially inflated.
</p>
<li className="red_flags text-black_2">Non-arms-length transactions</li>
<p className="">When the parties appear to be connected in some way, wheththrough ethnic background, names or residence</p>
    </ul> </CardImageGrid>

    <CardImageGrid
       gridContainer={gridContainer}
        image="/images/scam_3.png"
        header="Avoiding escrow scams"
        text="You can take steps to protect yourself from escrow scams when purchasing something from another person online, including:
        Check the sender's email address.
        Be cautious when opening links.
        Don't trust the information in emails.
        Be wary of unusual payment methods."
        containerClass="order-first"
        imageClass="order-2"
        titleClass={titleClass}
        descriptionClass={descriptionClass}
     />


<CardImageGrid
       gridContainer={gridContainer}
        image="/images/scam_4.png"
        header="Questionable payment approachs"
        containerClass=""
        imageClass="order-first"
        titleClass={titleClass}
        listedIntro
        children
><ul className={listedClass}>
<li className="red_flags">Look for suspicious payoff demands, such as those with grammatical or typographical errors, or those with low dollar payoff demands on high dollar loans.
</li>
<li className="red_flags">Uninsured deeds in a transaction.
</li>
<li className="red_flags">Repeated refinances for the same amount on the same property in short time frames.
</li>
<li className="red_flags">Call the number on payoff demands to confirm they are real numbers.
</li>
<li className="red_flags">Keep management apprised of these red flags so that legal counsel can be consulted when appropriate.</li>

    </ul> </CardImageGrid>

    </div>
  );
};

export default ScamControlGrid;
