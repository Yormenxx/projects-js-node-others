import { useState, useEffect } from 'react';
import {
  Copy, Save, FolderOpen, Check, Link as LinkIcon,
  Unlink, Trash2, FileText, Menu, X
} from 'lucide-react';
import { useMarkdownActions } from '../hooks/useMarkdownActions';
import ConfirmModal from './Modal';

export default function Header({ markdown, setMarkdown, syncEnabled, setSyncEnabled, fileName, setFileName }) {
  const { handleCopy, handleSave, handleOpen, handleClear } = useMarkdownActions(markdown, setMarkdown, fileName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await handleCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>

      <div>
        <header className="h-18 bg-neutral-900 border-b border-neutral-800 flex items-center justify-evenly space-x-2 md:justify-between px-4 text-white z-40 relative">

       
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-neutral-800 rounded-md text-neutral-400"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-300 rounded flex items-center justify-center font-bold">M↓</div>
              <h1 className="font-semibold hidden lg:block">Markdown Live Editor</h1>
            </div>
          </div>

          
          <div className="flex-1 max-w-65 sm:max-w-md flex items-center gap-2 bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-neutral-700">
            <FileText size={16} className="text-neutral-500 hidden sm:block" />
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-transparent border-none outline-none text-xs w-full text-neutral-200 font-mono"
              placeholder='nombre-del-archivo'
            />
            <span className="text-neutral-600 text-xs font-mono hidden sm:block">.md</span>
          </div>

        
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setSyncEnabled(!syncEnabled)} title="Sincronizar"
              className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-md text-xs font-medium transition-all ${syncEnabled ? 'bg-blue-600/20 text-blue-400 border border-blue-600/50' : 'bg-neutral-800 text-neutral-500 border border-neutral-700'
                }`}
            >
              {syncEnabled ? <LinkIcon size={14} /> : <Unlink size={14} />}
              <span >Sincronizado</span>
            </button>

            <div className="h-6 w-px bg-neutral-700 mx-1" />

            <div className="flex items-center gap-1">
              <label className="p-2 hover:bg-neutral-800 rounded-md cursor-pointer text-neutral-400 hover:text-white" title="Abrir">
                <FolderOpen size={18} />
                <input type="file" accept=".md,.txt" onChange={handleOpen} className="hidden" />
              </label>

              <button onClick={onCopy} title='Copiar Md' className="p-2 hover:bg-neutral-800 cursor-pointer rounded-md text-neutral-400 hover:text-white">
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>

              <button onClick={handleSave} title='Guardar Md' className="p-2 cursor-pointer hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white">
                <Save size={18} />
              </button>

              <button
                onClick={() => setIsModalOpen(true)} title='Borrar Md'
                className="p-2 hover:bg-red-900/30 rounded-md cursor-pointer text-neutral-400 hover:text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </header>

       
        {isSidebarOpen && (
          <>
           
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            <div className="fixed top-0 left-0 h-screen w-64 bg-neutral-900 z-50 p-6 border-r border-neutral-800 flex flex-col md:hidden transition-all">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-300 rounded flex items-center justify-center text-[10px] font-bold">M↓</div>
                  <span className="font-bold text-sm">Menu</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="text-neutral-500 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Ajustes</p>
                <button
                  onClick={() => setSyncEnabled(!syncEnabled)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${syncEnabled ? 'bg-blue-600/10 border-blue-600/30 text-blue-400' : 'bg-neutral-800 border-neutral-700 text-neutral-400'
                    }`}
                >
                  <span className="text-sm font-medium">Sincronización</span>
                  {syncEnabled ? <LinkIcon size={16} /> : <Unlink size={16} />}
                </button>

                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mt-4">Acciones de Archivo</p>

                <button
                  onClick={onCopy}
                  className="flex items-center gap-3 p-3 text-neutral-400 hover:bg-neutral-800 active:bg-neutral-800 rounded-lg transition-colors w-full group"
                >
                  <div className="shrink-0 w-5 flex justify-center">
                    {copied ? (
                      <Check size={18} className="text-green-500 animate-in zoom-in duration-200" />
                    ) : (
                      <Copy size={18} className="group-active:scale-90 transition-transform" />
                    )}
                  </div>
                  <span className={`text-sm ${copied ? 'text-green-500' : ''}`}>
                    {copied ? '¡Copiado!' : 'Copiar Contenido'}
                  </span>
                </button>

                <div className=" gap-3  text-neutral-400 hover:bg-neutral-800 active:bg-neutral-800 rounded-lg transition-colors w-full group">
                  <label className="flex items-center gap-3 p-3 text-neutral-400 hover:bg-neutral-800 active:bg-neutral-800 rounded-lg transition-colors w-full group" title="Abrir">

                    <FolderOpen size={18} />

                    <input type="file" accept=".md,.txt" onChange={handleOpen} className="hidden" />

                    <span className="text-sm">Abrir documento </span>

                  </label>
                </div>



                <button
                  onClick={handleSave}
                  className="flex items-center gap-3 p-3 text-neutral-400 hover:bg-neutral-800 active:bg-neutral-800 rounded-lg transition-colors w-full group"
                >
                  <div className="shrink-0 w-5 flex justify-center">
                    <Save size={18} className="group-active:scale-90 transition-transform" />
                  </div>
                  <span className="text-sm">Guardar Documento</span>
                </button>

                <button
                  onClick={() => { setIsSidebarOpen(false); setIsModalOpen(true); }}
                  className="flex items-center gap-3 p-3 text-neutral-400 hover:bg-red-900/20 hover:text-red-500 rounded-lg"
                >
                  <Trash2 size={18} />
                  <span className="text-sm">Borrar Todo</span>
                </button>
              </nav>
            </div>
          </>
        )}

        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleClear}
        />
      </div>

    </>
  );
}