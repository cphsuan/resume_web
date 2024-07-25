import { Typewriter } from "react-simple-typewriter";
import GeneralSection from "../../Components/layouts/GeneralSection";
import SectionTitle from "../../Components/layouts/SectionTitle";
import SocialLinks from "./components/SocialLinks";
import Computer from "../home/components/Computer";
import Hobby from "../home/components/Hobby";
import Habit from "../home/components/Habit";

const Home = () => {
  return (
    <>
      <div className="inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-grayscale-50" />
          <div className="w-1 h-80 lg:h-72 bg-gradient-to-b from-grayscale-50 to-grayscale-900" />
        </div>
        <div>
          <SectionTitle title="I'm Vivianne" subtitle="HELLO!" />
          <div
            className="text-grayscale-50 px-6"
            style={{
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            I'm an Frontend Engineer with over 1+ year of experience. Feel free
            to explore my portfolio. If you have any questions, don't hesitate
            to reach out!
          </div>
          <div className="text-grayscale-500 p-6">
            <Typewriter
              words={[
                "Expand your horizon like the ocean, for within its depths lie the mysteries waiting to be discovered. 🐳",
              ]}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className="py-6">
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
    </>
  );
};

export default Home;
