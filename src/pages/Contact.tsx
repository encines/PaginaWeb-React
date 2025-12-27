import React from "react";

const MesaRedonda = 130;
const MesaRedondaHerreria = 150;
const MesaCuadrada = 200;

function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
  const selectedValue = event.target.value;
  let price = 0;
  if (selectedValue === "1") {
    price = MesaRedonda;
  } else if (selectedValue === "2") {
    price = MesaRedondaHerreria;
  } else if (selectedValue === "3") {
    price = MesaCuadrada;
  }
  alert(`El precio es: $${price}`);
}

const Contact = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 mx-7 rounded-lg shadow-lg ">
        <h2 className="text-3xl">Brincolines</h2>
        <a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold  px-4 rounded mt-4 py-2  mb-8">
            Ver Brincolines
          </button>
        </a>
        <h2 className="text-3xl mb-8">Mesas</h2>
        <select
          className="bg-gray-800 text-white p-3 rounded-lg w-full"
          id="opciones"
          name="opciones"
        >
          <option value="1">Mesas Redondas - $130</option>
          <option value="2">Mesas Redondas Sillas de Herreria - $150</option>
          <option value="3">Mesas Cuadradas - $200</option>
        </select>
        <input
          className="bg-white text-black p-3 rounded-lg w-full"
          type="numbers"
          name="cantidad"
          placeholder="Cantidad"
        ></input>
        <h3 id="total"className="mt-4 mb-4">Total: </h3> 
      </div>
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-8">Agendar</h2>
        <form
          action="https://formsubmit.co/tu-email"
          method="POST"
          className="space-y-4 flex flex-col bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <input
            className="bg-gray-800 text-white p-3 rounded-lg w-full"
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            className="bg-gray-800 text-white p-3 rounded-lg w-full"
            type="phone"
            name="phone"
            placeholder="Teléfono"
            required
          />
          <textarea
            className="bg-gray-800 text-white p-3 rounded-lg w-full"
            name="message"
            placeholder="Direccion"
            required
          ></textarea>
          <h6>Fecha y hora</h6>
          <input
            className="bg-gray-800 text-white p-3 rounded-lg w-full"
            type="date"
            name="date"
            required
          />
          <input
            className="bg-gray-800 text-white p-3 rounded-lg w-full"
            type="time"
            name="time"
            required
          />
          <a>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4 px-4"
              type="submit"
            >
              Enviar
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
