import React from 'react';
import { Camera, Heart } from 'lucide-react';
import { ABOUT_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
             {/* Decorative element behind grid */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
            
            {ABOUT_IMAGES.map((src, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-xl aspect-square transform transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 1 ? 'mt-8' : ''}`}
              >
                <img 
                  src={src} 
                  alt={`Portfolio ${index}`} 
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              We Don't Just Take Photos, <br/>
              <span className="text-gray-400">We Craft Memories.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At <strong className="text-white">Beyond Ordinary Films</strong>, we believe every picture holds a story waiting to be told. With over a decade of experience in capturing life's most precious moments, we blend technical expertise with a creative, artistic vision.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Whether it's the grandeur of a wedding, the joy of a birthday, or the precision of architectural photography, our goal is to deliver visuals that evoke emotion and stand the test of time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-gray-800 hover:border-brand-gold/50 transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                  <Camera size={24} />
                </div>
                <span className="font-semibold text-white">Professional Gear</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-gray-800 hover:border-brand-gold/50 transition-colors group">
                <div className="p-3 bg-gray-800 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                  <Heart size={24} />
                </div>
                <span className="font-semibold text-white">Passionate Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;