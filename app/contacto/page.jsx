export default function ContactoPage() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black text-brandBlue mb-8 tracking-tighter">Hablemos.</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Nuestra oficina principal está ubicada en **Normandía, Bogotá**. Escríbanos para iniciar la planeación técnica de su evento.
          </p>
          <div className="space-y-8">
            <div>
              <p className="font-black uppercase text-xs text-brandTeal tracking-[0.2em] mb-2">Ubicación</p>
              <p className="text-slate-900 font-bold">Calle 53 #70-71, Normandía - Bogotá</p>
            </div>
            <div>
              <p className="font-black uppercase text-xs text-brandTeal tracking-[0.2em] mb-2">Teléfono</p>
              <p className="text-slate-900 font-bold">+57 304 674 6843</p>
            </div>
          </div>
        </div>

        <form className="bg-white p-12 rounded-[3rem] shadow-2xl space-y-6">
          <input type="text" placeholder="Nombre de la Entidad / Empresa" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brandTeal transition-all" />
          <input type="email" placeholder="Correo Electrónico" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brandTeal transition-all" />
          <textarea placeholder="Descripción del requerimiento logístico" rows="5" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brandTeal transition-all"></textarea>
          <button className="w-full bg-brandBlue text-white font-black py-5 rounded-2xl hover:bg-brandTeal transition-colors shadow-lg uppercase tracking-widest text-sm">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
}