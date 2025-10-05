import React from "react";

const HowItWorks = () => {
  return (
    <div className="mb-40 mt-40">
      <h1 className="text-center mt-40 text-5xl font-bold text-black">
        ¿Cómo funciona?
      </h1>
      <div className="flex gap-10 justify-center bg-white py-20  ">
        <div>
          <ul className="flex flex-row gap-30 items-center text-center ">
            <li className="grid place-items-center gap-6">
              Paso 1 <img src="preferencia.png" className=" h-30 w-30"></img>
              Selecciona el servicio que necesitas.
            </li>
            <li className="grid place-items-center gap-6">
              Paso 2 <img src="contacto.png" className=" h-30 w-30"></img>
              Contáctanos para verificar disponibilidad y precios.
            </li>
            <li className="grid place-items-center gap-6 ">
              Paso 3 <img src="confirmacion.png" className=" h-30 w-30"></img>
              Confirma tu reserva y disfruta de tu evento.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
