// src/components/EventModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin } from 'lucide-react';

const EventModal = ({ event = {}, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const {
    name = 'Event Name',
    description = 'Event description',
    date = 'Upcoming',
    location = 'Location TBA',
    image = '/api/placeholder/600/300'
  } = event;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center
      transition-all duration-300 ease-out
      ${isVisible ? 'backdrop-blur-sm bg-black/40' : 'backdrop-blur-none bg-black/0'}`}>
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-md mx-4 
        transition-all duration-200 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        ${isClosing ? 'translate-y-4 opacity-0' : ''}`}>
        
        {/* Glass Card Effect */}
        <div className="relative overflow-hidden rounded-xl
          bg-white/90 backdrop-blur-sm
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          border border-white/20">
          
          {/* Ambient Light Effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 
            bg-blue-400/20 rounded-full blur-2xl animate-pulse"/>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 
            bg-violet-400/20 rounded-full blur-2xl animate-pulse"/>
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 p-1.5
              rounded-full bg-white/80 backdrop-blur-sm
              border border-white/20 shadow-md
              transform transition-all duration-300
              hover:scale-110 hover:rotate-90
              group"
          >
            <X className="w-4 h-4 text-gray-500 
              transition-colors duration-300
              group-hover:text-rose-500"/>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-48">
            <div className="absolute inset-0 bg-gradient-to-t 
              from-black/30 via-transparent to-transparent"/>
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover transform 
                transition-transform duration-400 ease-out
                hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="relative p-5 space-y-4">
            {/* Title */}
            <h2 className="text-xl font-semibold
              bg-gradient-to-r from-gray-900 to-gray-600
              bg-clip-text text-transparent
              transform transition-all duration-300">
              {name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Event Details */}
            <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 rounded-lg bg-blue-50 
                  transform transition-all duration-300 
                  group-hover:scale-110 group-hover:bg-blue-100">
                  <Calendar className="w-4 h-4 text-blue-500"/>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-blue-600 
                  transition-colors duration-300">{date}</span>
              </div>
              
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 rounded-lg bg-violet-50
                  transform transition-all duration-300
                  group-hover:scale-110 group-hover:bg-violet-100">
                  <MapPin className="w-4 h-4 text-violet-500"/>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-violet-600
                  transition-colors duration-300">{location}</span>
              </div>
            </div>
          </div>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5
            bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"/>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
