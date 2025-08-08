import React from "react";

const LightboxPlayer = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{selected.title}</h2>
        {selected.type === "audio" ? (
          <audio controls className="w-full rounded-lg">
            <source src={selected.src} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        ) : (
          <video controls className="w-full rounded-lg">
            <source src={selected.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default LightboxPlayer;
