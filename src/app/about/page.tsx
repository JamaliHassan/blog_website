import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default page;
