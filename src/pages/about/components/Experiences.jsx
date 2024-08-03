import SectionTitle from "../../../components/layouts/SectionTitle";
import VerticalTimeLine from "../../../components/VerticalTimeLine";
import { experiences } from "../../../constants";
import Reveal from "../../../components/Reveal";

export default function Experiences() {
  return (
    <div id="experiences" className="pb-16">
      <div className="w-full">
        <SectionTitle title="Experiences" subtitle="Where I've Worked" />
      </div>
      <div className="mt-6">
        <Reveal>
          <VerticalTimeLine dataSets={experiences} />
        </Reveal>
      </div>
    </div>
  );
}
