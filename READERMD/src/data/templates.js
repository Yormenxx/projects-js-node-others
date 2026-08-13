/**
 * Catálogo de plantillas disponibles en el modal de templates.
 * Para agregar una nueva plantilla, solo añade un objeto a este array.
 *
 * @typedef {Object} Template
 * @property {string} id - Identificador único
 * @property {string} name - Nombre visible del template
 * @property {string} description - Breve descripción (1 línea)
 * @property {string} content - Contenido markdown que se insertará en el editor
 */

export const templates = [
  {
    id: 'readme',
    name: 'README',
    description: 'Documentación estándar para un repositorio',
    content: `# Nombre del Proyecto

Breve descripción de qué hace tu proyecto y por qué es útil.

## Instalación

\`\`\`bash
npm install
npm run dev
\`\`\`

## Uso

\`\`\`js
import { algo } from 'mi-proyecto';
\`\`\`

## Características

- Feature uno
- Feature dos
- Feature tres

## Contribuir

Los pull requests son bienvenidos. Para cambios grandes, abre un issue primero.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
`,
  },
  {
    id: 'meeting-notes',
    name: 'Notas de Reunión',
    description: 'Estructura para minutas y acuerdos',
    content: `# Reunión: [Título]

**Fecha:** 
**Asistentes:** 

## Agenda

1. Punto uno
2. Punto dos

## Notas

- 

## Acuerdos

- [ ] Tarea asignada a — fecha límite

## Próximos pasos

- 
`,
  },
  {
    id: 'changelog',
    name: 'Changelog',
    description: 'Historial de versiones y cambios',
    content: `# Changelog

Todos los cambios notables de este proyecto se documentan aquí.

## [Sin publicar]

### Agregado
- 

### Corregido
- 

## [1.0.0] - 2026-01-01

### Agregado
- Lanzamiento inicial
`,
  },
  {
    id: 'blog-post',
    name: 'Artículo de Blog',
    description: 'Estructura para un post con introducción y cierre',
    content: `# Título del artículo

*Publicado el [fecha] · [tiempo] de lectura*

## Introducción

Engancha al lector en las primeras líneas.

## Desarrollo

### Subtema uno

Contenido...

### Subtema dos

Contenido...

## Conclusión

Cierra con una idea clara o un llamado a la acción.
`,
  },
  {
    id: 'study-notes',
    name: 'Apuntes de Estudio',
    description: 'Comandos, definiciones y ejemplos rápidos',
    content: `# Tema de estudio

\`comando\` -> qué hace

\`comando -flag\` -> qué hace la variante

Ejemplo: \`comando ejemplo\` -> resultado esperado

_Notas importantes o advertencias van así_

## Resumen

- Punto clave uno
- Punto clave dos
`,
  },
  {
    id: 'resume',
    name: 'CV / Resume',
    description: 'Currículum simple en formato markdown',
    content: `# Tu Nombre

correo@ejemplo.com · [LinkedIn](https://linkedin.com) · [GitHub](https://github.com)

## Experiencia

**Puesto** — Empresa (2024 - Presente)
- Logro o responsabilidad principal
- Otro logro medible

## Educación

**Título** — Institución (Año)

## Habilidades

\`JavaScript\` \`React\` \`Node.js\`
`,
  },
];