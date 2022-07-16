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
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>Video Planner</h1>
            <Image src={`/AnyConv.com__juri.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>藤本樹林</h1>
              <h2 className='font-light text-xl'>Jurin Fujimoto</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>映像プランナー</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。映像制作団体fulfilMの代表。 『主人公になりやがれ』というfulfilMの理念のもと、若者が一歩目を踏み出すきっかけの一つになるような映像制作を行っている。また、大阪府堺市を中心としたまちづくりや、学生を応援する雑誌制作、イベント企画などにも取り組んでいる。Instagram運用のコンサルなども行い、若者向けに映像を中心とした事業を展開している。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>映像イベント「The shooting Day」企画運営。「人狼コロシアム」、「青春奪還作戦」の公式PVの企画・監督。「高校生百貨店」企画。映像作品のTikTok総再生回数は100万回を超える。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：jjsoccer1006@gmail.com</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：jjsoccer1006@gmail.com</p>
              <div className='flex '>

                <Link href={`https://twitter.com/jurin_j`}>
                  <a >
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faTwitter} width={20} />
                    </p>
                  </a>
                </Link>

                <Link href={`https://www.instagram.com/jurin_jj/`}>
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
            <Link href={"/members/taro"} ><a >＜ BACK</a></Link>　|　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/yutaka"}><a>NEXT ＞</a></Link>
          </div>
        </div>
      </main>


    </div>
  )
}

export default StatusPage
