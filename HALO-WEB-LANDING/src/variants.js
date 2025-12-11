// Ejemplo de la función fadeIn en tu archivo variants.js
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            // ... (tu lógica para la dirección)
        },
        show: {
            // ... (tu lógica para la dirección)
            transition: {
                // Mejora la fluidez del movimiento
                type: "spring",
                stiffness: 150,
                damping: 18, 
                delay: delay,
                duration: 0.8, // Puedes ajustar esto
                ease: "easeOut",
            },
        },
    };
};