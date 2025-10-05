import React from "react";

const Introduction = () => {
  return (
    <div className="bg-[url(/hola.jpg)]  h-screen bg-cover bg-center">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center rounded-xl bg-black/60  mt-20 p-8">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Diversiones Anadela
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
            Tu mejor opción para eventos inolvidables!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Ver más
            </a>
            <a href="/contact" className="text-sm/6 font-semibold text-white">
              Contacto <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
