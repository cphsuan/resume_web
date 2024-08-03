import { hiker, diver } from "../../../assets";
import BeforeAfter from "../../../components/BeforeAfter";

const Hobby = () => {
  return (
    <div>
      <BeforeAfter beforeImg={hiker} afterImg={diver} />
    </div>
  );
};

export default Hobby;
