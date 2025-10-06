import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Paso 1",
      img: "preferencia.png",
      text: "Selecciona el servicio que necesitas.",
    },
    {
      title: "Paso 2",
      img: "contacto.png",
      text: "Contáctanos para verificar disponibilidad y precios.",
    },
    {
      title: "Paso 3",
      img: "confirmacion.png",
      text: "Confirma tu reserva y disfruta de tu evento.",
    },
  ];

  return (
    <section className="py-20 ">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-16">
        ¿Cómo funciona?
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white  shadow-lg rounded-2xl p-8 w-full sm:w-80 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              {step.title}
            </h2>
            <img
              src={step.img}
              alt={step.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-black text-base leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
