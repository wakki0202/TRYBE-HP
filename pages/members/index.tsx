import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Members from '../../components/Members'
import Partners from '../../components/Partners'
import Member from '../../components/Member'
import Link from 'next/link'

const Home: NextPage = () => {
 
  return (
    <div>

      <main className='bg-gray-100'> 
        <div className='w-9/12 m-auto pb-14 '>
          <Members />
          <Partners />
        </div>
      </main>


    </div>
  )
}

export default Home
