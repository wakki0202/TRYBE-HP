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

      <Img src={`/${router.query.image1}`} width={900} height={500}></Img>

      <div className='pt-12 lg:flex lg:pt-14'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.issue}</h1>
          <p className='text-md leading-relaxed pb-24'>{router.query.issueContent}</p>
        </div>
      </div>

      <Img src={`/${router.query.image2}`} width={900} height={500}></Img>

      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.solution}</h1>
          <p className='text-md leading-relaxed pb-24'>{router.query.solutionContent}</p>
        </div>
      </div>
      <Img src={`/${router.query.image3}`} width={900} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.result}</h1>
          <p className='text-md leading-relaxed'>{router.query.resultContent}</p>

          <h1 className='text-xl font-bold pb-5 pt-14'>{router.query.result2}</h1>
          <p className='text-md leading-relaxed'>{router.query.resultContent2}</p>
        </div>

      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 list-none ml-10'>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3 border-b'><a href={`${router.query.pertonerlink}`}>{router.query.pertoner}</a></li>
          <li className='pt-3 border-b'><a href={`${router.query.pertonerlink2}`}>{router.query.pertoner2}</a></li>
        </div>
      </div>

    </div>
    
  )
}

export default Title;
