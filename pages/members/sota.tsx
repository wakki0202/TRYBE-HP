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
            <h1 className='text-2xl lg:text-5xl font-black pb-6'>DIRECTOR</h1>
            <Image src={`/AnyConv.com__ina.webp`} width={1300} height={750} alt="" className='' />

          </div>
          <div className='lg:flex pb-20 pt-3'>
            <div className='lg:w-4/12'>
              <h1 className='font-extrabold text-2xl'>稲田創太</h1>
              <h2 className='font-light text-xl'>Sota Inada</h2>
              <p className='pt-4 pb-8 lg:pb-0 lg:pt-8 text-sm font-bold'>取締役/ディレクター</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>2000年生まれ。株式会社TRYBE取締役。 イラスト、デザイン、写真、映像などのクリエイティブ業務の企画から編集まで一貫して行うディレクター。またエンタメ事業全体のディレクション、その他事業の企画立案、バックオフィス業務なども手がけ、枠やジャンルに収まらない役割を担う。学生が運営している他の組織・団体・法人との接点となり、マネージャーとしての役割も担っている。</p>
              <p className='text-xs lg:text-sm  leading-relaxed font-bold pb-6'>「関西大学フェスティバルin関西」のロゴコンペにて、ロゴ制作をディレクションし、優勝。アイデアコンペ「Evolve」で、会社クイズ採用システムからプロモーションを企画し、優勝。「屋台プロジェクト」、「サマーキャンパス」、「サンタ屋」の企画。「人狼コロシアム」、「アウトドアボードゲーム」、自社ブランディングのディレクション。「人狼コロシアム」「青春奪還作戦」のPVの企画、撮影、編集。</p>
              <p className='hidden lg:block text-xs  leading-relaxed pb-6 font-bold'>Email：s_inada@trybe.co.jp</p>
              <p className='lg:hidden text-xs  leading-relaxed pb-6 font-bold'>Email：s_inada@trybe.co.jp</p>
              <div className='flex '>

                <Link href={`https://twitter.com/inaaady1003`}>
                  <a >
                    <p className='text-md '>
                      <FontAwesomeIcon icon={faTwitter} width={20} />
                    </p>
                  </a>
                </Link>

                <Link href={`https://www.instagram.com/iinaady/`}>
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
            <Link href={"/members/kenta"} ><a >＜ BACK</a></Link>　|　<Link href={"/members"}><a>BACK TO LIST</a></Link>　|　<Link href={"/members/airi"}><a>NEXT ＞</a></Link>
          </div>

        </div>
      </main>


    </div>
  )
}

export default StatusPage
