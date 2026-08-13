import { useMemo } from 'react';

/**
 * Hook que calcula estadísticas de un texto markdown en tiempo real.
 * @param {string} text - Contenido markdown actual
 * @returns {{ words: number, characters: number, charactersNoSpaces: number, sizeInBytes: number, sizeFormatted: string }}
 */
export function useTextStats(text = '') {
  return useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;

    const bytes = new Blob([text]).size;
    const sizeFormatted = formatBytes(bytes);

    return {
      words,
      characters,
      charactersNoSpaces,
      sizeInBytes: bytes,
      sizeFormatted,
    };
  }, [text]);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}