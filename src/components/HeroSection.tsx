"use client";

import { useEffect, useState } from "react";

interface HeroData {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
  tag: string;
}
const heroData: HeroData[] = [
  {
    id: 1,
    image: "/Image.svg",
    title: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    tag: "ADVENTURE",
  },
  {
    id: 2,
    image: "/Image1.svg",
    title: "Exploring the hidden waterfalls of the Amazon forest",
    date: "12.08.2021",
    description:
      "Discover the serene beauty of nature while maintaining ecological balance.",
    tag: "NATURE",
  },
  {
    id: 3,
    image: "/Image2.svg",
    title: "Urban living: A tale of architectural wonders",
    date: "15.08.2021",
    description:
      "Experience the grandeur of urban landscapes with cutting-edge designs.",
    tag: "LIFESTYLE",
  },
  {
    id: 4,
    image: "/Image3.svg",
    title: "Urban living: A tale of architectural wonders",
    date: "15.08.2021",
    description:
      "Experience the grandeur of urban landscapes with cutting-edge designs.",
    tag: "LIFESTYLE",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentHero = heroData[currentIndex];
  return (
    <section className="w-full h-[600px] relative">
      <div
         className={`h-full absolute top-0 w-full bg-cover flex items-end text-white`}
         style={{ backgroundImage: `url(${currentHero.image})` }}
      >
        <div className="ml-12  my-12 flex flex-col gap-4 w-[530px]">
          <h3 className="font-bold font-roboto text-[10px] bg-transparent max-w-fit p-2 border border-transparent rounded-full backdrop-blur-md bg-opacity-30">
            {currentHero.tag}
          </h3>
          <h1 className="font-bold text-xl sm:text-2xl  md:text-4xl font-lora text-white">
            {currentHero.title}
          </h1>
          <div className="flex gap-2">
            <p className="text-[10px] text-[#E5E5E5]">{currentHero.date}</p>
            <div className="border-t border-[#E5E5E5] w-8 mt-2"></div>
            <p className="text-xs text-[#E5E5E5]">{currentHero.description}</p>
          </div>
          <div className="flex gap-3 mt-8">
            {heroData.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-700"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
