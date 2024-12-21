import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const goToNext = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); };

  // Go to the previous imgae
  const goToPrev = () => { setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);};

  // Use the transition effect so the Image slider work automatically on each 4 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} >

          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slider ${index + 1}`}
                className="w-full bg-center bg-no-repeat bg-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow Button */}
      <div className="absolute top-[50%] left-2  text-white text-2xl cursor-pointer">
        <button onClick={goToPrev}>&lt;</button>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute top-[50%] right-2 text-white text-2xl cursor-pointer">
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroSlider;
