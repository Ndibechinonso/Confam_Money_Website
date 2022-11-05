import "../styles/globals.scss";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreSection from "../components/AppStoreSection";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div className="max-w-[1440px] m-auto">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Navbar />
        {/* <div className={`${router.pathname !== "/" ? 'bg-body_bg pt-[1.814rem] md:pt-[4.688rem]' : ''}`}> */}
        <div
          className={`${
            router.pathname !== "/"
              ? "bg-body_bg md:pt-[8rem] pt-[4.75rem]"
              : ""
          }`}
        >
          <Component {...pageProps} />
          <AppStoreSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
