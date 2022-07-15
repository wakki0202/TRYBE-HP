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
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>PLANNER</h1>
            <Image src={`/hata.gif`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>中島秀時</h1>
              <h2 className='font-light text-xl'>Hidetoki Nakajima</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>プランナー</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2002年生まれ。学生キャリア支援団体SONIA代表。 高校生を中心とした若者に対して企画立案を行うプランナー。自身では「ビジョンプロジェクト」という、進路に悩む高校生に対して、交流やロールモデル、トークセッションができる3ヶ月間のオンラインプログラムを運営している。他にも多くのオンラインイベントの企画や、リアルイベントのワークショップの企画運営などを手掛けてきた。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>iU主催ピッチコンテスト「デモデイ」優勝。フジテレビ公式YouTube「シゴトズキ」動画企画。東京「青春奪還作戦」企画運営。「HANEDA STEAM LAB」運営。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：h_nakajima@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：h_nakajima@trybe.co.jp</p>
              <div className='flex '>



                <Link href={`https://www.instagram.com/hide_1204/`}>
                  <a>
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faInstagram} width={20} />
                    </p>


                  </a>
                </Link>


              </div>
            </div>

          </div>

        </div>
      </main>


    </div>
  )
}

export default StatusPage
