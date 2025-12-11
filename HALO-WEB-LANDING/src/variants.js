
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            
        },
        show: {
           
            transition: {
                
                type: "spring",
                stiffness: 150,
                damping: 18, 
                delay: delay,
                duration: 0.8, 
                ease: "easeOut",
            },
        },
    };
};