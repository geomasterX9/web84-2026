export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
            Escuela Secundaria <span className="text-blue-600">Técnica 84</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            San Luis Potosí, México. Formando el futuro a través de la Robótica y la tecnología educativa de vanguardia.
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Saber más
            </button>
          </div>
        </div>

        {/* Video de Youtube embebido con diseño moderno */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/M2b6O30TtBo" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}