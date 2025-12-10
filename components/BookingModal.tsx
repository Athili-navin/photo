
import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Users, Clock, Hash, Check, ChevronDown } from 'lucide-react';
import { Service, BookingFormData } from '../types';

interface BookingModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    venue: '',
    needsAlbum: 'No',
    isMultiDay: 'No',
    numDays: '',
    attendees: '',
  });

  const [loading, setLoading] = useState(false);

  // Reset form when service changes or modal opens
  useEffect(() => {
    if (isOpen) {
        setFormData({
            name: '',
            phone: '',
            date: '',
            time: '',
            venue: '',
            needsAlbum: 'No',
            isMultiDay: 'No',
            numDays: '',
            attendees: '',
        }); 
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xnneglag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          service: service.title,
          ...formData,
          _subject: `New Booking Request: ${service.title}`
        })
      });

      if (response.ok) {
        setLoading(false);
        alert('Booking request sent successfully! We will contact you shortly.');
        onClose();
      } else {
        const data = await response.json();
        setLoading(false);
        if (data.errors) {
            alert(data.errors.map((err: any) => err.message).join(", "));
        } else {
            alert('There was a problem submitting your request. Please try again.');
        }
      }
    } catch (error) {
      setLoading(false);
      alert('There was a problem submitting your request. Please check your internet connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers and max 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else if (name === 'numDays') {
       // Only allow numbers
       const numericValue = value.replace(/\D/g, '');
       setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Helper for radio buttons
  const handleRadioChange = (name: keyof BookingFormData, value: string) => {
     setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-card w-full max-w-2xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-black/40 p-6 flex justify-between items-center border-b border-gray-800 sticky top-0 z-10 backdrop-blur-md">
          <h3 className="text-2xl font-serif font-bold text-white">
            Book <span className="text-brand-gold">{service.title}</span>
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          
          {/* 1. Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">1. Name</label>
            <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                value={formData.name}
                onChange={handleChange}
            />
          </div>

          {/* 2. Phone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">2. Phone No</label>
            <input
                type="tel"
                name="phone"
                required
                placeholder="Phone (10 digits)"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold"
                value={formData.phone}
                onChange={handleChange}
            />
          </div>

          {/* 3. Event Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">3. Event Date</label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-brand-gold [color-scheme:dark]"
                      value={formData.date}
                      onChange={handleChange}
                    />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">Event Start Time</label>
                <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="time"
                      name="time"
                      required
                      className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-brand-gold [color-scheme:dark]"
                      value={formData.time}
                      onChange={handleChange}
                    />
                </div>
             </div>
          </div>

          {/* 4. Venue */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">4. Venue</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input
                type="text"
                name="venue"
                required
                placeholder="Venue Address"
                className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-brand-gold"
                value={formData.venue}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 5. Premium Photo Album */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">5. Premium Photo Album Required</label>
            <div className="flex gap-6">
                {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.needsAlbum === option ? 'border-brand-gold bg-brand-gold' : 'border-gray-500 group-hover:border-gray-300'}`}>
                            {formData.needsAlbum === option && <div className="w-2 h-2 rounded-full bg-black"></div>}
                        </div>
                        <input 
                            type="radio" 
                            name="needsAlbum" 
                            value={option} 
                            checked={formData.needsAlbum === option}
                            onChange={(e) => handleRadioChange('needsAlbum', e.target.value)}
                            className="hidden"
                        />
                        <span className={`text-sm ${formData.needsAlbum === option ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{option}</span>
                    </label>
                ))}
            </div>
          </div>

          {/* 6. Multiple Days Event */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">6. Multiple Days Event</label>
            <div className="space-y-3">
                 <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.isMultiDay === 'Yes' ? 'border-brand-gold bg-brand-gold' : 'border-gray-500 group-hover:border-gray-300'}`}>
                        {formData.isMultiDay === 'Yes' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                    </div>
                    <input 
                        type="radio" 
                        name="isMultiDay" 
                        value="Yes" 
                        checked={formData.isMultiDay === 'Yes'}
                        onChange={(e) => handleRadioChange('isMultiDay', e.target.value)}
                        className="hidden"
                    />
                    <span className={`text-sm ${formData.isMultiDay === 'Yes' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>Yes</span>
                </label>
                
                {/* Conditional Input for Days */}
                {formData.isMultiDay === 'Yes' && (
                    <div className="ml-7 animate-fade-in-up">
                         <div className="relative max-w-[200px]">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                            <input
                                type="text"
                                name="numDays"
                                placeholder="No. of Days"
                                className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-2 pl-9 text-sm text-white focus:outline-none focus:border-brand-gold"
                                value={formData.numDays}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                )}

                <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.isMultiDay === 'No' ? 'border-brand-gold bg-brand-gold' : 'border-gray-500 group-hover:border-gray-300'}`}>
                        {formData.isMultiDay === 'No' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                    </div>
                    <input 
                        type="radio" 
                        name="isMultiDay" 
                        value="No" 
                        checked={formData.isMultiDay === 'No'}
                        onChange={(e) => handleRadioChange('isMultiDay', e.target.value)}
                        className="hidden"
                    />
                    <span className={`text-sm ${formData.isMultiDay === 'No' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>No</span>
                </label>
            </div>
          </div>

          {/* 7. No. of Guests Attending */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-brand-gold uppercase tracking-wider block">7. No. of Guests Attending</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <select
                name="attendees"
                value={formData.attendees}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-brand-gold appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-500">Select Range</option>
                {['0 – 50', '51 – 100', '101 – 150', '151 – 200', '200+'].map((range) => (
                    <option key={range} value={range} className="bg-neutral-900 text-white">{range}</option>
                ))}
              </select>
               {/* Custom arrow for dropdown */}
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown size={16} />
               </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-gold text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {loading ? 'Processing...' : 'Confirm Booking Request'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default BookingModal;
