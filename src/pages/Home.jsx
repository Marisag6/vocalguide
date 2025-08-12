import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import BookPreview from "../components/BookPreview";
import FlipBook from "../components/FlipBook";
import HTMLFlipBook from "react-pageflip";
import pdfPage1 from "../pdf/page1.jpg";
import pdfPage2 from "../pdf/page2.jpg";
import pdfPage3 from "../pdf/page3.jpg";
import pdfPage4 from "../pdf/page4.jpg";
import pdfPage5 from "../pdf/page5.jpg";
import pdfPage6 from "../pdf/teen2.jpg";




function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.me/5804124998538" // reemplaza con tu número real
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Portada Principal */}
      <section className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 rounded-3xl shadow-lg p-8 mb-12">
        {/* Imagen portada */}
        <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="flex justify-center items-center my-12">
      <HTMLFlipBook
        width={600}   // ← más ancho
        height={800}  // ← más alto
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
      >
        <div className="page"><img src={pdfPage1} alt="Page 1" /></div>
        <div className="page"><img src={pdfPage2} alt="Page 2" /></div>
        <div className="page"><img src={pdfPage3} alt="Page 3" /></div>
        <div className="page"><img src={pdfPage4} alt="Page 4" /></div>
        <div className="page"><img src={pdfPage5} alt="Page 5" /></div>
      </HTMLFlipBook>
    </div>
        </div>
          
        
        {/* Texto y botón */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text drop-shadow-lg text-center">
                  Guía completa de vocalización para principiantes
                </h1>
                <ul className="list-disc list-inside  text-white"> ...   </ul>
          <h2 className="text-2xl font-bold text-center text-grey-200 mb-4 drop-shadow-lg">
            Descubre Tu Voz: Domina los Fundamentos del Canto 
          </h2>
          <p className="font-semibold md:text-left text-lg">¿Sueñas con cantar con confianza pero no sabes por dónde empezar? 🎤
Tu Guía Definitiva de Vocalización para Principiantes está aquí para transformar tu voz, paso a paso.

¡Aprende desde Cero SIN Experiencia!
Nuestra guía digital te lleva de la mano con técnicas profesionales explicadas de forma clara y sencilla, diseñadas especialmente para quienes nunca han recibido clases. Olvídate de la frustración: aquí encontrarás las bases sólidas que necesitas.</p>
          <div className="mt-4 space-y-2 text-gray-800 text-base leading-relaxed">
  <p className="font-semibold text-lg">¿Qué incluye esta guía?</p>
  <ul className="list-disc list-inside">
    <li>🎤 Ejercicios para calentar la voz</li>
    <li>🎵 Técnicas para mejorar la afinación</li>
    <li>💨 Control de la respiración</li>
    <li>📱 Accesible desde cualquier dispositivo</li>
    <li>🌟 Ideal para principiantes e intermedios</li>
  </ul>
  <p className="italic text-sm text-gray-600">
    ¡Comienza hoy y transforma tu voz desde casa!
  </p>
  <ul className="list-disc list-inside">    </ul>
</div>

<Link to="/tienda" className="px-6 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600  duration-300 text-center block w-fit mx-auto overflow-hidden transition-transform hover:scale-105">
  Comprar ahora
</Link>
</div>
      </section>

      {/* Sección ejercicios destacados */}
      <section className="mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text drop-shadow-lg text-center">
                  Ejercicios de Vocalización
        </h2>
                <ul className="list-disc list-inside  text-white"> ....   </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ejercicio 1 */}
          <div className="bg-white bg-opacity-50 rounded-2xl p-6 shadow-md border border-pink-200 overflow-hidden transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3 text-pink-600">
              Respiración Diafragmática
            </h3>
            <p className="text-gray-700">
              Aprende a controlar tu respiración para proyectar mejor tu voz y
              evitar tensiones.
            </p>
            <Link
          to="/Exercises"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 overflow-hidden transition-transform hover:scale-105"
>
            Ir a ejercicios
            </Link>
          </div>
          {/* Ejercicio 2 */}
          <div className="bg-white bg-opacity-50 rounded-2xl p-6 shadow-md border border-pink-200 overflow-hidden transition-transform hover:scale-105 ">
            <h3 className="text-xl font-semibold mb-3 text-pink-600">
              Vocalizaciones con Escalas
            </h3>
            <p className="text-gray-700">
              Practica escalas para fortalecer tus cuerdas vocales y ampliar tu
              rango.
            </p>
             <Link
          to="/Exercises"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 overflow-hidden transition-transform hover:scale-105"
>
            Ir a ejercicios
            </Link>
          </div>
          {/* Ejercicio 3 */}
          <div className="bg-white bg-opacity-50 rounded-2xl p-6 shadow-md border border-pink-200 overflow-hidden transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3 text-pink-600">
              Articulación y Dicción
            </h3>
            <p className="text-gray-700">
              Mejora la claridad de tu canto con ejercicios de pronunciación y
              vocalización precisa.
            </p>
            <Link
          to="/Exercises"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700  overflow-hidden transition-transform hover:scale-105"
>
            Ir a ejercicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sección testimonios */}
      <section id="testimonios" className="py-16 px-4  border-pink-200 bg-white rounded-2xl bg-opacity-50 ">
  <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text drop-shadow-lg text-center">
                  Testimonios
   </h2>
                <ul className="list-disc list-inside  text-white"> ....   </ul>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Imagen decorativa */}
    <div className="w-full md:w-1/2">
      <img
        src={pdfPage6} // Asegúrate de tener esta imagen en tu carpeta /public o cámbiala por otra
        alt="Usuarios felices"
        className="rounded-lg shadow-md w-full"
      />
    </div>

    {/* Testimonios */}
    <div className="w-full md:w-1/2 space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="italic">"La guía me ayudó muchísimo a mejorar mi técnica vocal. ¡Gracias!"</p>
        <p className="mt-2 font-semibold text-right">- Ana Pérez</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="italic">"Muy profesional, fácil de seguir y súper útil para principiantes."</p>
        <p className="mt-2 font-semibold text-right">- Carlos Romero</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="italic">"Recomiendo esta guía a todos los que quieran empezar a cantar."</p>
        <p className="mt-2 font-semibold text-right">- Mariana López</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="italic">"Tiene los principios básicos que todo cantante debe conocer y dominar."</p>
        <p className="mt-2 font-semibold text-right">- Liseth Rodriguez</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="italic">"Es muy fácil de seguir y comprender, con ejercicios prácticos."</p>
        <p className="mt-2 font-semibold text-right">- Maria Celeste García</p>
      </div>
<Link to="/tienda" className="px-6 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600  duration-300 text-center block w-fit mx-auto overflow-hidden transition-transform hover:scale-105">
  Comprar ahora
</Link>
    </div>
    <FloatingWhatsappButton />
  </div>
</section>



   
</div>
  );
}
 
