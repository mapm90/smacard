import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Cloud } from 'lucide-react';

const images = [
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800'
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Carousel Container */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Images */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentImage 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Descubre Nuestra App
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light leading-relaxed max-w-3xl mx-auto">
            Una experiencia única diseñada para simplificar tu vida digital. 
            Funcionalidades avanzadas, diseño elegante y rendimiento excepcional.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Únete a miles de usuarios que ya han transformado su forma de trabajar 
            con nuestra innovadora aplicación.
          </p>
        </div>

        {/* Download Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#"
            className="group flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px] justify-center"
          >
            <Cloud size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-sm opacity-90">Descargar desde</div>
              <div className="text-lg font-semibold">Google Drive</div>
            </div>
          </a>

          <a
            href="#"
            className="group flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px] justify-center"
          >
            <Download size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-sm opacity-90">Descargar desde</div>
              <div className="text-lg font-semibold">Mega</div>
            </div>
          </a>
        </div>

        {/* Subtle accent */}
        <div className="mt-16 text-center">
          <div className="inline-block h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;