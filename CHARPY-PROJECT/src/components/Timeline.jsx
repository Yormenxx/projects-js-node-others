import React from 'react'

const Timeline = ({ steps }) => (
  <div className="grid grid-cols-[40px_1fr] gap-x-2">
    {steps.map((step, index) => {
      
      // AQUÍ ESTÁ EL TRUCO: 
      // React necesita que los componentes empiecen con Mayúscula para reconocerlos como etiquetas
      const IconComponent = step.icon; 
      
      return (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#359EFF] flex items-center justify-center h-8 w-8 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/30">
              
              <IconComponent size={16} strokeWidth={2.5} />
              
            </div>
            {index !== steps.length - 1 && <div className="w-[1.5px] bg-[#3b4754] h-8 grow"></div>}
          </div>
          <div className="flex flex-1 flex-col py-3">
            <p className="text-white text-base font-medium leading-normal">{step.title}</p>
            <p className="text-[#9dabb9] text-sm">{step.desc}</p>
          </div>
        </React.Fragment>
      );
    })}
  </div>
);
export default Timeline
