import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    country: "",
    ciudad: "",
    direccion: "",
    metodoPago: "",
  });

  const countries = [
    "Venezuela", "Argentina", "Chile", "Colombia", "México",
    "Estados Unidos", "España", "Perú", "Ecuador", "Bolivia",
    "Uruguay", "Paraguay", "Panamá", "Costa Rica", "Honduras",
    "El Salvador", "Guatemala", "Nicaragua", "Brasil", "Canadá"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Aquí defines tus datos de pago reales
  const paymentDetails = {
    paypal: `
      PayPal:
      Correo: paypal.me/MariaGamboarodriguez
    `,
    binance: `
      Binance Pay:
      ID de usuario: 565163946
    `,
    pagoMovil: `
      Pago Móvil:
      Banco: Mercantil
      Teléfono: 0412-4998538
      CI: V-19029444
    `,
    transferencia: `
      Transferencia Bancaria:
      Banco: Banco Mercantil
      Cuenta: 0105-0134-210-134284623
      Titular: María Isabel Gamboa
      CI: V-19.029.444
    `
  };

  const generarFacturaPDF = (formData) => {
    const doc = new jsPDF();

    const fecha = new Date().toLocaleDateString();
    const facturaId = Math.floor(Math.random() * 1000000);

    doc.setFontSize(18);
    doc.text('Factura de Compra', 14, 22);

    doc.setFontSize(12);
    doc.text(`Factura N°: ${facturaId}`, 14, 30);
    doc.text(`Fecha: ${fecha}`, 14, 36);

    doc.text(`Nombre: ${formData.nombre}`, 14, 44);
    doc.text(`Email: ${formData.correo}`, 14, 52);
    doc.text(`País: ${formData.country}`, 14, 60);
    doc.text(`Producto: Guía de Vocalización`, 14, 68);
    doc.text(`Precio: $7.99`, 14, 76);
    doc.text(`Método de pago: ${formData.metodoPago}`, 14, 84);

    // Añadimos info de pago
    doc.text(`Datos de pago:`, 14, 92);
    doc.text(paymentDetails[formData.metodoPago] || "", 14, 100);

    autoTable(doc, {
      startY: 120,
      head: [['Producto', 'Cantidad', 'Precio']],
      body: [['Guía de Vocalización', '1', '$7.99']]
    });

    doc.save('factura.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.country || !formData.metodoPago) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    generarFacturaPDF(formData);
    alert("¡Compra confirmada! Se generó la factura.");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Formulario de Compra</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block font-medium">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">País</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            required
          >
            <option value="">Selecciona un país</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Método de pago</label>
          <select
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          >
            <option value="">Selecciona una opción</option>
            <option value="paypal">PayPal</option>
            <option value="binance">Binance Pay</option>
            <option value="pagoMovil">Pago Móvil</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        {/* 🔹 Mostrar datos de pago en pantalla */}
        {formData.metodoPago && (
          <div className="p-3 bg-gray-100 rounded-md text-sm font-mono whitespace-pre-line">
            {paymentDetails[formData.metodoPago]}
          </div>
        )}

        <button
          type="submit"
          className="px-6 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 duration-300 block w-fit mx-auto overflow-hidden transition-transform hover:scale-105"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;


