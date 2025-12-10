import React from 'react';
import { Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
             <div className="bg-brand-gold text-black p-1 rounded-sm">
                <Camera size={20} strokeWidth={2.5} />
             </div>
             <span className="text-xl font-serif font-bold text-white tracking-wide">
                Beyond Ordinary <span className="text-brand-gold">Films</span>
             </span>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Beyond Ordinary Films. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-gold transition-colors">Cookie Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;