// src/pages/Exercises.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const exercises = [
  {
    id: 1,
    title: "Ejercicio 1: Respiración diafragmática",
    description: "Aprende a controlar tu respiración usando el diafragma.",
    image: "/images/kid1.jpeg",
    media: "https://www.youtube.com/embed/0V7mEY9zA9w",
  },
  {
    id: 2,
    title: "Ejercicio 2: Vocalización con escalas",
    description: "Calienta tu voz usando escalas ascendentes y descendentes.",
    image: "/images/singer1.jpeg",
    media: "https://www.youtube.com/embed/dFDZbPBIzF4",
  },
  {
    id: 3,
    title: "Ejercicio 3: Resonancia",
    description: "Enfócate en los resonadores faciales para mejorar el timbre.",
    image: "/images/teen2.jpeg",
    media: "https://www.youtube.com/embed/Bi8C8IBZbFE",
  },
];

export default function Exercises() {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaOpen = (mediaUrl) => {
    setSelectedMedia(mediaUrl);
    setOpen(true);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Ejercicios de Vocalización</h1>
        <p className="text-center mb-12 text-lg">
          Explora estos ejercicios para mejorar tu técnica vocal. Haz clic en los botones para escuchar o ver cada uno.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={exercise.image}
                alt={exercise.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{exercise.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>
                <button
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
                  onClick={() => handleMediaOpen(exercise.media)}
                >
                  Ver ejercicio
                </button>
              </div>
            </div>
          ))}
        </div>

        {open && selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl w-full relative">
              <button
                className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 hover:bg-red-700"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedMedia}
                  title="Video de Ejercicio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
