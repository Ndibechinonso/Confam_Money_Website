import Image from "next/image"
import Button from "../Button"
import { buyerPricingCardArray } from "../../data"

const PricingCard = ({title, listArray, containerClass}) => {
    return(
        <div className={`${containerClass} rounded-2xl shadow-xl pt-[2.5rem] pb-[1.813rem] md:pb-[3.313rem] px-[1.125rem] md:px-[3rem] max-w-[324px] max-h-[437px] md:max-w-[605px] md:max-h-[605px]`}>
<h4 className={`${title === 'BUYER' ? 'text-black_2' : 'text-white'} text-center text-[1.125rem] md:text-[2rem] font-semibold mb-[1rem] md:mb-[1.5rem]`}>{title}</h4>
<p className={`${title === 'BUYER' ? 'text-grey_3' : 'text-white'} text-[0.875rem] md:text-[1.25rem] mb-[1.875rem] md:mb-[1.25rem] text-center`}>This is the only payment you’re meant to pay during
 transactions, no other hidden chrages</p>
 <div className="max-w-[220px] md:max-w-[300px] m-auto">
 <p className="flex flex-row items-end mb-[1.568rem] md:mb-[3.313rem]"><span className={`${title === 'BUYER' ? 'text-primary_5' : 'text-white'} flex flex-row gap-[1px] md:gap-x-[2px] text-[2.5rem] md:text-[4rem] font-semibold md:font-bold leading-[40px] md:leading-[60px]`}><span>N</span> <span>1500</span></span> <span className={`${title === 'BUYER' ? 'text-black_2' : 'text-white'}`}>/transaction</span></p>

     <ul className="text-center">{listArray.map((item, index) => <li key={index} className={`${title === 'BUYER' ? 'text-grey_3' : 'text-white'} flex flex-row gap-x-[26.58px] md:gap-x-[17px] mb-[1.5rem] md:mb-[1.875rem]`}><Image src={`${listArray === buyerPricingCardArray ? '/images/white-bullet.png' : '/images/blue-bullet.png'}`} width={23.42} height={23.42} /> <span>{item}</span></li> )}</ul>  
     </div>  
      <div className="text-center mt-[1.5rem] md:mt-[4.313rem]"><Button text="Get Started" className={`${title === 'BUYER' ? 'bg-primary_5 text-white' : 'text-primary_5 bg-white'} font-medium text-[1.125rem] md:text-[1.5rem] py-[9.5px] md:py-[16px] w-[200px] md:w-[364px] rounded-[5.77022px] md:rounded-lg`} /> </div>
        </div>
    )
}

export default PricingCard