import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Service } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Slight delay to clear service after animation would be ideal, but instant is fine for now
    setTimeout(() => setSelectedService(null), 300); 
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services onBookService={handleBookService} />
        <Contact />
      </main>
      <Footer />
      
      <BookingModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;