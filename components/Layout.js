// components/layout.js
import Headtag from './Head.js'
import Header from './Header.tsx'
import Footer from './Footer.js'

export default function Layout({ children }) {
  return (
    <>
      <Headtag />
      <Header />
      <main className='font-body '>{children}</main>
      <Footer />
    </>
  )
}

