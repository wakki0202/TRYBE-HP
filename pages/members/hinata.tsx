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
            <h1 className='text-3xl lg:text-5xl font-black pb-6'>CEO</h1>
            <Image src={`/AnyConv.com__hinata.webp`} width={1300} height={750} alt="" className='' />
            

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>山口陽</h1>
              <h2 className='font-light text-xl'>Hinata Yamaguchi</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>代表/企画屋</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。株式会社TRYBE代表。 高校時代に企画したカードゲーム「人狼コロシアム」を、クラウドファンディングサイトCAMP FIREにて196万円の資金調達を機に、大学在学中に株式会社TRYBEを設立。小学生の頃から、たくさんのゲームや遊びを開発してきた経験をもとに、「遊びごころ」と「ユーモア」溢れる企画を立案する企画屋。学生のリアルに寄り添い、学生の今にコミットする企画を得意とする。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>株式会社インシーク主催「Intelligent Challenge」でヒッチハイクの民主化をテーマにした企画でアイデア賞。LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。アイデアコンペ「Evolve」で、会社クイズ採用システムからプロモーションを企画し、優勝。クラウドファンディングコンサルタントで4度の成功実績。「クリエイティブスクール」の企画・運営。関西大学「起業部」発起人。「セキスイカルタ」の企画。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>TEL：080-6103-9185 / Email：h_yamaguchi@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed  font-bold'>TEL：080-6103-9185</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：h_yamaguchi@trybe.co.jp</p>
               <div className='flex'>
                  <Link href={`https://twitter.com/hinata_1215_`}>
                    <a>
                      <p className='text-md '>
                        <FontAwesomeIcon icon={faTwitter} width={20} />
                      </p>
                    </a>
                  </Link>
                  <Link href={`https://www.instagram.com/h_ntiaa/`}>
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
            <Link href={"/members/kenta"} className={"hidden"}><a className='hidden'>＜ BACK　｜</a></Link>　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/kenta"}><a>NEXT ＞</a></Link>
          </div>
        </div>
      </main>


    </div>
  )
}

export default StatusPage
