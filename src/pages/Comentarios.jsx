import React, { useState } from 'react';
import CommentForm from '../components/Comentarios/CommentForm';
import CommentList from '../components/Comentarios/CommentList';

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
      <ul className=" text-white list-disc list-inside">.....</ul>
      <ul className=" text-white list-disc list-inside">.....</ul>
      <ul className=" text-white list-disc list-inside">.....</ul>
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Comentarios</h2>

      {/* Imagen decorativa */}
      <div className="flex justify-center gap-6 flex-wrap">
        <img
          src="/images/singer1.jpeg"
          alt="Comentario 1"
          className="max-w-[450px] max-h-[350px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="/images/group.jpeg"
          alt="Comentario 2"
          className="max-w-[450px] max-h-[350px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="/images/singer2.jpeg"
          alt="Comentario 3"
          className="max-w-[450px] max-h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Formulario y lista de comentarios */}
      <div className="space-y-6">
        <CommentForm onAddComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </section>
  );
};

export default Comentarios;
