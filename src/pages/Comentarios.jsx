import React, { useState } from 'react'; 
import CommentForm from '../components/Comentarios/CommentForm';
import CommentList from '../components/Comentarios/CommentList';
import pdfPage7 from "../pdf/singer1.jpeg";
import pdfPage8 from "../pdf/group.jpeg";
import pdfPage9 from "../pdf/singer2.jpeg";

const Comentarios = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      texto: "¡La guía está excelente! Me ha ayudado mucho a mejorar mi técnica.",
      autor: "Mariana G."
    }
  ]);

  const addComment = (nuevoComentario) => {
    setComments([...comments, { id: Date.now(), ...nuevoComentario }]);
  };

  return (
    <section className="bg-white bg-opacity-50 py-8 px-4 rounded-md shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Comentarios</h2>

      {/* Carrusel automático de imágenes */}
      <div className="mt-6 overflow-hidden relative">
        <div className="flex animate-scroll gap-6 w-max">
          {/* Original */}
          <img
            src={pdfPage7}
            alt="Comentario 1"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
          <img
            src={pdfPage8}
            alt="Comentario 2"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
          <img
            src={pdfPage9}
            alt="Comentario 3"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
          {/* Repetimos para scroll continuo */}
          <img
            src={pdfPage7}
            alt="Comentario 1"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
          <img
            src={pdfPage8}
            alt="Comentario 2"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
          <img
            src={pdfPage9}
            alt="Comentario 3"
            className="w-80 h-64 object-cover rounded-lg shadow-lg flex-shrink-0"
          />
        </div>
      </div>

      {/* Formulario y lista de comentarios */}
      <div className="space-y-6 mt-8">
        <CommentForm onAddComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </section>
  );
};

export default Comentarios;

