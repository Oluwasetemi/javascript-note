export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
}

export const entries: ChangelogEntry[] = [
  {
    version: 'v3.1',
    date: '2026-05-04',
    changes: [
      'Added /playground route with embedded JS/TS playground',
      'Added /changelog and /routes custom pages',
      'Implemented missing objects.md sections (methods, constructors, optional chaining, symbols, property flags, getters/setters)',
      'Performance: shared Monaco ts.worker, overviewSnapshots disabled, monacoTypesIgnoreDefaults enabled',
      'All 305 monaco-run blocks now have autorun: false',
    ],
  },
  {
    version: 'v3.0',
    date: '2025-09-01',
    changes: [
      'Added iframe-lazy layout for embedded playground demos',
      'Updated beyond-beginner, document, events and ui-events pages',
      'Improved slide layout and dependency updates',
    ],
  },
  {
    version: 'v2.0',
    date: '2025-01-01',
    changes: [
      'Added web-components, regular-expressions, and network-requests sections',
      'Added beyond-beginner section covering advanced topics',
      'Custom HTML, Vue, and JSX code runners with live execution',
      'Monaco editor integration for interactive coding',
    ],
  },
  {
    version: 'v1.0',
    date: '2024-01-01',
    changes: [
      'Initial JavaScript class notes for AltSchool Africa',
      'Fundamentals, data types, functions, objects, prototypes',
      'Error handling, promises, modules, DOM, events',
    ],
  },
]
