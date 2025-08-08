import React from "react";

const exercises = [
  {
    id: 1,
    title: "Ejercicio de Respiración 1",
    type: "audio",
    src: "/media/audio1.mp3",
  },
  {
    id: 2,
    title: "Vocalización Básica 1",
    type: "video",
    src: "/media/video1.mp4",
  },
  {
    id: 3,
    title: "Ejercicio de Afinación",
    type: "audio",
    src: "/media/audio2.mp3",
  },
];

const ExerciseGallery = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {exercises.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all border border-gray-200"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
          <div className="rounded-xl bg-pink-100 p-4 text-center text-sm text-gray-700">
            {item.type === "audio" ? "🔊 Audio" : "🎬 Video"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseGallery;
