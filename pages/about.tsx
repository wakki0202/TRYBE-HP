import type { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import Pertoner from '../components/Pertoner.js';
import Contactbtn from '../components/Contactbtn.js';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div className='w-9/12 m-auto font-gothic'>
          <h1 className='text-6xl font-bold my-16 leading-relaxed'>THE STUDENT
            <br  />COMPANY</h1>
          
          <p className='text-2xl  leading-relaxed font-semibold'>
            『TRYBE Inc.は学生起業である。』
          </p>
          <p className='text-xl mt-2 mb-8 leading-relaxed font-medium'>
            2020年12月、関西の6大学の学生が集まり起業しました。 プロジェクトメンバーには多様な学生を巻き込み、 関西だけでなく、関東にも活動の幅を広げています。
          </p>
          <p className='text-2xl  leading-relaxed font-semibold'>
            『TRYBE Inc.は学生企業である。』
          </p>
          <p className='text-xl mt-2 mb-8 leading-relaxed font-medium'>
            私たちは学生のリアルタイムにコミットした企業です。 学生にわかりやすくためになる「教育」事業と、 学生がおもしろくたのしめる「エンタメ」事業と、 学生に求められる「ブランディング」事業を提供しています。
          </p>
          <div className='flex mt-20'>
            <div className='w-7/12 text-md'>
              <p className='mb-7'>
                自分のやりたいことは、やればいいってこと 自分の好きなことは、やればいいってこと そして、そんなこと言われなくても分かってるってこと。</p>

              <p className='mb-7'>大丈夫。ちゃんと伝わってる。</p>

              <p className='mb-7'>ただ、辞める理由がこの世には多すぎるんだよね。 お金・進路・家族の意見・周りからの評価。できなくなる理由があまりにも多いんだよね。</p>

              <p className='mb-7'>めちゃくちゃ分かってる。</p>

              <p className='mb-7'>ただ、もし、君が、「本当に好きなことをやりたいなら」</p>

              <p className='mb-7'>君がそれを望むなら、 君がそれを喜んでくれるのなら、 君の一日、いや一時間を僕たちに預けてほしい。</p>

              <p className='mb-7'>君の「好き」ができなくなる その理由を、僕たちが全力でぶっ潰します。</p >

              <p>『好きなことを好きだと言える社会へ』</p>
            </div>
            <div className='w-5/12'>
              <Img src="/AnyConv.com__threeValue.webp" width={850} height={700}></Img>
            </div>
          </div>
            <div className='mt-20'>
              <h1 className='text-center text-3xl'>Profile</h1>
            <table className='w-10/12 m-auto mt-10'>
                <tr className='py-5'>
                <th className='border-b-2 border-black py-4'>会社名</th>
                <td className='text-center border-b border-red'>TRYBE Inc.（株式会社トライブ）</td>
              </tr>
              
              <tr className=''>
                <th className='border-b-2 border-black py-4'>設立</th>
                <td className='text-center border-b border-red'>2020/12/01</td>
              </tr>
              
              <tr className=''>
                <th className='border-b-2 border-black py-4'>役員</th>
                <td className='text-center border-b border-red'>山口陽,山本健太,稲田創太,戸澤愛梨</td>
              </tr>
              
              <tr className=''>
                <th className='border-b-2 border-black py-4'>資本金</th>
                <td className='text-center border-b border-red'>50万円</td>
              </tr>
              
              <tr className=''>
                <th className='border-b-2 border-black py-4'>Mail</th>
                <td className='text-center border-b border-red'>info@trybe.co.jp</td>
              </tr>

              <tr className='py-4'>
                <th className='border-b-2 border-black'>TEL</th>
                <td className='text-center border-b border-red  py-4'>08061039185</td>
              </tr>

              <tr className=''>
                <th className='border-b-2 border-black py-4'>アクセス</th>
                <td className='text-center border-b border-red'> 〒577-0027 大阪府東大阪市新家中町5-29 TNK base </td>
              </tr>
              
              </table>
          </div>
          <div className='mt-20'>
            <h1 className='text-center text-3xl mb-5'>Partoners</h1>
            <Pertoner />
          </div>
          <div className='mt-20 mb-10 text-center'>
            <h1 className='text-center text-3xl mb-5'>Contact</h1>
            <Contactbtn />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
