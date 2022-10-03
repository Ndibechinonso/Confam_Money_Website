import PageIntro from "../components/PageIntro";
import ShortStory from "../components/AboutUs/ShortStory";
import Mission from "../components/AboutUs/Mission";
// import Usp from "../components/AboutUs/Usp";
import Team from "../components/AboutUs/Team";
const AboutUs = () => {
  return (
    <section className="px-[1.125rem] pt-8 md:px-[6.25rem] mb-[4.014rem] md:mb-[13.625rem]">
      <PageIntro
      pageTitle
        title="About Us"
        description="We are a team of individuals brought together by our passion for smooth, transparent transactions. We embody integrity as we stand in as an intermediary with the sole aim of bridging the gap between customers and their sales/purchase transactions. We bring both the world of the sellers and the buyers to a clear, concise negotiation, validation, and satisfaction."
        titleClass=""
        descriptionClass=""
      />
      <ShortStory />
      <Mission />
{/* <Usp /> */}
<Team />
    </section>
  );
};

export default AboutUs;
