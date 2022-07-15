import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'



const Title: React.FC = () => {

  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>サンタ屋</h1>
      <h3 className='pb-8'>みんなが幸せなクリスマスを</h3>

      <Img src={`/AnyConv.com__S__6185130.webp`} width={900} height={500}></Img>

      <div className='pt-12 lg:flex lg:pt-14'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12 lg:m-auto'>
          <h1 className='text-xl font-bold pb-5'>クリスマスは恋人だけのハッピーイベントではない</h1>
          <p className='text-md leading-relaxed pb-24'>クリスマスは恋人がとても楽しそうに過ごしています。美味しいディナーを食べて、お互いクリスマスプレゼントを交換し合い、恋人はとても和やかで大事な時間を過ごしているでしょう。ですが、恋人がいない人たちは？その時期になると「非リア」と言われ、SNSに妬みと開き直った投稿が飛び交います。クリスマスは毎月やってくる25日のうちの一つでしかない。恋人がいない人も恋人がいる人も、クリスマスという行事を楽しんでほしいと思いました。</p>
        </div>
      </div>

      <Img src={`/santasolution_1.jpg`} width={900} height={500}></Img>

      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>恩送りの文化から生まれた誰もがサンタさんになれるキッチンカー</h1>
          <p className='text-md leading-relaxed pb-24'>12 / 25に、サンタクロースやトナカイの衣装を着た学生たちが、寒い聖夜の街を歩く人たちに、温かい飲み物でホッと温まる体験を提供し、そして、その売上で街行く子供たちにお菓子をプレゼントしました。この企画は、恩送りの文化を通して、クリスマスという行事をより多くの人に体験してもらい、より多くの人に「幸せだな」「いい一日だな」と感じてほしいという思いで始まりました</p>
        </div>
      </div>
      <Img src={`/santaresult_1.jpg`} width={900} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>子供たちの喜ぶ姿とそれを見守る大人たち</h1>
          <p className='text-md leading-relaxed'>キッチンカーの周りには、未就学児から社会人という、幅広い年齢層の方たちによって賑わいました。 子供たちはお菓子を持ったサンタクロースの周りに集まり、両手が塞がるまでお菓子をかき集めている光景を、 学生や社会人が見守るというとても温かい空間がありました。 お客さんとして当イベントに来た学生の中には、急遽売り子を始める学生や、 サンタクロースの衣装を着て子供と会話を楽しむ学生など、単なる運営とお客さんという関わりで終わらず、 共に空間を作りながらイベントを楽しむことができました。</p>
        </div>

      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 list-none '>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3 border-b'><a href={`https://kitchencars-japan.com/k/wowfoodjam`}>WOW FOOD JAM</a></li>
          <li className='pt-4 border-b'><a href={`https://jamstore-web.com/`}>株式会社JAMSTORE</a></li>
        </div>
      </div>

    </div>

  )
}

export default Title;
