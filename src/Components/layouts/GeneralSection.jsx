import ComponentWrapper from "../elements/ComponentWrapper";

const GeneralSection = (props) => {
  const { title, desc, children } = props;

  return (
    <ComponentWrapper>
      <div className="sm:px-16 p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold">{title}</div>
          <div className="px-6 md:px-20 lg:px-60 py-2 text-center text-grayscale-500">
            {desc}
          </div>
        </div>
        {children}
      </div>
    </ComponentWrapper>
  );
};

export default GeneralSection;
