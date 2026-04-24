export default function Community() {
  const alumni = [
    { name: "Rubén A. Alarcón", role: "Ingeniero Químico" },
    { name: "César Lozano López", role: "Psicólogo Clínico" },
    { name: "Néstor A. Rivera", role: "Abogado" }
  ];

  return (
    <section id="comunidad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestra Comunidad</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {alumni.map((person, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold">{person.name}</h4>
              <p className="text-slate-500 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}