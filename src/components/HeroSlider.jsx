import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Use the transition effect so the Image slider works automatically every 4 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100%] sm:h-[100%] md:h-[400px] lg:h-[90vh] mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slider ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow Button */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 p-2 rounded-full">
        <button onClick={goToPrev}>&lt;</button>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 p-2 rounded-full">
        <button onClick={goToNext}>&gt;</button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
