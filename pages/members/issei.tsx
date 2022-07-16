import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import "remixicon/fonts/remixicon.css";
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

type StatusPageProps = { name: string }



const StatusPage: NextPage<StatusPageProps> = (props) => {



  const router = useRouter();

  return (
    <div className=''>

      <main className='font-body bg-gray-100'>
        <div className='w-10/12 lg:w-8/12 m-auto'>
          <div className='text-center pt-20 w-full'>
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>PLANNER</h1>
            <Image src={`/AnyConv.com__dai.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>河内壱成</h1>
              <h2 className='font-light text-xl'>Issei Kawachi</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>プランナー</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。 客観的なクリティカルシンキングを持つプランナー。話に入り込みすぎないスタンスで常に客観視した意見を持ち合わせ、かつ芸術やアートなどの創作物に日々囲まれ、独自の感性を備えているため、批判的だがどこか真新しいようなアイデアを生み出すことができる。現在は就職活動中。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>寺でカプレーゼを作る「寺カプレーゼ」の主催。「青春奪還作戦」企画。 センター試験世界史満点。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：i_kawachi@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：i_kawachi@trybe.co.jp</p>
              <div className='flex '>

                <Link href={`https://twitter.com/dpfkp825`}>
                  <a >
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faTwitter} width={20} />
                    </p>
                  </a>
                </Link>

                <Link href={`https://www.instagram.com/dpfkp1/`}>
                  <a>
                    <p className='text-md pl-3 '>
                      <FontAwesomeIcon icon={faInstagram} width={20} />
                    </p>


                  </a>
                </Link>


              </div>
            </div>

          </div>
          <div className='text-center pb-20 text-sm lg:text-xl font-bold'>
            <Link href={"/members/yutaka"} ><a >＜ BACK</a></Link>　|　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/taiki"}><a>NEXT ＞</a></Link>
          </div>

        </div>
      </main>


    </div>
  )
}

export default StatusPage
