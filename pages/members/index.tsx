import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Member from '../../components/Member'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='w-9/12 m-auto mb-14'>
          <h1 className='mt-24 mb-12 text-4xl font-bold text-center'>ALL MEMBER</h1>
        <ul className="  
 lg:grid lg:grid-cols-3 lg:flex-wrap">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </ul>
        </div>
      </main>


    </div>
  )
}

export default Home
