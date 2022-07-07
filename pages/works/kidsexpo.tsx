import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'

const Title: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold  pt-16 text-4xl pt-16'>Kids tech EXPO</h1>
      <Img src={`/S__50216973.jpg`} width={900} height={500}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>企画・運営</h1>
          <p className='text-md leading-relaxed pb-8'>プログラミングや電子工作など、テクノロジーを遊びながら学び、子どもたちの夢や自信のきっかけをつくる体験型ワークショップイベントの企画・運営を行いました。クラスター株式会社が企画・開発・運営を行う、バーチャル空間に集まって遊ぶことができるメタバースプラットフォーム「cluster」を使用し、子どもたちが遊ぶことができる企画開発に携わりました。「cluster」内のバーチャル空間と、未来＆先端テクノロジー体験施設「Robo＆Peace」内のリアル空間を掛け合わせた、バーチャルとリアルが同時に進行する企画です。 </p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Other</h1>
          <li className='pt-3 border-b pb-1'><a href="https://www.atc-co.com/event/002008/">ウェブサイト</a></li>
        </div>
      </div>
    </div>
  )
}
export default Title;