import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newComment = {
      id: Date.now(),
      author: 'Usuario Anónimo', // Esto luego se puede cambiar por el usuario autenticado
      date: new Date().toLocaleString(),
      text,
    };

    onAddComment(newComment);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu comentario aquí..."
        className="w-full p-3 border opacity-80 border-gray-300 rounded-lg"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="mt-2 px-4 py-2 text-center block w-fit mx-auto overflow-hidden transition-transform hover:scale-105 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Enviar Comentario
      </button>
    </form>
  );
};

export default CommentForm;
