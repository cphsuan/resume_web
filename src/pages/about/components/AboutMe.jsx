import ComponentWrapper from "../../../components/ComponentWrapper";
import SectionTitle from "../../../components/layouts/SectionTitle";
import ImageSlider from "../../../components/ImageSlider";
import { avatar } from "../../../assets";
import SocialLinks from "../../home/components/SocialLinks";

export default function About() {
  return (
    <ComponentWrapper>
      <div id="about" className="pt-6 pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Who Am I" />
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row pt-6">
          <div className="w-full md:w-[50%] flex flex-col items-center justify-between text-center pb-6 md:pb-0 pr-2">
            <p className="text-grayscale-50 font-bold uppercase">
              Hello there, I'm so happy you are here!
            </p>
            <br />
            <p>
              Detail-oriented Frontend Engineer with 1+ year of experience
              crafting intuitive user interfaces, optimizing web performance,
              and leveraging emerging technologies to consistently deliver
              exceptional user experiences that exceed expectations.
            </p>
            <br />
            <p>
              Having previously delved into software technology, data analysis,
              backend development, and AI across various domains, I'm now
              focused on honing my skills to become an exceptional software
              engineer, with a particular emphasis on mastering frontend
              development.
            </p>
            <br />
            <p>
              As a front-end developer, I continuously embrace learning and
              adapt to emerging technologies, aspiring to contribute
              meaningfully to the field in the future.
            </p>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center justify-between pb-6 md:pb-0">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] pb-6">
              <ImageSlider images={[avatar]} />
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}
