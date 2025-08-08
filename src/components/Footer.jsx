// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
   <footer className="mt-10 py-6 text-white text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400">
  <p className="text-sm">
    © {new Date().getFullYear()} Vocal Master. Todos los derechos reservados.
  </p>
</footer>
  );
};

export default Footer;
