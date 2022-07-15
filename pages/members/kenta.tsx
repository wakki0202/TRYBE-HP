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
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>CREATIVE DIRECTOR</h1>
            <Image src={`/AnyConv.com__ken.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>山本健太</h1>
              <h2 className='font-light text-xl'>Kenta Yamamoto</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>取締役/クリエイティブディレクター</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。株式会社TRYBE副代表。 『背景ある創作物に囲まれた生活を送る』を信条に、言葉による表現を得意とし、 企画とコピーライトの両論でクリエイティブディレクションを行う。広告にも取り組んでおり、日々SNS(主にInstagram)を通して、世の中に溢れた広告を読み解きより分かりやすく発信する「広告妄想論」を学生に発信している。また、多くの組織との接点となるマネージャーとしての一面も持つ。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>社会福祉法人「基弘会」のアイデアコンテストで、3kを学生×お年寄りで塗り替えるアイデアを企画し、優勝。LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。 大阪、東京で開催した「青春奪還作戦」の総合プロデューサー。「屋台プロジェクト」、「セキスイカルタ」、「Kids tech EXPO」、「ロボットストリート」の企画。東南アジア9都市をバックパックで一周。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>TEL：080-9608-6400 / Email：k_yamamoto@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed  font-bold'>TEL：080-9608-6400</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：k_yamamoto@trybe.co.jp</p>
              <div className='flex '>

                <Link href={`https://twitter.com/Buffowwky`}>
                  <a >
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faTwitter} width={20} />
                    </p>
                  </a>
                </Link>

                <Link href={`https://www.instagram.com/kenta.y.m/`}>
                  <a>
                    <p className='text-md pl-3 '>
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
