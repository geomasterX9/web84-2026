export default function Community() {
  const alumni = [
    { name: "Rubén A. Alarcón", role: "Ingeniero Químico" },
    { name: "César Lozano López", role: "Psicólogo Clínico" },
    { name: "Néstor A. Rivera", role: "Abogado y Político" },
    { name: "Juan C. Martínez", role: "Empresario" }
  ];

  return (
    <section id="comunidad" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Nuestros Ex-Alumnos</h2>
          <p className="mt-4 text-slate-600">Orgullo de la Técnica 84: Profesionistas destacados de San Luis Potosí.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {alumni.map((person, i) => (
            <div key={i} className="group text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow-inner">
                {/* Aquí irán las fotos después */}
                <span className="text-xs font-bold">EST 84</span>
              </div>
              <h4 className="font-bold text-slate-800">{person.name}</h4>
              <p className="text-sm text-slate-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}