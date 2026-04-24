export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-700">EST 84</span>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#comunidad" className="hover:text-blue-600">Ex-Alumnos</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Inscripciones</a>
        </div>
      </div>
    </nav>
  );
}