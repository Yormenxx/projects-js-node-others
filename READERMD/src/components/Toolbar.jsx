import { TOOLBAR_CONFIG } from '../constants/index';

const Toolbar = ({ onInsert }) => {
  return (
    <div className="flex items-center gap-1 p-2 bg-neutral-800/40 backdrop-blur-md overflow-auto">
      {TOOLBAR_CONFIG.map((item, index) => {
        if (item.type === 'divider') {
          return <div key={index} className="w-px h-6 bg-neutral-700 mx-1" />;
        }

   
        const Icon = item.icon;

        return (
          <button
            key={index}
            type="button" 
            onClick={(e) => {
              e.preventDefault(); 
              onInsert(item.prefix, item.suffix);
            }}
            title={item.label}
            className="p-2 cursor-pointer text-neutral-400 hover:text-white hover:bg-neutral-700 rounded-lg transition-all active:scale-90"
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;