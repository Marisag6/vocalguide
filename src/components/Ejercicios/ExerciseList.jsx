// src/components/Ejercicios/ExerciseList.jsx
import React from "react";
import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    title: "Ejercicio 1: Respiración Diagonal",
    description: "Este ejercicio te ayuda a controlar la respiración para un mejor rendimiento vocal.",
    audioSrc: "/audios/ejercicio1.mp3",
    videoSrc: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Ejercicio 2: Vocalización con 'Ma-Me-Mi-Mo-Mu'",
    description: "Calienta tu voz con esta vocalización progresiva.",
    audioSrc: "/audios/ejercicio2.mp3",
    videoSrc: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  // Puedes seguir agregando más ejercicios
];

const ExerciseList = () => {
  return (
    <div className="space-y-6">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} {...exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
