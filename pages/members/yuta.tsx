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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-body bg-gray-100'>
        <div className='w-10/12 lg:w-8/12 m-auto'>
          <div className='text-center pt-20 w-full'>
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>Photographer</h1>
            <Image src={`/AnyConv.com__yuta.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>南湧太</h1>
              <h2 className='font-light text-xl'>Yuta Minami</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>カメラマン</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>1999年生まれ。TNK BASEシェアハウスの運営。 「No camera cameraman Yuta」の名で、写真撮影を中心に映像撮影・編集などのカメラマンとしての活動を主に行なっている。また建築学を活かした空間デザインや、リノベーション設計を中心に人と建物、人と街、人と人を繋ぐ建築プランナーを目指し日々活動している。TNK BASEでは空間設計やリノベーションとしての役割を担っている。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>中崎町にある古着屋moreの店舗設計。神戸の北野異人館のインテリアデザインやDIYを担当。「人狼コロシアム」special movieの撮影・編集・監督。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：y_minami@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：y_minami@trybe.co.jp</p>
              <div className='flex '>

            

                <Link href={`https://www.instagram.com/no_camera_cameraman_yuta/`}>
                  <a>
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faInstagram} width={20} />
                    </p>


                  </a>
                </Link>


              </div>
            </div>

          </div>
          <div className='text-center pb-20 text-sm lg:text-xl font-bold'>
            <Link href={"/members/haruto"} ><a >＜ BACK</a></Link>　|　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/taro"}><a>NEXT ＞</a></Link>
          </div>

        </div>
      </main>


    </div>
  )
}

export default StatusPage
