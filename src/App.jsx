import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Comments from "./pages/Comments";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Comentarios from './pages/Comentarios';
import Footer from "./components/Footer"; // <-- IMPORTANTE
import CheckoutForm from './components/store/CheckoutForm';
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-400">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/tienda" element={<Store />} />
             <Route path="/comentarios" element={<Comentarios />} />
             <Route path="/checkout" element={<CheckoutForm />} />
             
             
          </Routes>
        </div>
           {/* FOOTER */}
      <footer className="mt-10 py-6 text-white text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400"> 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          {/* Información de contacto */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-pink-900 mb-4">Contacto</h3>
            <p>📍 Dirección: Unare Center, Puerto Ordaz, Venezuela</p>
            <p>📞 Teléfono: +58 0412-4998538</p>
            <p>✉️ Email: gmarissabel@gmail.com</p>
          </div>

          {/* Redes sociales */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-pink-900 mb-4">Redes Sociales</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-900 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-900 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-900 transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios o info adicional */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-pink-900 mb-4">Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>

        <footer className="mt-10 py-6 text-white text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400">
  <p className="text-sm">
    © {new Date().getFullYear()} Vocal Guide. Todos los derechos reservados.
  </p>
</footer>
      </footer>
      </div>
    </Router>
  );
}

export default App;