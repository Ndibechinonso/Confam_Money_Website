import PricingCard from "./PricingCard"
import { buyerPricingCardArray, sellerPricingCardArray } from "../../data"

const PricingCardGrid = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-y-[2rem] justify-between mt-[4.561rem] md:mt-[7.313rem] mb-[6.25rem] md:mb-[10.434rem] px-[1.125rem] md:px-[6.25rem]">
        <PricingCard title="BUYER" containerClass="bg-white" listArray={buyerPricingCardArray}/>
        <PricingCard title="SELLER" containerClass="bg-primary_5" listArray={sellerPricingCardArray}/>
        
              </div>
    )
}

export default PricingCardGrid