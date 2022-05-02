// components/layout.js
import Headtag from './Head.js'
import Header from './Header.js'
import Footer from './Footer.js'

export default function Layout({ children }) {
  return (
    <>
      <Headtag />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}