// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setMessage("Debes verificar tu correo antes de iniciar sesión.");
        return;
      }

      navigate("/"); // Redirige a home si está verificado
    } catch (error) {
      console.error("Error en inicio de sesión:", error);
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-silverGradient-200 bg-opacity-25 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>

        {message && (
          <div className="mb-4 text-center text-sm text-red-600 font-semibold">
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="ejemplo@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Contraseña segura"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-2 rounded-lg font-semibold hover:bg-violet-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

