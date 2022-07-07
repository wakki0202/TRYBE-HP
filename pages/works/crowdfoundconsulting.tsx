import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'

const Title: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold  pt-16 text-4xl pt-16'>クラファンコンサル</h1>
      <Img src={`/cf_thum.png`} width={900} height={500}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>コンサルティング</h1>
          <p className='text-md leading-relaxed pb-8'>クラウドファンディングでカンボジアの小学校に国際貢献する、実践型ビジネス体験プログラム「サムライカレープロジェクトオンライン」のコンサルティングに取り組みました。過去に成功したクラウドファンディン体験をもとに、2時間程度の講義とクラウドファンディングサイトのフィードバックを行いました。実績として、コンサルティングとして関わったプロジェクトのうち4つのプロジェクトが成功しました。</p>
          <p className='text-md leading-relaxed pb-24'>実績や社会経験も何も持たない学生が、勝負していく一つの手段であるクラウドファンディングの講義を、学生向けに無料で行なっており、学生主体のプロジェクト促進に向け全力で支援・サポートしております。</p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Other</h1>
          <li className='pt-3 border-b pb-1'><a href="https://www.tigermov.com/internship/detail/769">ウェブサイト</a></li>
        </div>
      </div>
    </div>
  )
}
export default Title;