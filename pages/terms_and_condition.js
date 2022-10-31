import Head from "next/head";
import React from "react";
import PageIntro from "../components/PageIntro";
import { terms_condition } from "../data";

function TermsAndCondition() {
  const { page_title, terms } = terms_condition;
  return (
    <>
    <Head>
      <title>Confam Money Terms and Conditions</title>
      <link rel="" href="" />
    </Head>
    <main className="mb-[7.333rem] md:mb-[4.938rem]">
      <PageIntro
        containerClass="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-14 xl:gap-[95px] items-center"
        titleClass={
          "text-black_2 font-semibold text-[1.5rem] md:text-[2.5rem]  text-black_2 lg:text-5xl lg:leading-[58px]"
        }
        title={page_title}
      />
      <article className="px-[30px] xl:px-[100px]">
        {terms.map((term) => (
          <section className="pb-[18px] lg:pb-20" key={term.title}>
            <h3 className="text-[18px] leading-6 font-medium text-black_2 lg:text-[40px] lg:leading-[48px]">
              {term.title}
            </h3>
            <p className="pt-1.5 text-base font-light text-black_2 lg:pt-3 lg:text-xl lg:leading-[30px]">
              {term.content}
            </p>
          </section>
        ))}
      </article>
    </main>
    </>
  );
}

export default TermsAndCondition;
