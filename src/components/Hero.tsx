export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Escuela Secundaria Técnica 84</h1>
        <p className="text-lg text-slate-300 mb-8">Formando líderes en San Luis Potosí.</p>
        <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
          <p className="text-slate-500 italic">Aquí va el video institucional</p>
        </div>
      </div>
    </section>
  );
}