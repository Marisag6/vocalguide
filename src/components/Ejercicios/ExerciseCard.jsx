// src/components/Ejercicios/ExerciseCard.jsx
import React from "react";

const ExerciseCard = ({ title, description, audioSrc, videoSrc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {audioSrc && (
        <div className="mb-4">
          <audio controls className="w-full">
            <source src={audioSrc} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {videoSrc && (
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={videoSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
