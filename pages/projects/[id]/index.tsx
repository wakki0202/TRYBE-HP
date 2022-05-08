import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'



const Title: React.FC = () => {
  
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>{router.query.title}</h1>
      <h3 className='pb-8'>{router.query.subTitle}</h3>
      <Img src={"/AnyConv.com__IMG_6691.webp"} width={900} height={500}></Img>
      <div className='pt-12 lg:flex lg:pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.issue}</h1>
          <p className='text-md leading-relaxed'>{router.query.issueContent}</p>
        </div>
      </div>
      <div className='lg:flex pt-24'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.solution}</h1>
          <p className='text-md leading-relaxed'>{router.query.solutionContent}</p>
        </div>
      </div>
      <Img src={"/AnyConv.com__IMG_6691.webp"} width={900} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.result}</h1>
          <p className='text-md leading-relaxed'>{router.query.resultContent}</p>

          <h1 className='text-xl font-bold pb-5 pt-7'>{router.query.result2}</h1>
          <p className='text-md leading-relaxed'>{router.query.resultContent2}</p>
        </div>

      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Link</h1>
          <li className='pt-3 border-b pb-1'><a href="https://sites.google.com/view/jinrocolosseum/">ウェブサイト</a></li>
          <li className='pt-3 border-b pb-1'><a href="https://camp-fire.jp/projects/view/243888">クラウドファンディング</a></li>
          <li className='pt-3 border-b pb-1'><a href="https://jinclo.base.shop/categories/2721013">ショップ</a></li>
        </div>
        <div className='w-6/12 lg:w-3/12 list-none ml-10'>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3'><a href="https://www.daiko-printing.co.jp/">大興印刷株式会社</a></li>
          <li className='pt-3'><a href="https://lit.link/haraceleb">原セレブ</a></li>
        </div>
      </div>

    </div>
    
  )
}

export default Title;
