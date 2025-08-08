// src/components/ui/button.jsx
import React from 'react'

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition ${className}`}
    >
      {children}
    </button>
  )
}
