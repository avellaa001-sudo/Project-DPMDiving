
import React from 'react';
import { AUDIT_SECTIONS } from '../constants';

const AuditView: React.FC = () => {
  return (
    <div className="space-y-12 py-8 px-4 max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Estrategia de Escalamiento <span className="text-blue-600">DPM Diving Premium</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          De una landing efectiva a una plataforma de autoridad líder en Argentina.
        </p>
      </header>

      {AUDIT_SECTIONS.map((section) => (
        <section key={section.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <i className={`fas ${section.icon} text-blue-600 text-xl`}></i>
              <h3 className="font-bold text-xl text-slate-800">{section.title}</h3>
            </div>
            <span className="bg-blue-100 text-blue-700 text-xs font-black uppercase px-3 py-1 rounded-full">
              {section.role}
            </span>
          </div>
          <div className="p-6">
            <div className="grid gap-6">
              {section.points.map((point, idx) => (
                <div key={idx} className="grid md:grid-cols-3 gap-6 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 block">Detección Profesional</span>
                    <p className="text-slate-700 font-medium leading-relaxed">{point.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2 block">Propuesta de Valor</span>
                    <p className="text-slate-700 leading-relaxed">{point.solution}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Implementación</span>
                    <p className="text-blue-900 font-semibold text-sm leading-relaxed">{point.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
        <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="fas fa-bullseye text-blue-400"></i>
          KPIs de esta actualización
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="text-3xl font-black">+40%</div>
            <p className="text-blue-200 text-sm mt-1">Tiempo de permanencia (Blog)</p>
          </div>
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="text-3xl font-black">-25%</div>
            <p className="text-blue-200 text-sm mt-1">Bounce rate en dispositivos móviles</p>
          </div>
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="text-3xl font-black">+15%</div>
            <p className="text-blue-200 text-sm mt-1">Tasa de cierre vía WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditView;
