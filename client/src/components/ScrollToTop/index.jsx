import React from "react";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-primary-400 text-black rounded-full p-4 shadow-md cursor-pointer outline-none z-20"
      onClick={handleScrollToTop}
    >
      Top
    </button>
  );
};

export default ScrollToTop;
