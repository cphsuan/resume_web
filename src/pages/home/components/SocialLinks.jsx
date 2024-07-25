import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-900 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/cphsuan" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faGithub}
        />
      </a>
      <a href="mailto:cphsuan17@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faEnvelope}
        />
      </a>
      <a href="https://www.linkedin.com/in/viviannechao/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faLinkedin}
        />
      </a>
      <a href="https://medium.com/@cphsuan17/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faMedium}
        />
      </a>
      <a href="https://oceanpeakmix.blogspot.com/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faBlogger}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
