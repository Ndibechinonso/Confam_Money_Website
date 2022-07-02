import PageIntro from "../components/PageIntro";
import ShortStory from "../components/AboutUs/ShortStory";
import Usp from "../components/AboutUs/Usp";
import Team from "../components/AboutUs/Team";
const AboutUs = () => {
  return (
    <div>
      <PageIntro
        title="About Us"
        description="We are a team of individuals brought together by our passion for seamless, transparent transactions. We embody the truth in integrity as we stand in the gap as an intermediary with the sole aim of bridging the gap between customers and their needs. We bring both the world of the sellers and the buyers to a point of clear, concise negotiation, validation, and satisfaction."
        titleClass="text-[1.5rem] md:text-[3.5rem]"
        descriptionClass="max-w-[320px] md:max-w-[625.16px]"
      />
      <ShortStory />
      <PageIntro
        title="What define us"
        description="We are defined by our drive and passion to create clarity & Trust between buyers and sellers on our platform during every transaction."
        titleClass="text-[1.125rem] md:text-[3rem]"
        descriptionClass="text-[1rem] max-w-[320px] md:max-w-[457px] mb-[4.313rem] md:mb-[5.813rem]"
      />
<Usp />
<Team />
    </div>
  );
};

export default AboutUs;
