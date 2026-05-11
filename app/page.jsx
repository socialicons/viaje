import React from 'react';
import { portafolio } from '../data/portafolio';

export const metadata = {
  title: 'Operadores e Inversionistas | Operador Profesional de Congresos y Logística B2G',
  description: 'Organización profesional de eventos, ferias y convenciones con infraestructura propia en Bogotá. RNT vigente y amplia experiencia en contratos estatales.',
  keywords: 'Operador Profesional de Congresos, Logística B2G, RNT, Eventos Bogotá, Hotel Quality Confort House, Suministro Institucional',
};

export default function HomePage() {
  const numeroContacto = "573184043752";

  const linkWhatsApp = (servicio) => {
    return `https://wa.me/${numeroContacto}?text=${encodeURIComponent(`Buen día, solicito asesoría técnica para el servicio de: ${servicio}.`)}`;
  };

  return (
    <div className="bg-white selection:bg-brandTeal selection:text-white font-sans">
      
      {/* 1. HERO: COMPOSICIÓN EDITORIAL DE DIAMANTES */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 z-10 space-y-8">
            <div className="inline-block">
              <p className="text-brandTeal font-black tracking-[0.5em] text-[10px] uppercase border-b-2 border-brandTeal pb-2">
                RNT Vigente • Operadores Profesionales
              </p>
            </div>
            <h1 className="text-6xl md:text-[100px] font-black text-slate-900 leading-[0.85] tracking-tighter">
              Eventos <br /> 
              <span className="text-brandBlue italic">Impecables.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg font-light leading-relaxed">
              Transformamos el objeto social en ejecución estratégica. Logística B2G con **infraestructura propia** en Bogotá para el sector público y corporativo.
            </p>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <a href="#servicios" className="bg-brandBlue text-white font-bold py-5 px-12 rounded-full hover:bg-brandTeal transition-all shadow-[0_20px_40px_rgba(43,91,132,0.3)] hover:-translate-y-1">
                Explorar Servicios
              </a>
              <a href="#experiencia" className="text-slate-900 font-bold border-b-2 border-slate-900 py-1 hover:text-brandTeal hover:border-brandTeal transition-all uppercase text-xs tracking-widest">
                Nuestra Trayectoria &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brandBlue/5 rounded-full blur-[120px] -z-10"></div>
            <div className="grid grid-cols-2 gap-6 rotate-[15deg] scale-110 group transition-transform duration-1000 hover:rotate-0">
              <div className="mask-diamond w-full aspect-square overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" alt="Hero 1" className="w-full h-full object-cover -rotate-[15deg] group-hover:rotate-0 scale-150 transition-all duration-1000" />
              </div>
              <div className="mask-diamond w-full aspect-square overflow-hidden shadow-2xl translate-y-12">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" alt="Hero 2" className="w-full h-full object-cover -rotate-[15deg] group-hover:rotate-0 scale-150 transition-all duration-1000" />
              </div>
              <div className="mask-diamond w-full aspect-square overflow-hidden shadow-2xl -translate-y-12">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" alt="Hero 3" className="w-full h-full object-cover -rotate-[15deg] group-hover:rotate-0 scale-150 transition-all duration-1000" />
              </div>
              <div className="mask-diamond w-full aspect-square overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800" alt="Hero 4" className="w-full h-full object-cover -rotate-[15deg] group-hover:rotate-0 scale-150 transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGOS: MARQUEE */}
      <section className="bg-slate-50 py-16 border-y border-slate-100 overflow-hidden">
        <div className="animate-marquee flex items-center">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-24 items-center px-12 text-slate-300 font-black text-4xl tracking-tighter uppercase whitespace-nowrap">
              <span>SENA</span>
              <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
              <span>Ejército Nacional</span>
              <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
              <span>Contraloría General</span>
              <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
              <span>Inpec</span>
              <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
              <span>Alcaldías Municipales</span>
              <div className="w-2 h-2 bg-brandTeal rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 2.1 CIFRAS DE IMPACTO */}
      <section className="bg-white py-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black text-brandBlue mb-2">15+</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Años de Trayectoria</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-brandTeal mb-2">500+</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Eventos Ejecutados</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-brandBlue mb-2">100%</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Infraestructura Propia</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-brandTeal mb-2">RNT</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vigente y Certificado</p>
          </div>
        </div>
      </section>

      {/* 3. AUTORIDAD Y SEO */}
      <section id="experiencia" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Cumplimiento legal y <br /> <span className="text-brandBlue">capacidad técnica probada.</span>
            </h2>
            <div className="prose prose-lg text-slate-500 font-light leading-relaxed">
              <p>
                Como <strong>Operadores Profesionales de Congresos (OPC)</strong>, nuestra misión es el fortalecimiento institucional a través de la organización de eventos de alto impacto. No somos intermediarios: nuestra ventaja radica en la integración de <strong>infraestructura hotelera propia</strong> en puntos estratégicos de Bogotá.
              </p>
              <p>
                Desde la planeación técnica hasta la entrega de memorias, controlamos cada fase logística, asegurando que el objeto social de cada certamen se cumpla con transparencia y rigor operativo.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-brandTeal text-white rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <p className="font-bold text-slate-900">Registro Nacional de Turismo</p>
                  <p className="text-sm text-slate-500">Categoría: Operadores de Ferias y Convenciones</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brandBlue rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandTeal/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h3 className="text-3xl font-black mb-8 leading-tight italic text-brandTeal tracking-tighter">Suficiencia Técnica <br /> e Infraestructura</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-brandTeal pl-6">
                <h4 className="font-bold text-xl mb-1">Hotel Quality Confort House</h4>
                <p className="text-blue-100/70 text-sm italic">Ubicación Estratégica Zona Corferias</p>
              </div>
              <div className="border-l-2 border-brandTeal pl-6">
                <h4 className="font-bold text-xl mb-1">Hotel Bogotá D.C.</h4>
                <p className="text-blue-100/70 text-sm italic">Salones de Eventos Zona Normandía</p>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold text-teal-300 pt-4">Soporte 360° • Catering • Producción Audiovisual</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROPUESTA DE VALOR */}
      <section className="py-32 bg-slate-50 rounded-[5rem]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-slate-900 mb-16 tracking-tighter leading-tight">
            ¿Por qué elegir un operador <br /> con <span className="text-brandBlue italic">activos propios?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-16 text-left">
            <div className="space-y-4">
              <span className="text-brandBlue font-black text-6xl opacity-20">01</span>
              <h4 className="text-xl font-bold text-slate-900">Mitigación de Riesgo</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Al ser dueños de la infraestructura, garantizamos disponibilidad y calidad sin depender de terceros.</p>
            </div>
            <div className="space-y-4">
              <span className="text-brandTeal font-black text-6xl opacity-20">02</span>
              <h4 className="text-xl font-bold text-slate-900">Optimización B2G</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Estructuras de costos directas para presupuestos institucionales y licitaciones transparentes.</p>
            </div>
            <div className="space-y-4">
              <span className="text-brandBlue font-black text-6xl opacity-20">03</span>
              <h4 className="text-xl font-bold text-slate-900">Soporte In-situ</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Equipo de producción y catering residente en nuestras sedes para respuesta inmediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICIOS */}
      <section id="servicios" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {portafolio.map((item) => (
              <div key={item.id} className="group bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-4 text-center md:text-left">
                <div className="mb-10 overflow-hidden rounded-[2rem] aspect-[4/3]">
                  <img src={item.imagen} alt={item.servicio} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-[2s]" />
                </div>
                <h3 className="text-2xl font-black text-brandBlue mb-4 tracking-tighter leading-none">{item.servicio}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">{item.descripcion}</p>
                <a href={linkWhatsApp(item.servicio)} target="_blank" className="inline-flex items-center gap-2 font-bold text-brandTeal text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  Consultar Alcance Técnico &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-48 bg-brandBlue relative overflow-hidden text-center rounded-t-[5rem] mx-4">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brandTeal opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-[90px] font-black text-white mb-16 tracking-tighter leading-[0.85]">
            Hablemos de <br /> 
            <span className="text-brandTeal italic">Resultados.</span>
          </h2>
          <div className="space-y-8">
            <a href={`https://wa.me/${numeroContacto}`} target="_blank" className="bg-white text-brandBlue font-black py-7 px-16 rounded-full text-xl hover:scale-110 transition-transform shadow-2xl inline-block uppercase tracking-widest">
              Iniciar Consultoría Técnica
            </a>
            <p className="text-blue-200/50 text-[10px] uppercase tracking-[0.4em] font-black">Bogotá • Calle 54a # 72-60 Oficina 302 • Normandía</p>
          </div>
        </div>
      </section>

    </div>
  );
}