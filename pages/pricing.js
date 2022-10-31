import Head from "next/head";
import PageIntro from "../components/PageIntro";
import PricingCard from "../components/Pricing/PricingCard";
import Usp from "../components/Pricing/Usp";
const Pricing = () => {
  return (
    <>
      <Head>
        <title>Confam Money Pricing</title>
        <link rel="" href="" />
      </Head>
      <main className="px-[1.125rem] pt-8 md:px-0">
        <PageIntro
          pageTitle
          title="Pricing"
          description="Fair, transparent and simple pricing to help gear your transactions"
          titleClass=""
          descriptionClass=""
        />
        <PricingCard />
        <Usp />
      </main>
    </>
  );
};

export default Pricing;
