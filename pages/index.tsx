import type { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import styles from '../styles/Home.module.css'
import Pertoner from '../components/Pertoner.js';
import Contactbtn from '../components/Contactbtn';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TRYBE.inc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-gray-700'>
        <div id='firstView' className='w-full'>
          <video 
            loop
            muted
            autoPlay
            style={{
              width: "100%",
            }}>
            <source src={"C0129.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className='w-9/12 m-auto font-gothic mt-20'>
          <div className='flex'>
            <div className='w-4/12'><h1 className='text-2xl font-bold'>WHO WE ARE</h1></div>
            <div className='w-8/12'><h1 className='text-2xl font-bold mb-2'>『TRYBE Inc.は学生起業である。』</h1>
              <p className='line-relaxed'>
                2020年12月、関西の6大学の学生が集まり起業しました。 プロジェクトメンバーには多様な学生を巻き込み、 関西だけでなく、関東にも活動の幅を広げています。</p>
              <h1 className='text-2xl font-bold mb-2 mt-8'>『TRYBE Inc.は学生企業である。』</h1>
              <p className='line-relaxed'>
                私たちは学生のリアルタイムにコミットした企業です。 学生にわかりやすくタメになる「教育」事業と、 学生がおもしろくたのしめる「クリエイティブ」事業と、 学生に求められる「ブランディング」事業を提供しています。</p></div>
          </div>
          <div className='flex mt-20'>
            <div className='w-4/12'><h1 className='text-2xl font-bold'>OUR SERVICE</h1></div>
            <div className='w-8/12'>
              
              <h1 className='text-2xl font-bold mb-5 '>
                <span className='border-b-2 border-black'>教育</span>
              </h1>
              <p className='line-relaxed'>
                クリエイティブの力で、社会のあらゆる変化と挑戦を推進していく。 GOは、広告領域に留まらず事業全体をクリエイティブの力で成長・進化していきます。 売上や企業価値だけでなく、事業を通して社会・顧客・生活者の幸福を追求します。
              </p>
              
              <h1 className='text-2xl font-bold mb-5 mt-8'>
                <span className='border-b-2 border-black'>クリエイティブ</span>
              </h1>
              <p className='line-relaxed'>
                クリエイティブの力で、社会のあらゆる変化と挑戦を推進していく。 GOは、広告領域に留まらず事業全体をクリエイティブの力で成長・進化していきます。 売上や企業価値だけでなく、事業を通して社会・顧客・生活者の幸福を追求します。
              </p>

              <h1 className='text-2xl font-bold mb-5 mt-8'>
                <span className='border-b-2 border-black'>ブランディング</span>
              </h1>
              <p className='line-relaxed'>
                クリエイティブの力で、社会のあらゆる変化と挑戦を推進していく。 GOは、広告領域に留まらず事業全体をクリエイティブの力で成長・進化していきます。 売上や企業価値だけでなく、事業を通して社会・顧客・生活者の幸福を追求します。
              </p>
            
            </div>
          </div>

          <div className=' mt-40 '>
            <h1 className='text-2xl font-bold mb-6 '>PROJECTS</h1>
              <div className='flex'>
                <div className='w-6/12 '>
                <Img src="/AnyConv.com__IMG_6691.webp" alt="" width={500} height={300} className="hover:opacity-50" />
                  <h3 className='text-lg font-bold'>人狼コロシアム</h3>
                  <p className='text-sm'>高校の休み時間を取り戻すために 生まれたボードゲーム</p>
                </div>
                <div className='w-6/12 '>
                <Img src="/AnyConv.com__IMG_0164.webp" alt="" width={500} height={300} className="hover:opacity-50"/>
                  <h3 className='text-lg font-bold'>青春奪還作戦</h3>
                  <p className='text-sm'>高校を舞台にした全国キャリアイベント</p>
                </div>
              </div>
            
              <div className='flex mt-14'>
                <div className='w-6/12 '>
                <Img src="/DSC02957.JPG" alt="" width={500} height={300} className="hover:opacity-50"/>
                  <h3 className='text-lg font-bold'>屋台プロジェクト</h3>
                <p className='text-sm'>あたたかいを届ける屋台</p>
                </div>
                <div className='w-6/12 '>
                <Img src="/AnyConv.com__S__6185130.webp" alt="" width={500} height={300} className="hover:opacity-50"/>
                  <h3 className='text-lg font-bold'>サンタ屋</h3>
                <p className='text-sm'>みんなが幸せなクリスマスを</p>
                </div>
              </div>
            <div className='text-center p-3 mt-12'>
              <Link href={"projects"}><a className='border border-black  py-3 px-14 hover:bg-black hover:text-white duration-200'>All Project ＞</a></Link>
              </div>
          </div>
          <div className=' mt-40'>
            <h1 className='text-2xl font-bold mb-6'>OUR CLIENTS</h1>
            <Pertoner />
          </div>
          <div className=' mt-40 text-center mb-20'>
            <h1 className='text-2xl font-bold text-left mb-8'>CONTACT</h1>
            <Contactbtn />
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
