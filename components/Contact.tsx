import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-darker relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 bg-brand-card rounded-3xl overflow-hidden border border-gray-800">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-10 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We'd love to discuss your upcoming event. Fill out a service request or contact us directly below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 tracking-wide text-sm uppercase text-gray-500">Phone</h4>
                  <p className="text-lg text-gray-200 hover:text-brand-gold transition-colors font-serif">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-gold shrink-0">
                  <Mail size={24} />
                </div>
                 <div>
                  <h4 className="text-white font-medium mb-1 tracking-wide text-sm uppercase text-gray-500">Email</h4>
                  <p className="text-lg text-gray-200 hover:text-brand-gold transition-colors font-serif">hello@beyondordinaryfilms.com</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                 <div>
                  <h4 className="text-white font-medium mb-1 tracking-wide text-sm uppercase text-gray-500">Studio</h4>
                  <p className="text-lg text-gray-200 font-serif">123 Creative Studio, Art District, NY</p>
                </div>
              </div>
            </div>

            {/* Social Icons could go here */}
             <div className="mt-12 flex gap-4">
                {/* Simplified social placeholders */}
                {['facebook', 'instagram', 'twitter'].map((social) => (
                    <div key={social} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all cursor-pointer">
                        <span className="sr-only">{social}</span>
                         <ExternalLink size={16} />
                    </div>
                ))}
             </div>
          </div>

          {/* Map / Image Area */}
          <div className="w-full lg:w-7/12 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/id/1016/1200/800" 
              alt="Location" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90 lg:bg-gradient-to-r"></div>
            
            <div className="absolute bottom-8 left-8 right-8 text-center lg:text-left">
                <a 
                    href="#" 
                    className="inline-block bg-brand-gold text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-white transition-colors"
                >
                    View on Google Maps
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;