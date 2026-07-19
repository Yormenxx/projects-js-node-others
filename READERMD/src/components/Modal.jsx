import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
     
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
 
      <div className="relative bg-neutral-900 border border-neutral-800 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-500/10 rounded-full text-red-500">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-xl font-semibold text-white">¿Borrar contenido?</h2>
          </div>
          
          <p className="text-neutral-400 leading-relaxed mb-6">
            Esta acción eliminará todo el texto actual del editor. 
            Esta operación no se puede deshacer.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-700"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors shadow-lg shadow-red-900/20"
            >
              Sí, limpiar todo
            </button>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}