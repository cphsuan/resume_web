import React, { useState } from "react";
import { bloggerIcon, mediumIcon } from "../../../assets";

const Habit = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setExpandedButton(buttonIndex);
  };

  return (
    <div className="flex w-full p-6">
      {[
        {
          site: "blogger",
          logo: bloggerIcon,
          link: "https://oceanpeakmix.blogspot.com",
          desc: "Using Blogger to record my climbing and diving trips and learn SEO to increase blog’s visibility and reach.",
        },
        {
          site: "medium",
          logo: mediumIcon,
          link: "https://medium.com/@cphsuan17",
          desc: "Using Medium to record my technical journey, sharing my expertise with a global audience and continue growing as a frontend engineer.",
        },
      ].map((habit, index) => (
        <button
          key={index}
          className={`flex-1 transition-all duration-300 ${
            expandedButton === index ? "flex-[7]" : "flex-1"
          } bg-primary-600 text-primary-100 p-4 m-1 rounded`}
          onClick={() => handleButtonClick(index)}
        >
          <img className="p-2" src={habit.logo} alt={habit.site} />
          {expandedButton === index && (
            <>
              <hr />
              <p className="p-2">{habit.desc}</p>
              <button
                className="rounded-full bg-carbon-red p-2 m-2"
                onClick={() => window.open(habit.link, "_blank")}
              >
                View More
              </button>
            </>
          )}
        </button>
      ))}
    </div>
  );
};

export default Habit;
