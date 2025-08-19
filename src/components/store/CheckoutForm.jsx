import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// 👇 Importamos el logo
import logo from '../../pdf/logo2.png'; // ajusta la ruta si está en otra carpeta
import {
  ShoppingCart,
  FileText,
  CreditCard,
  CheckCircle,
  Upload,
} from "lucide-react";

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
    `,
  };

  const generarFacturaPDF = (formData) => {
    const doc = new jsPDF();

    const fecha = new Date().toLocaleDateString();
    const facturaId = Math.floor(Math.random() * 1000000);

    // 👇 Insertamos el logo en la parte superior izquierda
    doc.addImage(logo, "PNG", 150, 10, 60, 60); 
    // (imagen, tipo, x, y, ancho, alto) → ajusta valores a tu gusto

    doc.setFontSize(18);
    doc.text("Factura de Compra", 14, 22);

    doc.setFontSize(12);
    doc.text(`Factura N°: ${facturaId}`, 14, 30);
    doc.text(`Fecha: ${fecha}`, 14, 36);

    doc.text(`Nombre: ${formData.nombre}`, 14, 44);
    doc.text(`Email: ${formData.correo}`, 14, 52);
    doc.text(`País: ${formData.country}`, 14, 60);
    doc.text(`Producto: Guía de Vocalización`, 14, 68);
    doc.text(`Precio: $7.99`, 14, 76);
    doc.text(`Método de pago: ${formData.metodoPago}`, 14, 84);

    doc.text(`Datos de pago:`, 14, 92);
    doc.text(paymentDetails[formData.metodoPago] || "", 14, 100);

    autoTable(doc, {
      startY: 120,
      head: [["Producto", "Cantidad", "Precio"]],
      body: [["Guía de Vocalización", "1", "$7.99"]],
    });

    doc.save("factura.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.correo ||
      !formData.country ||
      !formData.metodoPago
    ) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    generarFacturaPDF(formData);
    alert("¡Compra confirmada! Se generó la factura.");
  };

  // 🔹 Pasos del proceso
  const steps = [
    { icon: ShoppingCart, title: "Paso 1", text: "Ve a la sección Comprar." },
    {
      icon: FileText,
      title: "Paso 2",
      text: "Haz clic en 'Comprar Ahora' y completa el formulario.",
    },
    {
      icon: CreditCard,
      title: "Paso 3",
      text: "Selecciona tu método de pago preferido.",
    },
    {
      icon: CheckCircle,
      title: "Paso 4",
      text: "Confirma la compra y genera tu factura en PDF.",
    },
    {
      icon: Upload,
      title: "Paso 5",
      text: "Realiza el pago y envía tu comprobante por WhatsApp.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      {/* 🔹 Sección de pasos */}
      <h2 className="text-2xl font-semibold text-center mb-6">Cómo comprar</h2>
      <div className="grid md:grid-cols-5 gap-4 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <step.icon className="w-10 h-10 text-pink-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>

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
          </div>
        ))}
      </div>

      {/* 🔹 Formulario */}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Formulario de Compra
      </h2>
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
