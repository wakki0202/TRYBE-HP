import type { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'
import ProjectCard from '../../components/Project'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-gothic mt-24 mb-20 w-9/12 m-auto'>
        <h1 className='text-center mb-12 text-4xl font-bold'>ALL PROJECT</h1>
        <div className=' grid grid-cols-2 gap-4'>
          
          <div className='  mb-12'>
            <Link href="projects/jinkoro"><a>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
            <ProjectCard title="人狼コロシアム" subTitle="高校の休み時間を取り戻すために 生まれたボードゲーム" category1="Entertainment" category2='Student' /></a></Link>
          </div>

          <div className='  mb-12'>
            <Link href="projects/${props.title}"><a>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
              <ProjectCard title="青春奪還作戦" subTitle="高校を舞台にしたキャリアイベント" category1="Entertainment" category2='Student' /></a></Link>
          </div>

          <div className='  mb-12'>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
            <ProjectCard title="屋台プロジェクト" subTitle="あたたかいを届ける屋台" category1="Entertainment" category2='Student' />
          </div>

          <div className='  mb-12'>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
            <ProjectCard title="サンタ屋" subTitle="みんなが幸せなクリスマスを" category1="Entertainment" category2='Student' />
          </div>

          <div className='  mb-12'>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
            <ProjectCard title="1stステッププロジェクト" subTitle="誰かの一歩を応援する" category1="Entertainment" category2='Student' />
          </div>

          <div className='  mb-12'>
            <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            <div className=' grid grid-cols-2 gap-2'>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
              <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
            </div>
            <ProjectCard title="人狼コロシアム" subTitle="誰かの一歩を応援する" category1="Entertainment" category2='Student' />
          </div>

        </div>
      </main>

    </div>
  )
}

export default Home
