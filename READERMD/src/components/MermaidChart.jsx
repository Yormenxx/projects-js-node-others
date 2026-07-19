import { useEffect, useState } from 'react';
import mermaid from 'mermaid';


mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

const MermaidChart = ({ chart }) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {

    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    
    try {
     
      mermaid.render(id, chart).then(({ svg }) => {
        setSvg(svg);
      });
    } catch (error) {
      console.error("Error al renderizar el diagrama:", error);
    }
  }, [chart]);

  return (
    <div 
      className="flex justify-center my-6 overflow-x-auto rounded-xl bg-neutral-800/20 p-4 border border-neutral-700/50 shadow-inner" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};

export default MermaidChart;