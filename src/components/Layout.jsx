import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            VocalMaster
          </h1>
          <nav className="hidden sm:flex gap-6 text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Inicio
            </a>
            <a href="/store" className="hover:text-gray-900">
              Tienda
            </a>
            <a href="/about" className="hover:text-gray-900">
              Acerca
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} VocalMaster. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
