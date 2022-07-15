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
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>GAME PLANNER</h1>
            <Image src={`/hata.gif`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>畑野悠人</h1>
              <h2 className='font-light text-xl'>Haruto Hatano</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>ゲームプランナー</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。 「人狼コロシアム」や「アウトドアボードゲーム」などのボードゲーム・カードゲーム事業を担う。『人生没頭する』をテーマに、誰もが心の底からハマる遊びを日々研究中。自身がカードゲームが大好きであり、今まで遊び込んだ知識経験を活かし、新しい物を生み出していく。また自分の経験に驕らず、市場調査から顧客のリアルの声を汲み取り、ユーザーの目線に立った企画を行う。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>よさこい団体「飛舞人」の15代目代表。「人狼コロシアム」、「アウトドアボードゲーム」の企画。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：h_hatano@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：h_hatano@trybe.co.jp</p>
              <div className='flex '>

               

                <Link href={`https://www.instagram.com/haruhata2340/`}>
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
