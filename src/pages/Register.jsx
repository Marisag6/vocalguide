// src/pages/Register.jsx
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Registro con Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      setName(user.displayName || "");
      setEmail(user.email || "");

      setMessage("Has iniciado sesión con Google.");
      navigate("/"); 
    } catch (error) {
      console.error("Error con Google:", error);
      setMessage("Error al iniciar con Google.");
    }
  };

  // Registro normal
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, { displayName: name });

      await sendEmailVerification(userCredential.user);

      setMessage("Registro exitoso. Verifica tu correo electrónico para activar tu cuenta.");

      // Redirigir a login después de 3 segundos
      setTimeout(() => {
        navigate("/login");
      }, 3000);

      // Limpiar campos
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error en registro:", error);
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-silverGradient-200 bg-opacity-25 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Crear una cuenta</h2>
        
        {message && (
          <div className="mb-4 text-center text-sm text-green-600 font-semibold">
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block mb-1 text-sm font-medium">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Tu nombre"
              required
            />
          </div>
          
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
            Registrarse
          </button>
        </form>

        <div className="my-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">o</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          <FaGoogle className="mr-2" /> Registrarse con Google
        </button>
      </div>
    </div>
  );
};

export default Register;
