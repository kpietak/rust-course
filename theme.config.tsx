import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Programowanie w języku Rust</span>,
  project: {
    link: 'https://github.com/kpietak/rust-course'
  },
  docsRepositoryBase: 'https://github.com/kpietak/rust-course/tree/main',
  editLink : {
    text: null
  },
  feedback: {
    content: 'Zauważyłeś błąd, masz pomysł co poprawić - zgłoś propozycję!'
  },
  footer: {
    text: 'Programowanie w języku Rust',
  },
}

export default config
