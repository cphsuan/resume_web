import SectionTitle from "../../../../Components/SectionTitle";
import VerticalTimeLine from "../../../../Components/VerticalTimeLine";
import { experiences } from "../../../../Constants/constants";
import Reveal from "../../../../Components/Reveal";

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="w-full flex justify-center overflow-hidden-web"
    >
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="Experiences" subtitle="Where I've Worked" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[100%] md:h-full flex flex-col items-center justify-center mt-10">
            <Reveal>
              <VerticalTimeLine dataSets={experiences} />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
