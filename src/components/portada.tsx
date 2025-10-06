import React from "react";

const Portada = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen ">
      {/* Mitad izquierda con imagen */}
      <div className="relative w-full md:w-1/2 h-64 shadow-lg md:h-full">
        <img
          src="/logo.png"
          alt="Foto"
          className="w-full h-full object-cover"
        />
        {/* Sombra sutil en móvil para contraste con el texto */}
        <div className="absolute inset-0 bg-black/30 md:hidden"></div>
      </div>

      {/* Mitad derecha con texto */}
      <div className="w-full md:w-1/2 h-auto shadow-lg md:h-full bg-gradient-to-br from-blue-600 via-purple-700 to-gray-900 flex flex-col justify-center px-6 sm:px-10 py-10 md:py-0 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-left">
          Bienvenido a Diversiones Anadela
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-justify leading-relaxed">
          En Diversiones Anadela, nos especializamos en transformar tus
          celebraciones en momentos únicos. Ofrecemos renta de mobiliario
          elegante, divertidos brincolines temáticos y prácticas carpas para
          todo tipo de eventos. Ya sea una fiesta infantil, boda, bautizo o
          reunión familiar, tenemos todo lo que necesitas para crear el ambiente
          perfecto.
          <br />
          <br /> ✅ Entrega puntual <br /> ✅ Montaje incluido <br /> ✅
          Atención personalizada
        </p>
      </div>
    </section>
  );
};

export default Portada;
