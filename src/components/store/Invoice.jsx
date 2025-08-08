import React from "react";

export default function Invoice({ orderData }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="border p-4 rounded-md bg-white print:bg-white">
      <h2 className="text-2xl font-bold mb-4">Factura</h2>
      <p><strong>Cliente:</strong> {orderData.name}</p>
      <p><strong>Email:</strong> {orderData.email}</p>
      <p><strong>Producto:</strong> {orderData.product}</p>
      <p><strong>Método de pago:</strong> {orderData.method}</p>
      <p><strong>Precio:</strong> ${orderData.price}</p>
      <p><strong>Fecha:</strong> {orderData.date}</p>

      <button onClick={handlePrint} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">
        Imprimir o guardar factura
      </button>
    </div>
  );
}
