import { useState } from 'react';
import { X, Check, FileText } from 'lucide-react';

/**
 * Modal de selección de plantillas.
 *
 * @param {boolean} isOpen
 * @param {() => void} onClose
 * @param {Array} templates - lista de { id, name, description, content }
 * @param {(content: string) => void} onApply - se llama con el contenido del template elegido
 * @param {boolean} hasExistingContent - si el editor ya tiene contenido, para advertir reemplazo
 */
export default function TemplatesModal({ isOpen, onClose, templates, onApply, hasExistingContent }) {
  const [selectedId, setSelectedId] = useState(null);

  if (!isOpen) return null;

  const selectedTemplate = templates.find((t) => t.id === selectedId);

  const handleAccept = () => {
    if (!selectedTemplate) return;
    onApply(selectedTemplate.content);
    setSelectedId(null);
    onClose();
  };

  const handleClose = () => {
    setSelectedId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div>
            <h2 className="text-white font-semibold text-lg">Elige una plantilla</h2>
            <p className="text-neutral-500 text-xs mt-0.5">Selecciona un template para empezar</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Grid de templates */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {templates.map((template) => {
            const isSelected = template.id === selectedId;
            const preview = template.content.trim().slice(0, 140);

            return (
              <button
                key={template.id}
                onClick={() => setSelectedId(template.id)}
                className={`text-left rounded-lg border p-4 transition-all cursor-pointer group ${
                  isSelected
                    ? 'border-cyan-400/60 bg-cyan-400/5 ring-1 ring-cyan-400/40'
                    : 'border-neutral-800 bg-neutral-800/40 hover:border-neutral-700 hover:bg-neutral-800/70'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className={isSelected ? 'text-cyan-400' : 'text-neutral-500'} />
                    <span className="text-sm font-medium text-white">{template.name}</span>
                  </div>
                  {isSelected && (
                    <div className="shrink-0 w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center">
                      <Check size={11} className="text-neutral-900" strokeWidth={3} />
                    </div>
                  )}
                </div>

                <p className="text-neutral-500 text-xs mb-3">{template.description}</p>

                <pre className="text-[10px] leading-snug font-mono text-neutral-400 bg-neutral-950/60 rounded-md p-2.5 overflow-hidden whitespace-pre-wrap line-clamp-5 border border-neutral-800/60">
{preview}
                </pre>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-neutral-800">
          <p className="text-[11px] text-amber-500/80">
            {hasExistingContent && selectedTemplate
              ? 'Esto reemplazará el contenido actual del editor.'
              : ''}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleAccept}
              disabled={!selectedTemplate}
              className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-green-400 to-cyan-300 text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:opacity-90 transition-opacity"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}