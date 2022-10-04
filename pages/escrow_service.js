import Head from "next/head";
import PageIntro from "../components/PageIntro";
import { escrowCardArray } from "../data";
import EscrowCard from "../components/EscrowService/EscrowCard";
import Testimonials from "../components/EscrowService/Testimonials";
import Signup from "../components/EscrowService/Signup";

const EscrowService = () => {
  return (
    <>
    <Head>
      <title>Confam Money Escrow Service</title>
      <link rel="" href="" />
    </Head>
    <main className="px-[1.125rem] pt-8 md:px-0  mb-[4.014rem] md:mb-[13.625rem]">
      <PageIntro
        pageTitle
        title="Escrow service"
        description="At CONFAM MONEY, we operate an online escrow
 market wherein we stand as a third-party entity
 between two parties with the interest
 to engage in legal transactions."
      />
      <div className="px-[1.125rem] md:px-[6.25rem] grid grid-cols-1 xl:grid-cols-3 gap-x-[2.625rem] gap-y-[2rem] md:gap-y-[3.5rem] mt-[4.688rem] md:mt-[8.938rem] mb-[6.938rem] md:mb-[15.875rem]">
        {escrowCardArray.map((card, index) => {
          return (
            <EscrowCard
              key={index}
              cardTitle={card.title}
              cardDescription={card.text}
            />
          );
        })}
      </div>
      <Testimonials />
      <Signup />
    </main>
    </>
  );
};

export default EscrowService;
