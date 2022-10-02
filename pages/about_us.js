import PageIntro from "../components/PageIntro";
import ShortStory from "../components/AboutUs/ShortStory";
import Mission from "../components/AboutUs/Mission";
// import Usp from "../components/AboutUs/Usp";
import Team from "../components/AboutUs/Team";
const AboutUs = () => {
  return (
    <section className="px-[1.125rem] pt-8 md:px-[6.25rem] lg:px-[16.875rem] mb-[4.014rem] md:mb-[13.625rem]">
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
    </section>
  );
};

export default AboutUs;
