import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import PropertyCarousel from "./PropertyCarousel";
import SearchBar from "./SearchBar";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  carouselImages?: string[];
  className?: string;
}

const HeroSection = ({
  title = "Find Your Dream Home",
  subtitle = "Discover the perfect property that matches your lifestyle and preferences",
  ctaText = "View Featured Properties",
  onCtaClick = () => {},
  carouselImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  ],
  className = "",
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative h-[700px] w-full bg-gray-100 ${className}`}>
      {/* Property Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <PropertyCarousel
          images={carouselImages}
          autoScroll={true}
          autoScrollInterval={5000}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <div
          className={`text-center max-w-4xl transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>

          {/* Search Bar */}
          <div
            className="mb-8 w-full max-w-4xl mx-auto transition-all duration-1000 delay-300 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}"
          >
            <SearchBar />
          </div>

          {/* CTA Button */}
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
