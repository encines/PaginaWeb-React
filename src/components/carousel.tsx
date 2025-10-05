import { useState } from "react";

const images = ["/sueño.jpg", "/mesas.jpg", "/carpa.jpg", "/cooler.jpg"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Imagen */}
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-80 object-cover transition-all duration-500"
      />

      {/* Botón Izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ◀
      </button>

      {/* Botón Derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
