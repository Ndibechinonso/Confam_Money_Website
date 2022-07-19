import "../styles/globals.scss";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreSection from "../components/AppStoreSection";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="max-w-[1440px] m-auto">
      <Navbar />
      {/* <div className={`${router.pathname !== "/" ? 'bg-body_bg pt-[1.814rem] md:pt-[4.688rem]' : ''}`}> */}
      <div
        className={`${
          router.pathname !== "/"
            ? "bg-body_bg pt-[6.375rem] md:pt-[4.688rem]"
            : ""
        }`}
      >
        <Component {...pageProps} />
        <AppStoreSection />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
