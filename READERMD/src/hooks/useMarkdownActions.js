import { useState } from 'react';
import { saveAs } from 'file-saver';

export const useMarkdownActions = (markdown, setMarkdown,fileName) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
   
    const name = fileName.trim() || 'documento';
  
    const finalName = name.endsWith('.md') ? name : `${name}.md`;
    
    saveAs(blob, finalName);
  };

  const handleOpen = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsText(file, 'utf-8');
    fileReader.onload = () => {
      setMarkdown(fileReader.result);
      e.target.value = ""; 
    };
  };

  const handleClear = () => {
    setMarkdown('');
  };

  return { copied, handleCopy, handleSave, handleOpen, handleClear };
};