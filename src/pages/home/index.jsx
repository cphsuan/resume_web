import { Typewriter } from "react-simple-typewriter";
import GeneralSection from "../../components/layouts/GeneralSection";
import SectionTitle from "../../components/layouts/SectionTitle";
import SocialLinks from "./components/SocialLinks";
import Computer from "./components/Computer";
import Hobby from "./components/Hobby";
import Habit from "./components/Habit";
import { hiker2 } from "../../assets";
import ComponentWrapper from "../../components/ComponentWrapper";

const Home = () => {
  return (
    <ComponentWrapper>
      <div className="flex flex-col items-center md:flex-row md:items-start pt-6">
        <div className="px-6">
          <SectionTitle title="I'm Vivianne" subtitle="HELLO!" />
          <div className="text-grayscale-50 font-bold uppercase">
            I'm an Frontend Engineer with over 1+ year of experience. Feel free
            to explore my portfolio. If you have any questions, don't hesitate
            to reach out!
          </div>
          <div className="text-grayscale-500 py-6 sm:pt-6">
            <Typewriter
              words={[
                "Expand your horizon like the ocean, for within its depths lie the mysteries waiting to be discovered. 🐳",
              ]}
              typeSpeed={80}
            />
          </div>
        </div>
        <img src={hiker2} className="max-w-[250px] rounded-xl" alt="Vv hiker" />
      </div>
      <div className="pt-6">
        <SocialLinks />
      </div>
      <GeneralSection
        title={
          <div>
            <span>WORK</span> | <span>ENGINEER</span> | <span>MORE</span>
          </div>
        }
        desc={
          <p>
            I aim to take on challenging projects that push the boundaries of
            what's possible on the web, and to be an integral part of a team
            that values innovation, growth, and excellence.
          </p>
        }
      >
        <Computer />
      </GeneralSection>
      <GeneralSection
        title={
          <div>
            <span>HOBBY</span> | <span>HIKER</span> | <span>DIVER</span>
          </div>
        }
        desc={
          <p>
            I am an avid adventurer. Whether I’m hiking up or diving, these
            experiences fuel my creativity. The thrill of exploration often
            provide fresh perspectives that I bring back to my work.
          </p>
        }
      >
        <Hobby />
      </GeneralSection>
      <GeneralSection
        title={
          <div>
            <span>HABIT</span> | <span>READING</span> | <span>WRITING</span>
          </div>
        }
        desc={
          <p>
            I spend a lot of time immersed in books, exploring different genres
            and authors, and sharing my thoughts through the written word.
          </p>
        }
      >
        <Habit />
      </GeneralSection>
    </ComponentWrapper>
  );
};

export default Home;
