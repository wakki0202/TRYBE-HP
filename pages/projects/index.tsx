import type { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'
import ProjectCard from '../../components/Project'

const Home: NextPage = () => {
  const Projects = [
    {
      id: 1, title: "人狼コロシアム", subTitle: "高校の休み時間を取り戻すために生まれたボードゲーム",category1:"Entertainment",category2:"Student" },
    { id: 2, title: "青春奪還作戦", subTitle: "高校を舞台にした全国キャリアイベント", category1: "Entertainment", category2: "Student" },
    { id: 3, title: "屋台プロジェクト", subTitle: "あたたかいを届ける屋台", category1: "Entertainment", category2: "Student" },
    { id: 4, title: "サンタ屋", subTitle: "みんなが幸せなクリスマスを", category1: "Entertainment", category2: "Student" },
    { id: 5, title: "1stステッププロジェクト", subTitle: "誰かの一歩を応援する", category1: "Student" },
    { id: 6, title: "アウトドア企画", subTitle: "アウトドアに特化したアナログゲームを作りたい", category1: "Entertainment", category2: "Planning" },
  ];
  
    Projects.map((project) => {
      // userの情報
      const projectInfo = { id: project.id, title: project.title };
    })
  
  return (
    <div>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-gothic mt-24 mb-20 w-9/12 m-auto'>
        <h1 className='text-center mb-12 text-4xl font-bold'>ALL PROJECT</h1>
        
          
        <div >
          <div className='grid grid-cols-2 gap-2'>
            {Projects.map((project) => {
              const projectInfo = { id: project.id, title: project.title };
              return (
                
                  <div key={project.id} className='  mb-12'>
                <Link as={`/projects/${project.id}`}
                href={{ pathname: `/projects/[id]`, query: projectInfo }} ><a>
                  <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
                  <div className=' grid grid-cols-2 gap-2'>
                    <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
                    <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
                    <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
                    <Img src="/DSC02957.JPG" className='w-full' width={600} height={330} ></Img>
                  </div>
                    
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">{project.category1}</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">{project.category2}</p>
                        <h1 className="font-bold text-2xl py-3">{project.title}</h1>
                        <h2 className="font-medium text-md">{project.subTitle}</h2>
                        <p className="pt-5 font-normal">and more</p>
                      </div></a></Link>
                  </div>
                  );
            })}

         

        </div>
        </div>
      </main>

    </div>
  )
}

export default Home
