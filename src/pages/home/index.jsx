import SectionTitle from "../../Components/SectionTitle";
import Computer from "../home/components/Computer";

const Home = () => {
  return (
    <>
      <div className="inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-grayscale-50" />
          <div className="w-1 h-72 bg-gradient-to-b from-grayscale-50 to-grayscale-450" />
        </div>
        <div>
          <SectionTitle title="I'm Vivianne" subtitle="HELLO!" />
          <div
            className="text-gray-50 p-6"
            style={{
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            Expand your horizon like the ocean, for within its depths lie the
            mysteries waiting to be discovered.
          </div>
        </div>
      </div>
      <Computer />
    </>
  );
};

export default Home;
