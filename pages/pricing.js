import PageIntro from "../components/PageIntro"
import PricingCard from "../components/Pricing/PricingCard"
import Usp from "../components/Pricing/Usp"
const Pricing = () => {
    return(
        <div>
  <PageIntro
  pageTitle
        title="Pricing"
        description="Fair, transparent and simple pricing to help gear your transactions"
        titleClass=""
        descriptionClass=""
      />
  <PricingCard />
  <Usp />
        </div>
    )
}

export default Pricing