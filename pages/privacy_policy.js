import Head from "next/head";
import React from "react";
import PageIntro from "../components/PageIntro";
import { privacy_policy } from "../data";

function PrivacyPolicy() {
  const { page_title, policies } = privacy_policy;
  return (
    <>
    <Head>
      <title>Confam Money Policies</title>
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
        {policies.map((policy) => (
          <section className="pb-[18px] lg:pb-20" key={policy.title}>
            <h3 className="text-[18px] font-medium leading-6 text-black_2 lg:text-[40px] lg:leading-[48px]">
              {policy.title}
            </h3>
            <p className="pt-1.5 font-light text-base text-black_2 lg:pt-3 lg:text-xl lg:leading-[30px]">
              {policy.content.body}
            </p>
            <ul>
              <p className="text-base font-light lg:text-xl lg:leading-[30px]">
                {policy.content.list?.title}
              </p>
              {policy.content.list?.listitems.map((points) => (
                <li
                  className="list-disc font-light list-inside text-base lg:text-xl lg:leading-[30px]"
                  key={points}
                >
                  {points}
                </li>
              ))}
            </ul>
            <p className="pt-6 text-base font-light lg:text-xl lg:leading-[30px] lg:pt-7 text">
              {policy.content.sub_body}
            </p>
          </section>
        ))}
      </article>
    </main>
    </>
  );
}

export default PrivacyPolicy;
