import Head from "next/head";
import PageIntro from "../components/PageIntro";
import Card from "../components/Card";
import { contactCardArray } from "../data";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Confam Money Contact</title>
        <link rel="" href="" />
      </Head>
      <man className="px-[1.125rem] pt-8 md:px-[6.25rem] mb-[4.014rem] md:mb-[13.625rem]">
        <PageIntro
          pageTitle
          title="Contact us"
          description="Let us help you solve your nagging isssues"
        />
        <div className="grid grid-cols-1 xl:grid-cols-3 justify-between mt-[4rem] md:mt-[7.438rem] gap-y-[4rem] gap-x-[35px] bg-black">
          {contactCardArray.map((card, index) => {
            return (
              <Card
                key={index}
                contact
                cardClass="relative m-auto bg-body_bg md:bg-grey_6 w-[215px] md:w-[390px] rounded-[5px] md:shadow-3xl pt-[4.375rem] md:pt-[6.375rem] text-center"
                cardHeader={card.header}
                cardText={card.text}
                headerClass="text-black_2 font-medium text-[1rem] md:text-[2rem] mb-[0.75rem] md:mb-[1.313rem]"
                textClass="text-grey_2 text-[0.875rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.875rem] px-[6px] mb-[0.75rem] md:mb-[1.313rem]"
                footerContent={card.footerContent}
                contactImage={card.cardImg}
              />
            );
          })}
        </div>
      </man>
    </>
  );
};

export default Contact;
