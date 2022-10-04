import Head from "next/head";
import PageIntro from "../components/PageIntro"
import ScamControlGrid from "../components/ScamControl/ScamControlGrid"
import Link from 'next/link'

const ScamControl = () => {
    return(
        <>
        <Head>
          <title>Confam Money Scam Control</title>
          <link rel="" href="" />
        </Head>
        <main className="pt-8 md:pt-[3rem]">
  <PageIntro
  pageTitle
        title="Scam control"
        description="A detailed explanation on the escrow market
        and our curated appraoch to solving
        the problem in the market"
        titleClass=""
        descriptionClass=""
      />
<ScamControlGrid />
<h3 className="text-center font-semibold text-[1.125rem] md:text-[2rem] text-grey_1 mt-[4rem] md:mt-[10.5rem] mb-[0.875rem] md:mb-[1.5rem]">Report suspicious transactions to us</h3>
<p className="m-auto text-center max-w-[322px] px-[1.125rem] md:max-w-[900px] leading-[1.5rem] md:leading-[1.875rem] text-grey_2 text-[1rem] md:text-[1.25rem] mb-[9.375rem] md:mb-[14.25rem]">We can be reached directly via our customer service lines, you can also send us a mail for prompt 
mediation and resolution.<span><Link href="/comtact"><a className="text-scam_contact font-medium">Contact.</a></Link></span></p>
</main>
        </>
    )
}

export default ScamControl