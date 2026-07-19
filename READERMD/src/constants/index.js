
import { 
  Bold, Italic, Heading1, Heading2, Heading3, Heading4, Heading5, 
  List, Quote, Code, Sigma, SquareTerminal, Link, Underline 
} from 'lucide-react';

export const TOOLBAR_CONFIG = [
  { type: 'action', icon: Heading1, label: 'Título 1', prefix: '# ', suffix: '' },
  { type: 'action', icon: Heading2, label: 'Título 2', prefix: '## ', suffix: '' },
  { type: 'action', icon: Heading3, label: 'Título 3', prefix: '### ', suffix: '' },
  { type: 'action', icon: Heading4, label: 'Título 4', prefix: '#### ', suffix: '' },
  { type: 'action', icon: Heading5, label: 'Título 5', prefix: '##### ', suffix: '' },
  { type: 'action', icon: Bold, label: 'Negrita', prefix: '**', suffix: '**' },
  { type: 'action', icon: Italic, label: 'Cursiva', prefix: '_', suffix: '_' },
  { type: 'action', icon: Underline, label: 'Subrayado', prefix: '<u>', suffix: '</u>' },
  { type: 'divider' },
  { type: 'action', icon: List, label: 'Lista', prefix: '- ', suffix: '' },
  { type: 'action', icon: Quote, label: 'Cita', prefix: '> ', suffix: '' },
  { type: 'action', icon: Link, label: 'Enlace', prefix: '[', suffix: '](https://)' },
  { type: 'divider' },
  { type: 'action', icon: Code, label: 'Código', prefix: '```\n', suffix: '\n```' },
  { type: 'action', icon: Sigma, label: 'Mate (KaTeX)', prefix: '$$', suffix: '$$' },
  { type: 'action', icon: SquareTerminal, label: 'Mermaid', prefix: '```mermaid\ngraph TD\n  A --> B\n```', suffix: '' },
];