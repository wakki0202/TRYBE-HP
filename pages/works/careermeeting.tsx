import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'

const Title: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-4xl pt-16 pb-8'>Career Meeting</h1>
      <Img src={`/IMG_0943.JPG`} width={900} height={1300}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>企画・プロモーション</h1>
          <p className='text-md leading-relaxed pb-8'>今現在、環境をはじめとした様々な課題や、テクノロジーによる急激な変化と向き合っています。その状況の中でどのように働き、成長していくのかの前に、知らない仕事や世の中の流れを知っておくことが重要だと考えました。将来に向けて積極的にキャリア形成したい学生から、このままでいいのかと思っている学生までが、20代で成長するための一歩を踏み出すきっかけとなるイベントです。大手企業とスタートアップ双方に通じた人事のスペシャリストや、現役インターンや新卒採用でスタートアップの世界に入り活躍する社員の方などを招き、リアルな社会をお伝えしていただきました。TRYBEは「Career Meeting」の企画・プロモーションに携わりました。</p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Other</h1>
          <li className='pt-3 border-b pb-1'><a href="https://www.innovation-osaka.jp/ja/events/event-10266/">ウェブサイト</a></li>
        </div>
      </div>
    </div>
  )
}
export default Title;