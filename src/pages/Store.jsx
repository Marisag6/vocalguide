import React from "react";
import ProductCard from "../components/store/ProductCard";

const Store = () => {
  const product = {
    id: 1,
    title: "Guía de Vocalización para Principiantes",
    description: "Domina las bases del canto con esta guía completa y práctica.",
  
    price: 7.99,
    image: "/images/portada.png", // Asegúrate de tener esta imagen en public/images
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <p className="italic text-sm text-white-600">
    ¡Comienza hoy y transforma tu voz desde casa!
  </p>
      <h1 className="text-4xl font-bold mb-8 text-center">Tienda</h1>
      <div className="flex justify-center">
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default Store;


