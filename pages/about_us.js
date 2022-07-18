import PageIntro from "../components/PageIntro";
import ShortStory from "../components/AboutUs/ShortStory";
import Mission from "../components/AboutUs/Mission";
// import Usp from "../components/AboutUs/Usp";
import Team from "../components/AboutUs/Team";
const AboutUs = () => {
  return (
    <>
      <PageIntro
      pageTitle
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur"
        titleClass=""
        descriptionClass=""
      />
      <ShortStory />
      <Mission />
{/* <Usp /> */}
<Team />
    </>
  );
};

export default AboutUs;
