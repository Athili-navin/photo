import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onBookService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-2 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Curated Photography Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-brand-card rounded-2xl overflow-hidden group border border-gray-800 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/5 flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                <button 
                  onClick={() => onBookService(service)}
                  className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm tracking-wider uppercase hover:text-white transition-colors group/btn"
                >
                  Book Now 
                  <span className="w-8 h-[1px] bg-brand-gold group-hover/btn:w-12 group-hover/btn:bg-white transition-all duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;