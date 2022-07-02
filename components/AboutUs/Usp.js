import Card from "../Card";
import { uspArray } from "../../data"; 

const Usp = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 mb-[12.375rem] md:mb-[19.563rem] gap-y-[6.438rem] justify-items-center">
        {uspArray.map((card, index) => {
            return <Card index={index} cardClass="w-[400px]" cardIcon={card.icon} iconwidth="94" cardHeader={card.header} headerClass="text-[1rem] md:text-[2rem] font-semibold md:font-medium" cardText={card.text} textClass="text-[1rem] md:text-[1.125rem]" />
        })}
        </div>
    )
}

export default Usp