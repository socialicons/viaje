export default function NosotrosPage() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-brandBlue mb-8 tracking-tighter">Sobre Nosotros</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Somos una empresa colombiana especializada en la **organización profesional de eventos, servicios turísticos y logísticos**. Con años de trayectoria, nos hemos consolidado como el aliado preferido de entidades públicas y privadas.
            </p>
            <div className="bg-brandBlue text-white p-8 rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-2">Respaldo Legal y Turístico</h4>
              <p className="text-blue-100 text-sm">Contamos con Registro Nacional de Turismo (RNT) vigente, cumpliendo con todos los estándares para operar ferias y convenciones a nivel nacional.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" className="rounded-3xl shadow-lg h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" className="rounded-3xl shadow-lg h-64 object-cover mt-12" />
          </div>
        </div>
      </section>

      {/* SECCIÓN INFRAESTRUCTURA (VITAL) */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-brandBlue mb-16">Infraestructura Propia</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-left p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <h3 className="text-2xl font-black text-brandTeal mb-4">Hotel Quality Confort House</h3>
            <p className="text-slate-600 mb-6">Ubicado estratégicamente en la zona de Corferias, diseñado para delegaciones que buscan comodidad y cercanía a los centros de convenciones.</p>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" className="rounded-2xl h-48 w-full object-cover" />
          </div>
          <div className="text-left p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <h3 className="text-2xl font-black text-brandBlue mb-4">Hotel Bogotá D.C.</h3>
            <p className="text-slate-600 mb-6">En el corazón de Normandía, contamos con amplios salones para eventos corporativos, académicos y sociales con capacidad flexible.</p>
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" className="rounded-2xl h-48 w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}