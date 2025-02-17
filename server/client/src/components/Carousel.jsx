import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Carousel = () => {
  const slides = [
    {
      src: "img/slide2.png",
      alt: "Slide 2",
      text: "When rare coffee is bought to your kitchen",
    },
    {
      src: "img/slide3.png",
      alt: "Slide 3",
      text: "Enjoy a classic taste for Modern coffee lovers",
    },
    {
      src: "img/slide1.png",
      alt: "Slide 1",
      text: "Streamline your food processing business the Sleek way",
    },
    {
      src: "img/slide4.png",
      alt: "Slide 4",
      text: "We bottled something that is more than a filter coffee",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <div className="relative overflow-hidden w-full ">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full md:h-[calc(100vh-65px)] h-full flex-shrink-0 relative"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />

            <h2 className="absolute bottom-1 md:bottom-24 md:left-24 left-5 text-white md:text-6xl text-2xl font-bold px-4 py-2 bg-transparent rounded-md text-shadow">
              {slide.text}
            </h2>
          </div>
        ))}
      </div>

      {/* Left Control */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Control */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
