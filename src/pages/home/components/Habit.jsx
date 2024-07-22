import React, { useState } from "react";

const Habit = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setExpandedButton(buttonIndex);
  };

  return (
    <div className="flex w-full p-6">
      {[1, 2, 3].map((index) => (
        <button
          key={index}
          className={`flex-1 transition-all duration-300 ${
            expandedButton === index ? "flex-[7]" : "flex-1"
          } bg-primary-600 text-primary-100 p-2 m-1 rounded`}
          onClick={() => handleButtonClick(index)}
        >
          Select {index}
        </button>
      ))}
    </div>
  );
};

export default Habit;
