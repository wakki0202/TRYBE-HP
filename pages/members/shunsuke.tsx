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
            <Image src={`/AnyConv.com__shun.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>松下峻輔</h1>
              <h2 className='font-light text-xl'>Shunsuke Matsushita</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>プランナー</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。株式会社TRYBEメンバー。 企画を立案から実行まで行うプランナー。リスクマネジメント能力やコミュニケーション能力に長けており、現場のスピード感や温度感を汲み取りながら、リスクヘッジやモチベーション管理なども行う。面白そうなことに敏感で、まずはやってみる精神を持ち合わせており、すぐ企画・すぐリリースを徹底したプランニングとマネジメントを行う。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。2021年クリスマス、梅田にて「サンタ屋」の企画運営。「人狼コロシアム」、「アウトドアボードゲーム」の企画。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>TEL：070-6688-2583 / Email：s_matsushita@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed  font-bold'>TEL：070-6688-2583</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：s_matsushita@trybe.co.jp</p>
              <div className='flex '>

                <Link href={`https://twitter.com/chiken2583`}>
                  <a >
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faTwitter} width={20} />
                    </p>
                  </a>
                </Link>

                <Link href={`https://www.instagram.com/sm.chiken888/`}>
                  <a>
                    <p className='text-md pl-3 '>
                      <FontAwesomeIcon icon={faInstagram} width={20} />
                    </p>


                  </a>
                </Link>


              </div>
            </div>

          </div>
          <div className='text-center pb-20 text-xl font-bold'>
            <Link href={"/members/airi"} ><a >＜ BACK</a></Link>　|　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/yusei"}><a>NEXT ＞</a></Link>
          </div>

        </div>
      </main>


    </div>
  )
}

export default StatusPage
