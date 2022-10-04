import PageIntro from "../components/PageIntro";
import ConfamGrid from "../components/HowComfamMoneyWorks/ConfamGrid";
const HowComfamMoneyWorks = () => {
  return (
    <div className="px-[1.125rem] pt-8 md:px-0 mb-[7.333rem] md:mb-[4.938rem]">
      <PageIntro
        pageTitle
        title="How Confam Money Works"
        description="Each party, buyer and seller, creates a valid account on the CONFAM MONEY platform, fulfills all mandatory, contractual agreements then creates a transaction. Once the transaction is approved by CONFAM MONEY, the buyer funds their wallet and a date is agreed on, between both parties, for delivery of goods or rendering of services. 
        The seller is mandated to deliver the agreed goods and/or services to the buyer after which the funds in our possession required for the completion of this transaction, would be transferred to the seller upon approval from the buyer.
        The platform’s transactions are strict, transparent and have a well-structured security system. As an intermediary, third-party platform that manages and ensures seamless purchase and sales of goods/services between its users, CONFAM MONEY ensures that all transactions are void of ambiguity.
        "
      />

      <ConfamGrid />
    </div>
  );
};

export default HowComfamMoneyWorks;
