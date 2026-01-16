
import React, { useState } from 'react';
import { BENEFITS, FAQ_DATA, ROADMAP, BLOG_POSTS } from '../constants';

const RedesignPreview: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-water text-white text-xl"></i>
          </div>
          <span className="font-black text-2xl tracking-tighter text-blue-900 uppercase">DPM<span className="text-blue-500">DIVING</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Cursos</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Destinos</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          Reservar Bautismo
        </button>
      </nav>

      {/* Hero Section con Trust Badges */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/diving_hero/1920/1080" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
          alt="Buceo en Argentina" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">Premium AR</span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="text-white ml-1">4.9 Google Reviews</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Tu próxima aventura empieza <span className="text-blue-400">bajo el agua.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
              Descubrí el silencio del océano con los mejores instructores certificados de Argentina. Seguridad total y equipo incluido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20">
                <i className="fas fa-calendar-check"></i>
                Elegí tu fecha
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all">
                <i className="fab fa-whatsapp"></i>
                Hablá con un instructor
              </button>
            </div>
            <div className="flex items-center gap-8 opacity-70">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PADI_Logo.png" className="h-8 grayscale invert object-contain" alt="PADI" />
              <div className="h-8 w-px bg-white/20"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Certificación Internacional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Refined */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:border-blue-200">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${benefit.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Roadmap "Tu camino al azul" */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Tu camino al azul, paso a paso</h2>
            <p className="text-slate-600 text-lg">Hacemos que tu primer buceo sea fácil, seguro y sobre todo, inolvidable.</p>
          </div>
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {ROADMAP.map((step, idx) => (
                <div key={idx} className="bg-white flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-black mb-6 border-8 border-white shadow-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Storytelling "Por qué buceamos" */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
               <img src="https://picsum.photos/seed/diving_team/600/800" className="rounded-3xl shadow-2xl relative z-10" alt="Nuestro Equipo" />
               <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl z-20 hidden md:block">
                  <p className="text-3xl font-black">+15</p>
                  <p className="text-xs uppercase font-bold tracking-widest text-blue-100">Años de pasión</p>
               </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4 block">Nuestra Historia</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Más que un curso, un cambio de vida.</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                DPM Diving nació de la necesidad de traer los estándares de buceo más altos del mundo a nuestra costa argentina. No solo enseñamos a respirar bajo el agua; enseñamos a respetar el océano y a superar tus límites en un entorno de seguridad total.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-400"></i>
                  <p className="font-bold">Protocolos de seguridad internacional DAN</p>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-400"></i>
                  <p className="font-bold">Instructores en formación continua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Destinos para tu primera vez</h2>
            <p className="text-slate-600 text-lg">Lugares elegidos estratégicamente por su baja dificultad y alta belleza.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img src={`https://picsum.photos/seed/diving${item+20}/800/1000`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Destino" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 w-full">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-green-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Ideal Principiantes</span>
                    <span className="bg-blue-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Cupos hoy</span>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">Puerto Madryn</h3>
                  <p className="text-slate-300 text-sm mb-6">La capital nacional del buceo. Aguas tranquilas y visibilidad perfecta para tu bautismo.</p>
                  <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all">
                    Ver Fechas Disponibles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Blog / Autoridad */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Aprender es parte de la aventura</h2>
              <p className="text-slate-600">Leé nuestra guía para principiantes y sentite un experto antes de mojarte.</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline">Ver todas las guías →</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <article key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <img src={post.image} className="w-full h-48 object-cover" alt={post.title} />
                <div className="p-8">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">{post.category}</span>
                  <h3 className="text-xl font-bold mb-3 leading-tight hover:text-blue-600 cursor-pointer">{post.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                  <a href="#" className="font-bold text-slate-900 flex items-center gap-2 group">
                    Leer más <i className="fas fa-arrow-right text-blue-500 group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Refined */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Despejá tus dudas</h2>
            <p className="text-slate-600">Lo que todo buceador primerizo se pregunta.</p>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center font-bold text-lg text-left"
                >
                  {item.question}
                  <i className={`fas fa-chevron-down transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-5 text-slate-600 border-t border-slate-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Final - Con Formulario mejorado */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-900 p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-black mb-6">¿Tu corazón late por el mar?</h2>
              <p className="text-slate-300 mb-8">
                Consultanos lo que necesites. Estamos acá para acompañarte en cada metro de profundidad.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />)}
                </div>
                <p className="text-sm font-bold text-blue-300">+200 buzos este mes</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="space-y-4">
                <input type="text" placeholder="Tu nombre completo" className="w-full bg-slate-800 border border-slate-700 px-6 py-4 rounded-xl focus:ring-2 ring-blue-500 outline-none transition-all" />
                <input type="text" placeholder="Tu WhatsApp (con código de área)" className="w-full bg-slate-800 border border-slate-700 px-6 py-4 rounded-xl focus:ring-2 ring-blue-500 outline-none transition-all" />
                <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-3">
                   Empezar mi aventura <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent WhatsApp con nombre del asesor */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
           <p className="text-xs font-bold">¡Hola! Soy Juan 🤿</p>
           <p className="text-[10px] text-slate-500">¿Dudas sobre tu primer buceo?</p>
        </div>
        <a 
          href="#" 
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <i className="fas fa-water text-white text-sm"></i>
            </div>
            <span className="font-black text-lg tracking-tighter text-slate-900 uppercase">DPM<span className="text-blue-600">DIVING</span></span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 DPM Diving Argentina. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-600"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-blue-600"><i className="fab fa-youtube text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RedesignPreview;
