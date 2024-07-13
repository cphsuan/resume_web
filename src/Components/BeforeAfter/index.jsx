import React, { useState } from "react";

const BeforeAfter = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState(25);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full relative" onMouseUp={handleMouseUp}>
        <div
          className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden rounded-2xl"
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
        >
          <img src={beforeImg} alt="Before Image" />
          <div
            className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={afterImg} alt="After Image" />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary-100 cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-primary-100 absolute rounded-full h-5 w-5 -left-2 top-[calc(50%-5px)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
