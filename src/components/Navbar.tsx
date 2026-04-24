"use client";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl">
      <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg">
              84
            </div>
            <span className="font-bold text-slate-800 hidden sm:block">EST 84 SLP</span>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition">Inicio</a>
            <div className="group relative cursor-pointer">
                <span className="hover:text-blue-600">Inscripciones</span>
                <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-xl p-4 w-48 top-full border border-slate-100">
                    <a href="#" className="block py-2 hover:text-blue-600">Datos de Contacto</a>
                    <a href="#" className="block py-2 hover:text-blue-600">Requisitos</a>
                </div>
            </div>
            <a href="#" className="hover:text-blue-600 transition">Padres</a>
            <a href="#" className="hover:text-blue-600 transition">Alumnos</a>
            <a href="#" className="hover:text-blue-600 transition">Docentes</a>
          </div>

          {/* Botón Acción */}
          <a href="https://classroom.google.com" target="_blank" className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200">
            Google Classroom
          </a>
        </div>
      </div>
    </nav>
  );
}