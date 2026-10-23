import { defineConfig } from 'vitepress'
import wikilinks from 'markdown-it-wikilinks'

export default defineConfig({
  title: "An eclectic collection for no one in particular",
  appearance: 'light',
  themeConfig: {
    logo: '/images/dahu-logo.svg',
    nav: [],
    docFooter: { prev: false, next: false},
    footer: {message: `<a href="https://librecounter.org/referer/show"><img src="https://librecounter.org/counter.svg" referrerpolicy="unsafe-url" alt="Logo for librecounter" style="height: 15px;"></a>`},
    outline: { level: 'deep', label: 'Contents' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dahu-Dev' }
    ]
  },
  
  markdown: {
    config: (md) => {
      md.use(wikilinks({ 
        baseURL: '/posts/',
        makeAllLinksAbsolute: true,
        uriSuffix: '',
        postProcessPageName: (pageName) => {
          return pageName.trim().replace(/\.md$/, '')
        }
      }))
    }
  }
})
