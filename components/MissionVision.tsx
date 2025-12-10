import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-16 bg-brand-darker border-y border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-brand-card p-8 md:p-12 rounded-2xl border border-gray-800 hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} />
            </div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
               <Target size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide exceptional photography services that not only meet but exceed our clients' expectations. We strive to capture the authentic essence of every event, delivering high-quality, emotive imagery that preserves your most cherished memories for generations to come.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-brand-card p-8 md:p-12 rounded-2xl border border-gray-800 hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} />
            </div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
               <Eye size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the leading photography brand known for innovation, artistic excellence, and customer-centricity. We envision a world where every significant moment is beautifully documented, allowing people to relive their happiness through our lens.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;