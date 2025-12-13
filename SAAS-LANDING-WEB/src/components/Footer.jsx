import { motion } from "framer-motion";
import { FOOTER_CONTENT } from "../constants";

// Variantes para el contenedor de la grilla (efecto cascada)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre columnas
      delayChildren: 0.1,
    },
  },
};

// Variantes para cada columna
const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Footer() {
  return (
    <footer className="mt-20 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
        
        {/* --- Grilla de Enlaces --- */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Se anima al ver el 10% del footer
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
        >
          {FOOTER_CONTENT.sections.map((item, index) => (
            <motion.div key={index} variants={columnVariants}>
              <h3 className="text-white font-semibold mb-4 text-lg tracking-tight">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 3, color: "#ffffff" }} // Desplazamiento sutil a la derecha y cambio a blanco
                      transition={{ duration: 0.2 }}
                      className="hover:text-white transition-colors duration-200 inline-block text-sm"
                    >
                      {link.text}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Barra Inferior (Copyright) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }} // Aparece un poco después de los enlaces
          className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs">
              <p>{FOOTER_CONTENT.platformsText}</p>
            </div>
            <div className="text-xs">
              <p>{FOOTER_CONTENT.copyrightText}</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
}

export default Footer;