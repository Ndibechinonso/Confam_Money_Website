import Head from "next/head";
import React from "react";
import Accordion from "../components/Faq/Accordion";
import PageIntro from "../components/PageIntro";
import { faqData } from "../data";

function Faq() {
  const { questions, subtitle, title } = faqData;

  return (
    <>
    <Head>
    <title>Confam Money FAQ</title>
    <link rel="" href="" />
  </Head>
    <main className="px-[1.125rem] pt-8 md:px-[6.25rem] lg:px-[16.875rem] mb-[4.014rem] md:mb-[13.625rem]">
      <PageIntro pageTitle title={title} description={subtitle} />
      <section className=" bg-white mt-12 lg:mt-7 py-12_5 px-[21px] md:px-10 xl:px-15 shadow-2xl rounded-2xl">
        {questions.map(({ answer, question }) => {
          return (
            <Accordion answer={answer} question={question} key={question} />
          );
        })}
      </section>
      <section className="mt-10 md:mt-12 px-[50px] pt-3 sm:pt-7 sm:pb-6 pb-1 sm: text-center  sm:mx-[3.125rem] rounded-[100px] bg-white">
        <p className="font-medium text-base text-black_2">
          Can’t find what you are looking for? &nbsp;
          <a className="inline-block text-primary_5" href="/contact">
            Contact Us
          </a>
        </p>
      </section>
    </main>
    </>
  );
}

export default Faq;
