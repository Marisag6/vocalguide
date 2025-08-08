import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo o nombre */}
          <Link
            to="images/logo.png"
            className="text-2xl font-bold text-purple-300 hover:text-purple-100 transition duration-300"
          >
            VocalGuide
          </Link>

          {/* Menú */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-black hover:text-purple-200 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-400"
            >
              Inicio
            </Link>
            <Link
              to="/Exercises"
              className="text-black hover:text-purple-200 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-400"
            >
              Ejercicios
            </Link>
            <Link
              to="/tienda"
              className="text-black hover:text-purple-200 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-400"
            >
              Comprar
            </Link>
            <Link
              to="/Comentarios"
              className="text-black hover:text-purple-200 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-400"
            >
              Testimonios
            </Link>
            <Link
              to="/Register"
              className="text-black hover:text-purple-200 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-400"
            >
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
