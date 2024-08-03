const SocialLinks = () => {
  const linkClassNames =
    "text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all";

  return (
    <div className="rounded-xl w-full h-[100px] bg-grayscale-900 flex justify-center items-center gap-3 p-6">
      <a
        href="https://github.com/cphsuan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`${linkClassNames} fa-brands fa-github`} />
      </a>
      <a
        href="mailto:cphsuan17@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`${linkClassNames} fa-solid fa-envelope`} />
      </a>
      <a
        href="https://www.linkedin.com/in/viviannechao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`${linkClassNames} fa-brands fa-linkedin`} />
      </a>
      <a
        href="https://medium.com/@cphsuan17/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`${linkClassNames} fa-brands fa-medium`} />
      </a>
      <a
        href="https://oceanpeakmix.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`${linkClassNames} fa-brands fa-blogger`} />
      </a>
    </div>
  );
};

export default SocialLinks;
