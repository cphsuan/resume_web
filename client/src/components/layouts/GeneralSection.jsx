import ComponentWrapper from "../ComponentWrapper";

const GeneralSection = (props) => {
  const { title, desc, children } = props;

  return (
    <ComponentWrapper>
      <div className="sm:px-16 px-6 pt-6">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold">{title}</div>
          <div className="px-6 md:px-20 lg:px-40 pt-2 text-center text-grayscale-500">
            {desc}
          </div>
          {children}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default GeneralSection;
