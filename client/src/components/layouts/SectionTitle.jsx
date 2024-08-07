import { m, LazyMotion, domAnimation } from "framer-motion";
import ComponentWrapper from "../ComponentWrapper";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <ComponentWrapper>
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ x: -350 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-primary-100"
        >
          {subtitle && (
            <span
              className="opacity-50"
              style={{
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-morganite tracking-wider text-7xl sm:text-8xl md:text-9xl">
              {title.split("").map((char, index) => {
                if (char === " ") {
                  return " ";
                }
                return (
                  <span key={index} className="bounce">
                    {char}
                  </span>
                );
              })}
            </h2>
          )}
        </m.div>
      </LazyMotion>
    </ComponentWrapper>
  );
};

export default SectionTitle;
