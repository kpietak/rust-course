import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: {
    default: 'Programowanie w języku Rust',
    template: 'Programowanie w języku Rust | %s'
  },
}
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = <Navbar logo={<b>Programowanie w języku Rust</b>} projectLink="https://github.com/kpietak/rust-course" />
const footer = (
  <Footer className="flex-col items-center md:items-start">
    Programowanie w języku Rust {new Date().getFullYear()}
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="pl"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          //banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kpietak/rust-course/tree/main"
          editLink=""
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          
          // ...Your additional theme config options
          feedback={{content: 'Zauważyłeś błąd, masz pomysł co poprawić - zgłoś propozycję!'}}

        >
          {children}
        </Layout>
      </body>
    </html>
  )
}