import PageIntro from "../components/PageIntro"
import PricingCardGrid from "../components/Pricing/PricingCardGrid"
import Usp from "../components/Pricing/Usp"
const Pricing = () => {
    return(
        <div>
  <PageIntro
        title="Pricing"
        description="Fair, transparent and simple pricing to help gear your transactions"
        titleClass=""
        descriptionClass=""
      />
  <PricingCardGrid />
  <Usp />
        </div>
    )
}

export default Pricing