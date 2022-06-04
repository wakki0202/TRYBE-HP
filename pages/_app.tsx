import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import 'swiper/css/bundle'





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
