import Head from "next/head";
import HeroSection from "../components/Homepage/HeroSection";
import CoreSection from "../components/Homepage/CoreSection";
import WhyUsSection from "../components/Homepage/WhyUsSection";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        {/* <HeroSection /> */}
        <CoreSection />
        <WhyUsSection />
      </main>
    </div>
  );
};

export default Home;
