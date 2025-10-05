import React from "react";

const Portada = () => {
  return (
    <div className="flex flex-row h-screen ">
      {/* Mitad izquierda con imagen */}
      <div className="relative w-full md:w-1/2 shadow-lg">
        <img
          src="/logo.png"
          alt="Foto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 md:hidden"></div>
      </div>

      {/* Mitad derecha en negro */}
      <div className="w-full md:w-1/2 h-96 md:h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-gray-900 shadow-lg flex flex-col justify-center px-10 text-white">
        {" "}
        <h2 className="text-3xl font-bold mb-4 text-left">
          Bienvenido a Diversiones Anadela
        </h2>
        <p className="text-lg text-justify">
          En Diversiones Anadela, nos especializamos en transformar tus
          celebraciones en momentos únicos. Ofrecemos renta de mobiliario
          elegante, divertidos brincolines temáticos y prácticas carpas para
          todo tipo de eventos. Ya sea una fiesta infantil, boda, bautizo o
          reunión familiar, tenemos todo lo que necesitas para crear el ambiente
          perfecto.
          <br /> ✅ Entrega puntual <br /> ✅ Montaje incluido <br /> ✅
          Atención personalizada
        </p>
      </div>
    </div>
  );
};

export default Portada;
