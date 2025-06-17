import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Cloud, Github, DownloadIcon } from 'lucide-react';
import unidos from './medias/unidos.png';
import picatextos from './medias/logo picatextos.png';
import original from './medias/original.png';
import convertido from './medias/convertido.png';
const images = [
  picatextos, original, convertido, unidos
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
            Descubre Nuestra Apps
          </h1>
          <div className="space-y-5 max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="text-2xl">😜</span>
              <span>No es un disparate, es puro arte <span className="font-semibold text-indigo-600">(del bueno)</span></span>
            </p>
            <p className="bg-indigo-50 rounded-xl px-5 py-3 shadow-sm border-l-4 border-indigo-400 italic">
              Sabemos lo que vas a decir:<br />
              <span className="text-indigo-700 font-medium">"¡Pero eso que escribes parece un disparate, faltan letras por todos lados!"</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-2xl">👉</span>
              <span>
                Y aquí te respondemos: <span className="font-semibold text-purple-600">tranquilo, no es falta de ortografía, es optimización con flow.</span>
              </span>
            </p>
            <p>
              Nuestra app <span className="font-semibold text-blue-600">acorta tus SMS</span> eliminando lo que no hace falta, sin que pierdan sentido.
              <br />
              <span className="text-gray-500">Sí, puede parecer loco, pero lo vas a entender igual (y te vas a enamorar de lo rápido que vas a escribir).</span>
            </p>
            <div className="flex flex-col gap-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg px-5 py-4 shadow-inner">
              <p className="flex items-center gap-2">
                <span className="text-2xl">👉</span>
                <span>
                  <span className="font-semibold text-purple-700">¿Por qué?</span> Porque las abreviaciones no son errores, son atajos inteligentes.
                </span>
              </p>
              <p>
                lo q stas lyn2 aora msmo a primra vista parc 1 lio, n ralidad s 1 msj prfectamnt clr pa cualkier umano cn ganas d aorrar tiempo y spacio.
              </p>
            </div>
            <ul className="flex flex-wrap gap-4 justify-center text-base md:text-lg mt-2">
              <li className="bg-white border border-green-200 rounded-full px-4 py-1 shadow text-green-700 flex items-center gap-2">
                <span className="text-green-500">✅</span> No son faltas de ortografía.
              </li>
              <li className="bg-white border border-blue-200 rounded-full px-4 py-1 shadow text-blue-700 flex items-center gap-2">
                <span className="text-blue-500">✅</span> No son disparates.
              </li>
              <li className="bg-white border border-purple-200 rounded-full px-4 py-1 shadow text-purple-700 flex items-center gap-2">
                <span className="text-purple-500">✅</span> Son SMS afilados, ligeros y totalmente comprensibles.
              </li>
            </ul>
            <p className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>
                Es como <span className="font-semibold text-indigo-700">hablar rápido</span> pero que todos te entienden.
              </span>
            </p>
            
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-8 italic">
            Únete a los usuarios con el lema <span className="font-bold text-indigo-600">cada caracter cuesta</span>.
          </p>
        </div>

        {/* Download Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1qDIMSj7iee3mcGB7Ss4c1RxxvDwHyhnr/view?usp=sharing"
            className="group flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px] justify-center"
          >
            <DownloadIcon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-sm opacity-90">Descargar desde</div>
              <div className="text-lg font-semibold">Google Drive</div>
            </div>
          </a>

          <a
            href="https://github.com/mapm90/sms_shorter"
            className="group flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px] justify-center"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-sm opacity-90">Ver en </div>
              <div className="text-lg font-semibold">Github</div>
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