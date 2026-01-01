/* eslint-disable no-new-func */
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    // Support HTML with inline JavaScript and CSS
    html(code, ctx) {
      // Create container for iframe and console output
      const container = document.createElement('div')
      container.className = 'html-runner-container'
      container.style.display = 'flex'
      container.style.flexDirection = 'column'
      container.style.gap = '12px'

      // Create an iframe for isolated HTML rendering
      const iframe = document.createElement('iframe')
      iframe.className = 'html-runner'
      iframe.style.width = '100%'
      iframe.style.height = '400px'
      iframe.style.border = '1px solid #e5e7eb'
      iframe.style.borderRadius = '8px'
      iframe.style.backgroundColor = 'white'

      // Create console output area
      const consoleOutput = document.createElement('div')
      consoleOutput.className = 'html-console-output'
      consoleOutput.style.padding = '12px'
      consoleOutput.style.backgroundColor = '#1e1e1e'
      consoleOutput.style.color = '#d4d4d4'
      consoleOutput.style.fontFamily = 'monospace'
      consoleOutput.style.fontSize = '13px'
      consoleOutput.style.borderRadius = '8px'
      consoleOutput.style.maxHeight = '200px'
      consoleOutput.style.overflowY = 'auto'
      consoleOutput.style.display = 'none' // Hidden initially

      const logs = []

      // Helper to format console output
      const formatValue = (value) => {
        if (value === null) return 'null'
        if (value === undefined) return 'undefined'
        if (typeof value === 'string') return `"${value}"`
        if (typeof value === 'object') {
          try {
            return JSON.stringify(value, null, 2)
          } catch (e) {
            return String(value)
          }
        }
        return String(value)
      }

      const addLog = (type, args) => {
        const logEntry = document.createElement('div')
        logEntry.style.marginBottom = '4px'
        logEntry.style.paddingBottom = '4px'
        logEntry.style.borderBottom = '1px solid #333'

        const typeSpan = document.createElement('span')
        typeSpan.style.marginRight = '8px'
        typeSpan.style.fontWeight = 'bold'

        if (type === 'error') {
          typeSpan.style.color = '#f87171'
          typeSpan.textContent = '❌'
        } else if (type === 'warn') {
          typeSpan.style.color = '#fbbf24'
          typeSpan.textContent = '⚠️'
        } else {
          typeSpan.style.color = '#60a5fa'
          typeSpan.textContent = '▶'
        }

        const message = args.map(formatValue).join(' ')
        logEntry.appendChild(typeSpan)
        logEntry.appendChild(document.createTextNode(message))

        consoleOutput.appendChild(logEntry)
        consoleOutput.style.display = 'block'
      }

      // Wait for iframe to load before injecting content
      iframe.onload = () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
        const iframeWindow = iframe.contentWindow

        if (iframeDoc && iframeWindow) {
          // Intercept console methods in the iframe
          const originalConsole = {
            log: iframeWindow.console.log,
            error: iframeWindow.console.error,
            warn: iframeWindow.console.warn,
            info: iframeWindow.console.info,
          }

          iframeWindow.console.log = (...args) => {
            originalConsole.log.apply(iframeWindow.console, args)
            addLog('log', args)
          }

          iframeWindow.console.error = (...args) => {
            originalConsole.error.apply(iframeWindow.console, args)
            addLog('error', args)
          }

          iframeWindow.console.warn = (...args) => {
            originalConsole.warn.apply(iframeWindow.console, args)
            addLog('warn', args)
          }

          iframeWindow.console.info = (...args) => {
            originalConsole.info.apply(iframeWindow.console, args)
            addLog('log', args)
          }

          // Inject the HTML code
          iframeDoc.open()
          iframeDoc.write(code)
          iframeDoc.close()
        }
      }

      // Set a blank source to trigger onload
      iframe.src = 'about:blank'

      container.appendChild(iframe)
      container.appendChild(consoleOutput)

      return {
        element: container,
      }
    },
    // Support Vue SFC
    async vue(code) {
      const Vue = await import('vue')
      const { parse, compileScript } = await import('@vue/compiler-sfc')

      // Compile the script, note this demo does not handle Vue styles
      const sfc = parse(code)
      let scripts = compileScript(sfc.descriptor, {
        id: sfc.descriptor.filename,
        genDefaultAs: '__Component',
        inlineTemplate: true,
      }).content

      // console.log(scripts)
      // console.log(sfc)

      // Replace Vue imports to object destructuring
      // Only for simple demo, it doesn't work with imports from other packages
      scripts = scripts.replace(
        /import (\{[^}]+\}) from ['"]vue['"]/g,
        (_, imports) => `const ${imports.replace(/\sas\s/g, ':')} = Vue`,
      )
      scripts += '\nreturn __Component'

      // console.log(scripts)

      // Create function to evaluate the script and get the component
      // Note this is not sandboxed, it's NOT secure.
      const component = new Function(`return (Vue) => {${scripts}}`)()(Vue)

      // console.log(component)

      // Mount the component
      const app = Vue.createApp(component)
      const el = document.createElement('div')
      app.mount(el)

      return {
        element: el,
      }
    },
    async jsx(code) {
      const React = await import('react')
      const ReactDOM = await import('react-dom/client')
      const Babel = await import('@babel/standalone')

      const result = Babel.transform(code, {
        presets: ['react'],
      })

      let Component = new Function(`return (React) => ${result.code}`)()(React)
      let app = React.createElement(Component)
      const el = document.createElement('div')
      el.className = 'jsx-runner'

      // style
      el.style.width = '100%'
      el.style.height = '50vh'
      // el.style.minHeight = '400px';
      el.style.overflow = 'auto'

      ReactDOM.createRoot(el).render(app)

      return {
        element: el,
      }
    },
  }
})