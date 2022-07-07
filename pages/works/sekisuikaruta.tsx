import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'

const Title: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-4xl pt-16 pt-16 '>セキスイカルタ</h1>
      <Img src={`/sekisui.jpg`} width={900} height={500}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>企画・開発</h1>
          <p className='text-md leading-relaxed pb-8'>私たちの生活は積水化学工業様の、環境に配慮し開発された製品に支えられています。 SDGsに大変力を入れてい事業に取り組まれています。そして今後の日本を担っていく小学生に、SDGsそのものやSDGs貢献の重要性などを伝えていきたいと思いました。ですが、小学生はSDGsに触れたこともなければ、興味もない。そんな小学生にSDGsへの貢献について伝えていくことに課題を感じていました。そこで、誰もが経験したことがある、「カルタ」を用いたゲーミフィケーションを通して、小学生にSDGsを分かりやすく楽しんでもらえるようなコンテンツの開発に取り組みました。</p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Other</h1>
          <li className='pt-3 border-b pb-1'><a href="https://sdgs.edutown.jp/sekisuikaruta/">ウェブサイト</a></li>
        </div>
      </div>
    </div>
  )
}
export default Title;