import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1920&q=80"
          alt="Wildlife Landscape Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mt-16">
        <span className="block text-brand-gold font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-fade-in-up">
          Capturing Life's Masterpieces
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Moments Frozen <br />
          <span className="italic text-gray-200">in Time</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light animate-fade-in-up delay-200">
          Experience photography that tells your unique story. Modern, vibrant, and timeless imagery for weddings, events, and brands.
        </p>
        
        <a 
          href="#services"
          onClick={scrollToServices}
          className="inline-flex items-center gap-2 bg-brand-gold text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300"
        >
          Book a Session <ArrowRight size={20} />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;