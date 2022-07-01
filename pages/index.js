import Head from 'next/head'
import HeroSection from "../components/Homepage/HeroSection"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
       <HeroSection />
      </main>


    </div>
  )
}

export default Home
