import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'

const Title: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold  pt-16 text-4xl pt-16'>ロボットストリート</h1>
      <Img src={`/S__50216974.jpg`} width={900} height={500}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>企画・開発・運営</h1>
          <p className='text-md leading-relaxed pb-8'>子供たちがテクノロジー体験できる場所として、Gather.Townのバーチャル空間の中で、自分のキャラクターを動かし、秘密の屋上を目指す「ロボットストリート」の企画・開発・運営を行いました。ロボットストリートの中には、脱出ゲーム、⚪︎×クイズ、謎解きなどのコンテンツが用意されており、子供たちがバーチャル空間の中で遊んでる様子が伺えました。その他に、ロボットの操作、プログラミング、電子工作などのワークショップやセミナーなども同時に開催されていました。</p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Other</h1>
          <li className='pt-3 border-b pb-1'><a href="https://robot-street.com/">ウェブサイト</a></li>
        </div>
      </div>
    </div>
  )
}
export default Title;