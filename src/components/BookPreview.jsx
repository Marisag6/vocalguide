// src/components/BookPreview.jsx
import React from "react";
import HTMLFlipBook from "react-pageflip";

const BookPreview = () => {
  return (
    <div className="flex justify-center my-10">
      <HTMLFlipBook
        width={300}
        height={400}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-md"
      >
        <div className="page bg-white p-6 text-black font-serif">
          <h2 className="text-xl font-bold mb-2">Portada</h2>
          <p>Guía de Vocalización para Principiantes</p>
        </div>
        <div className="page bg-white p-6 text-black font-serif">
          <h2 className="text-xl font-bold mb-2">Introducción</h2>
          <p>Bienvenido a esta guía pensada para ayudarte a encontrar tu voz.</p>
        </div>
        <div className="page bg-white p-6 text-black font-serif">
          <h2 className="text-xl font-bold mb-2">Primera lección</h2>
          <p>Comenzamos con ejercicios de respiración y postura.</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default BookPreview;
