import { m, LazyMotion, domAnimation } from "framer-motion";
import ComponentWrapper from "../../../../Components/elements/ComponentWrapper";
import SectionTitle from "../../../../Components/SectionTitle";
import ImageSlider from "../../../../Components/elements/ImageSlider";
import { avatar } from "../../../../assets";

const About = () => {
  return (
    <ComponentWrapper>
      <div
        id="about"
        className="w-full flex justify-center overflow-hidden-web"
      >
        <div className="w-full xl:w-[70%] flex flex-col pb-16">
          <div className="w-full">
            <SectionTitle title="ABOUT ME" subtitle="Who Am I" />
          </div>
          <div className="w-full flex flex-col-reverse sm:flex-row">
            <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
              <LazyMotion features={domAnimation} strict>
                <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="text-gray-50 p-6 text-center flex flex-col gap-6"
                >
                  <span>Hello there, I'm so happy you are here!</span>
                  <span>
                    Detail-oriented Frontend Engineer with 1+ year of experience
                    crafting intuitive user interfaces, optimizing web
                    performance, and leveraging emerging technologies to
                    consistently deliver exceptional user experiences that
                    exceed expectations.
                  </span>
                  <span>
                    Having previously delved into software technology, data
                    analysis, backend development, and AI across various
                    domains, I'm now focused on honing my skills to become an
                    exceptional software engineer, with a particular emphasis on
                    mastering frontend development.
                  </span>
                  <span>
                    As a front-end developer, I continuously embrace learning
                    and adapt to emerging technologies, aspiring to contribute
                    meaningfully to the field in the future.
                  </span>
                </m.p>
              </LazyMotion>
            </div>
            <div className="w-full md:w-[50%] flex h-full items-center justify-center">
              <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
                <ImageSlider images={[avatar]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default About;
