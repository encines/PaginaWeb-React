import React from "react";

// 1. Definir la información de los servicios en un array.
//    Esto hace que sea más fácil agregar, quitar o modificar servicios.
const services = [
  {
    title: "Brincolines",
    description:
      "Tenemos brincolines de diferentes tamaños y colores para tus fiestas.",
    imageUrl: "/brincolines.webp", // Cambia esto a la imagen correcta
    href: "#brincolines",
  },
  {
    title: "Mesas y Sillas",
    description: "Mobiliario cómodo y de calidad para todos tus invitados.",
    imageUrl: "/mesas.jpg", // Cambia esto a la imagen correcta
    href: "#mesas",
  },
  {
    title: "Carpas",
    description: "Protege tu evento del sol o la lluvia con nuestras carpas.",
    imageUrl: "/carpas.jpg", // Cambia esto a la imagen correcta
    href: "#carpas",
  },
  {
    title: "Decoración",
    description: "Servicios de decoración para ambientar tu fiesta.",
    imageUrl: "/perro.jpg", // Cambia esto a la imagen correcta
    href: "#decoracion",
  },
];

// 2. Crear un componente reutilizable para cada tarjeta de servicio.
//    Esto evita la repetición de código y hace que el componente principal sea más limpio.
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  href,
}) => (
  <a
    href={href}
    className="relative flex flex-col w-full sm:w-80 bg-white rounded-xl shadow-xl transition-transform duration-300 ease-out hover:scale-105 overflow-hidden gap-5 z-10"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 sm:h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg mt-2 text-gray-600">{description}</p>
    </div>
  </a>
);

const Options = () => {
  return (
    // 3. Contenedor principal con flex-col para apilar el título y la cuadrícula de tarjetas.
    <div className="flex flex-col items-center py-12 sm:py-16 px-4 bg-white pt-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-black">
        Nuestros Servicios
      </h2>

      {/* 4. Contenedor para la cuadrícula de tarjetas: usar grid responsive evita solapamientos */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="flex justify-center">
            <ServiceCard
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              href={service.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
