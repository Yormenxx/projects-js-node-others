import { useTextStats } from '../hooks/Usetextstats';


export default function WordCounter({ markdown }) {
  const { words, characters, sizeFormatted } = useTextStats(markdown);

  return (
    <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-neutral-500">
      <span>{words} palabras</span>
      <span className="text-neutral-700">·</span>
      <span>{characters} caracteres</span>
      <span className="text-neutral-700">·</span>
      <span>{sizeFormatted}</span>
    </div>
  );
}