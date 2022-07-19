import React from "react";
// import Card from "../components/Card";
import Accordion from "../components/Faq/accordion";
import PageIntro from "../components/PageIntro";
import { faqData } from "../data";

function Faq() {
  const { questions, subtitle, title } = faqData;

  return (
    <div className="px-[1.125rem] pt-8 md:px-[6.25rem] lg:px-[16.875rem] mb-[4.014rem] md:mb-[13.625rem]">
      <PageIntro pageTitle title={title} description={subtitle} />
      <section className=" bg-white mt-12 lg:mt-7 py-12_5 px-[21px] md:px-10 xl:px-15 shadow-2xl rounded-2xl">
        {questions.map(({ answer, question }) => {
          return (
            <Accordion answer={answer} question={question} key={question} />
          );
        })}
      </section>
      <div className="mt-10 md:mt-12 px-[50px] pt-3 sm:pt-7 sm:pb-6 pb-1 sm: text-center  sm:mx-[3.125rem] rounded-[100px] bg-white">
        <p className="font-medium text-base text-black_2">
          Can’t find what you are looking for? &nbsp;
          <a className="inline-block text-primary_5" href="" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

export default Faq;
