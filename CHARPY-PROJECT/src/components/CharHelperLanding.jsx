import React from 'react';
import { 
  Monitor, 
  Terminal, 
  CheckCircle, 
  Download, 
  Users, 
  Library, 
  Edit3, 
  Search, 
  Copy, 
  Settings, 
  ChevronUp,
  Github
} from 'lucide-react';



const FloatingSymbol = ({ char, className }) => (
  <div className={`absolute opacity-10 font-black blur-[1px] select-none pointer-events-none ${className}`}>
    {char}
  </div>
);

export default function CharHelperLanding() {
  const mockSymbols = ["'text'", "`text` contrast", "@", "${txt}", "{txt}", "[txt]", "'", "\"", "´"];

  return (
    <div className="min-h-screen bg-[#0b1120] overflow-x-hidden font-sans">
      
      {/* --- SECCIÓN HERO --- */}
      <section className="w-full px-4 lg:px-20 py-12 lg:py-16 relative overflow-hidden">
        {/* Símbolos de Fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingSymbol char="@" className="top-1/4 left-1/4 text-8xl" />
          <FloatingSymbol char="{txt}" className="bottom-1/4 right-1/3 text-9xl blur-xs" />
          <FloatingSymbol char="'text'" className="top-1/2 right-1/4 text-7xl" />
          <FloatingSymbol char="[ ]" className="top-10 right-10 text-6xl blur-[3px]" />
          <FloatingSymbol char="` `" className="bottom-20 left-10 text-5xl blur-[2px]" />
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-12 items-center shadow-2xl border border-white/10 overflow-hidden">
       
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>

          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-green-400 text-xs font-bold rounded-full self-center lg:self-start border border-blue-500/30 uppercase tracking-widest">
              New Release v1.0.0
            </div>
            
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                All Symbols at <span className="text-blue-500">Your Fingertips</span>
              </h1>
              <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                Access your custom character sets, programming symbols, and shortcuts instantly on Windows and Linux. Custom symbols, fuzzy search, and one-click copy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {/* <button className="flex min-w-[220px] items-center justify-center gap-3 rounded-xl h-14 px-8 bg-blue-600 text-white text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-blue-500/30">
                <Monitor size={24} />
                <span>Download for Windows</span>
              </button> */}
              <a href='https://github.com/Yormenxx/SPECIAL-CHAR' target='_blank' className="flex min-w-[220px] items-center justify-center gap-3 rounded-xl h-14 px-8 bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold hover:bg-white/20 transition-all">
                <Terminal size={24} />
                <span >Download for Linux</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-400 text-sm italic">
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> 100% Open source</span>
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> Lightweight</span>
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500" /> Easy installation</span>
            </div>
          </div>

          {/* MOCKUP DE LA APP */}
          <div className="w-full lg:w-[440px] relative">
            <div className="bg-[#2b2b2b] rounded-lg shadow-2xl overflow-hidden flex flex-col border border-[#444444]">
              <div className="bg-[#3c3f41] px-3 py-1.5 flex items-center justify-between border-b border-black/20">
                <Settings size={14} className="text-gray-400" />
                <span className="text-gray-300 text-[11px] font-bold uppercase">Char Helper</span>
                <div className="flex gap-2 items-center">
                  <ChevronUp size={14} className="text-gray-400" />
                  <div className="size-2.5 rounded-full bg-gray-500/50"></div>
                  <div className="size-2.5 rounded-full bg-red-500/50"></div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="relative">
                  <input 
                    className="w-full bg-[#3c3f41] border border-[#555555] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none" 
                    placeholder="Buscar símbolo..." 
                    type="text"
                  />
                </div>
                <div className="text-center flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-500">Hecho por Jumacode</span>
                  <a className="text-[10px] text-blue-400 hover:underline flex items-center justify-center gap-1" href="#"><Github size={10}/> GitHub</a>
                </div>
                <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded text-sm font-bold transition-colors">
                  + Añadir Carácter
                </button>
                <div className="bg-[#1e1e1e] rounded p-3  overflow-y-auto">
                  <div className="grid grid-cols-3 gap-3">
                    {mockSymbols.map((s, i) => (
                      <div key={i} className="aspect-square bg-[#2d2d2d] rounded flex items-center justify-center text-white text-xs border border-white/5 hover:border-blue-500 cursor-pointer transition-all">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    
    </div>
  );
}