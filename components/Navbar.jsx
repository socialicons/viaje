import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img src="/logo.png" alt="Operadores e Inversionistas" className="h-14 w-auto" />
        </Link>

        <ul className="hidden md:flex space-x-10 font-bold text-sm uppercase tracking-widest text-slate-600">
          <li><Link href="/" className="hover:text-brandTeal transition-colors">Inicio</Link></li>
          <li><Link href="/nosotros" className="hover:text-brandTeal transition-colors">Nosotros</Link></li>
          <li><Link href="/contacto" className="hover:text-brandTeal transition-colors">Contacto</Link></li>
        </ul>

        {/* Número actualizado aquí */}
        <a href="https://wa.me/573184043752" target="_blank" className="bg-brandBlue hover:bg-brandTeal text-white font-black py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-brandTeal/30 text-xs uppercase tracking-widest">
          Asesoría Directa
        </a>
      </div>
    </nav>
  );
}