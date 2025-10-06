import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactanos
        </h2>
        <p className="mb-8 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Envianos un Mensaje!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="Nombre"
              className="block mb-2 py-5 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              type="name"
              id="name"
              placeholder="Tu Nombre"
              className="shadow-sm  bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              htmlFor="Descripcion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 py-5"
            >
              Descripcion
            </label>
            <input
              type="text"
              id="Descripcion"
              value="Quiero mas informacion..."
              className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-10 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
        </form>
        <a
          className="inline-flex  mt-8 text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="https://wa.me/6671361586?text=Quiero%20mas%20informacion..."
        >
          Enviar
        </a>
      </div>
    </section>
  );
};
export default Contact;
