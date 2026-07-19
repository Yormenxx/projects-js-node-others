import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, FileText, Download } from 'lucide-react';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

const FloatingActions = ({ previewRef, fileName}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);


  

    const exportToPDF = async () => {
        const element = previewRef.current;
        if (!element || isExporting) return;

        setIsExporting(true);
        const originalOverflow = element.style.overflow;
        const originalHeight = element.style.height;

        try {
            element.style.overflow = 'visible';
            element.style.height = 'auto';

            const dataUrl = await toJpeg(element, {
                quality: 0.95,
                pixelRatio: 2,
                backgroundColor: '#fff',
            });

            element.style.overflow = originalOverflow;
            element.style.height = originalHeight;


            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgProps = pdf.getImageProperties(dataUrl);
            const imgScaledHeight = (imgProps.height * pdfWidth) / imgProps.width;

            let heightLeft = imgScaledHeight;
            let position = 0;


            pdf.addImage(dataUrl, 'JPEG', 0, position, pdfWidth, imgScaledHeight);
            heightLeft -= pdfHeight;


            while (heightLeft > 0) {
                position = heightLeft - imgScaledHeight;
                pdf.addPage();
                pdf.addImage(dataUrl, 'JPEG', 0, position, pdfWidth, imgScaledHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`${fileName || 'documento'}.pdf`);

        } catch (error) {
            console.error("Error al exportar:", error);
            element.style.overflow = originalOverflow;
            element.style.height = originalHeight;
        } finally {
            setIsExporting(false);
        }



    };
    const subButtons = [
        { id: 1, icon: <FileText size={20} />, label: isExporting ? 'Generando...' : 'Exportar PDF Completo', action: exportToPDF },
        // { id: 2, icon: <Download size={20} />, label: 'Descargar Markdown', action: downloadMarkdown },
    ];

    return (
        <div className=" fixed bottom-8 right-8 flex flex-col-reverse items-center gap-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}

                disabled={isExporting}
                className={`w-14 h-14 rounded-full cursor-pointer shadow-xl flex items-center justify-center transition-transform active:scale-90 hover:scale-105 ${isExporting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-white text-neutral-900'}`}
            >
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus size={28} strokeWidth={3} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && !isExporting && (
                    <div className="flex flex-col gap-3 mb-2">
                        {subButtons.map((btn, index) => (
                            <motion.button
                                key={btn.id}
                                onClick={() => {
                                    btn.action();

                                    if (btn.id !== 1) setIsOpen(false);
                                }}
                                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                                transition={{ delay: index * 0.05 }}
                                title={btn.label}
                                className="w-12 cursor-pointer h-12 bg-neutral-800 text-white border border-neutral-700 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                                {btn.icon}
                            </motion.button>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;