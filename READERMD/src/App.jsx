import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Header from './components/Header'
import MermaidChart from './components/MermaidChart';
import Toolbar from './components/Toolbar';
import FloatingActions from './components/FloatingActions';
import 'katex/dist/katex.min.css';

function App() {
  const [markdown, setMarkdown] = useState('# Hola mundo');
  const [syncEnabled, setSyncEnabled] = useState(false);
  const [fileName, setFileName] = useState('');

  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const activeSide = useRef(null);

  const handleScroll = (source, target) => {
    if (!syncEnabled || activeSide.current !== source) return;

    if (source.current && target.current) {
      const { scrollTop, scrollHeight, clientHeight } = source.current;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) return;

      const ratio = scrollTop / maxScroll;
      const targetMaxScroll = target.current.scrollHeight - target.current.clientHeight;


      target.current.scrollTop = Math.round(ratio * targetMaxScroll);
    }
  };



  const insertMarkdown = (prefix, suffix = '') => {
    const textarea = editorRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);


    const newText = `${before}${prefix}${selection}${suffix}${after}`;

    setMarkdown(newText);

    setTimeout((e) => {
      e.preventDefault();
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length
      );
    }, 0);
  };

  return (
    <>
      <Header
        markdown={markdown}
        setMarkdown={setMarkdown}
        syncEnabled={syncEnabled}
        setSyncEnabled={setSyncEnabled}
        fileName={fileName}
        setFileName={setFileName}
      />


      <main className="h-[calc(100vh-64px)] w-full bg-neutral-950 flex flex-col items-center justify-start overflow-hidden ">


        <div className="w-full h-full flex flex-col md:flex-row bg-neutral-900 rounded-lg shadow-2xl   overflow-hidden relative">


          <section className="flex-1 min-w-0 flex flex-col overflow-hidden">
            <Toolbar onInsert={insertMarkdown} />
            <textarea
              ref={editorRef}
              onMouseEnter={() => activeSide.current = editorRef}
              onScroll={() => handleScroll(editorRef, previewRef)}
              className="flex-1 w-full p-6 bg-transparent text-neutral-200 outline-none resize-none font-mono text-sm leading-relaxed overflow-y-auto"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              spellCheck="false"
            />

            <div className="shrink-0 bg-neutral-800/50 px-4 py-2 text-[10px] text-neutral-500 uppercase font-bold tracking-widest border-t border-neutral-800/50">
              Markdown Editor
            </div>
          </section>


          <section className="flex-1 min-w-0 flex flex-col bg-white overflow-hidden">
            <div
              ref={previewRef}
              onMouseEnter={() => activeSide.current = previewRef}
              onScroll={() => handleScroll(previewRef, editorRef)}
              className="flex-1 min-w-0 p-8 overflow-y-auto overflow-x-hidden scroll-smooth"
            >
              <article className="prose break-words max-w-none prose-sm md:prose-base prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:bg-neutral-100 prose-pre:text-neutral-900 prose-pre:border prose-pre:border-neutral-200 prose-code:bg-neutral-100 prose-code:text-pink-600 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    code({ inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      if (!inline && match && match[1] === 'mermaid') {
                        return <MermaidChart chart={String(children).replace(/\n$/, '')} />;
                      }
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              </article>
            </div>

            <div className="shrink-0 bg-neutral-100 px-4 py-2 text-[10px] text-neutral-600 uppercase font-bold tracking-widest border-t border-neutral-800/50">
              Preview
            </div>
          </section>
        </div>
      </main>

      <FloatingActions previewRef={previewRef}
        fileName={fileName}
         />
    </>
  );
}

export default App;