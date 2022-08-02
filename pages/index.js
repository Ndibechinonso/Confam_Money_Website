import Head from "next/head";
import HeroSection from "../components/Homepage/HeroSection";
import CoreValuesSection from "../components/Homepage/CoreValuesSection";
import WhyUsSection from "../components/Homepage/WhyUsSection";
import HowItworksSection from "../components/Homepage/HowItworksSection";
import TestimonySection from "../components/Homepage/HomeTestimony";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <HeroSection />
        <CoreValuesSection />
        <WhyUsSection />
        <HowItworksSection />
        <TestimonySection />
      </main>
    </div>
  );
};

export default Home;
