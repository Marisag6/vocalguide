import React from "react";
import ProductCard from "../components/store/ProductCard";
import pdfPage13 from "../pdf/portada.png";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShoppingCart, FileText, CreditCard, Upload } from "lucide-react";

const Store = () => {
  const product = {
    id: 1,
    title: "Guía de Vocalización para Principiantes",
    description: "Domina las bases del canto con esta guía completa y práctica.",
    price: 7.99,
    image: pdfPage13, // Asegúrate de tener esta imagen en public/images
  };

  const steps = [
    { icon: ShoppingCart, title: "Paso 1", text: "Ve a la sección Comprar." },
    { icon: FileText, title: "Paso 2", text: "Haz clic en 'Comprar Ahora' y completa el formulario." },
    { icon: CreditCard, title: "Paso 3", text: "Selecciona tu método de pago preferido." },
    { icon: CheckCircle, title: "Paso 4", text: "Confirma la compra y genera tu factura en PDF." },
    { icon: Upload, title: "Paso 5", text: "Realiza el pago y envía tu comprobante por WhatsApp." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <p className="italic text-sm text-gray-600 text-center">
        ¡Comienza hoy y transforma tu voz desde casa!
      </p>
      <h1 className="text-4xl font-bold mb-8 text-center">Tienda</h1>

      {/* Producto */}
      <div className="flex justify-center mb-12">
        <ProductCard product={product} />
      </div>

      {/* Pasos para comprar */}
      <h2 className="text-2xl font-semibold text-center mb-6">Cómo comprar</h2>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <Card key={index} className="shadow-md rounded-2xl p-4 hover:shadow-lg transition">
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <step.icon className="w-10 h-10 text-pink-500" />
              <h3 className="font-bold text-lg">{step.title}</h3>

              {/* 🔹 Si es el paso 5, mostramos el link a WhatsApp */}
              {step.title === "Paso 5" ? (
                <a
                  href="https://wa.me/584124998538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-500 font-medium hover:underline"
                >
                  {step.text}
                </a>
              ) : (
                <p className="text-sm text-gray-600">{step.text}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Store;





