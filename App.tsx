
import React, { useState } from 'react';
import AuditView from './components/AuditView';
import RedesignPreview from './components/RedesignPreview';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'audit' | 'preview'>('audit');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Admin Toggle Nav */}
      <div className="bg-slate-900 text-white px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800 sticky top-0 z-[100]">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <i className="fas fa-microscope text-lg"></i>
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base tracking-tight">Estrategia DPM Diving AR</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Panel de Consultoría Expert</p>
          </div>
        </div>
        
        <div className="bg-slate-800 p-1 rounded-xl flex gap-1">
          <button 
            onClick={() => setViewMode('audit')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'audit' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <i className="fas fa-clipboard-list mr-2"></i> Auditoría & Análisis
          </button>
          <button 
            onClick={() => setViewMode('preview')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <i className="fas fa-eye mr-2"></i> Propuesta Visual
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             Directo para Argentina
          </div>
          <a href="https://dpmdiving.com/es/" target="_blank" className="text-blue-400 hover:text-blue-300 text-xs font-bold underline">
             Ver Sitio Actual <i className="fas fa-external-link-alt ml-1"></i>
          </a>
        </div>
      </div>

      <main className="flex-grow">
        {viewMode === 'audit' ? <AuditView /> : <RedesignPreview />}
      </main>

      {/* Persistent Strategy Note */}
      {viewMode === 'audit' && (
        <footer className="bg-slate-100 border-t border-slate-200 py-8 px-6 text-center text-slate-500 text-sm">
          <p>© 2024 Propuesta de Optimización UX/UI - Enfoque exclusivo Mercado Argentino.</p>
          <div className="mt-4 flex justify-center gap-6">
            <span className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> CRO Optimizado</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Copywriting Local</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Estrategia de Confianza</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
