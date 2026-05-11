export default function Footer() {
  return (
    <footer className="bg-[#2B5B84] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
          <p className="text-blue-100 text-sm leading-relaxed mb-4">
            Líderes en organización profesional de eventos y servicios hoteleros. Respaldo institucional y logística de precisión.
          </p>
          <p className="text-xs font-black text-teal-300 uppercase tracking-widest">RNT Vigente</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-tighter">Ubicación Estratégica</h4>
          <ul className="text-sm text-blue-100 space-y-4">
            <li>📍 <strong>Oficina Principal:</strong> Calle 54a # 72-60 Of. 302</li>
            <li>🏢 <strong>Zona:</strong> Normandía - Bogotá, Colombia</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-tighter">Atención</h4>
          <p className="text-sm text-blue-100 mb-2">📞 Tel y WhatsApp: <strong>318 404 3752</strong></p>
          <p className="text-sm text-blue-100 mb-6">✉️ gerencia@operadores.com</p>
          <a href="https://wa.me/573184043752" className="inline-block bg-brandTeal text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest hover:bg-white hover:text-brandBlue transition-all">
            Hablar con Asesor
          </a>
        </div>
      </div>
    </footer>
  );
}