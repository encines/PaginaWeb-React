import React, { useState } from "react";

const Contact = () => {
  // 1. Definimos el estado para los campos
    const [formData, setFormData] = useState<ContactForm>({
    name: "",
    description: "",
  });
    interface ContactForm {
      name: string;
      description: string;
    }
  // 2. Función para actualizar el estado cuando el usuario escribe
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });
};

  // 3. Función para manejar el envío
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      console.log("Nombre: ", formData.name);
    console.log("Descripción: ", formData.description);
    
    // Aquí podrías abrir WhatsApp dinámicamente con los datos reales
    const mensaje = `Hola, soy ${formData.name}. ${formData.description}`;
    const url = `https://wa.me/6671361586?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contáctanos
        </h2>
        <p className="mb-8 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          ¡Envíanos un Mensaje!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu Nombre"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />

            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 py-2 mt-4">
              Descripción
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Quiero más información..."
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Enviar a WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;