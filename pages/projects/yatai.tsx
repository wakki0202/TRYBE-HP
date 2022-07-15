import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'



const Title: React.FC = () => {

  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>屋台プロジェクト</h1>
      <h3 className='pb-8'>あたたかいを届ける屋台</h3>

      <Img src={`/misosirutop_1.JPG`} width={900} height={500}></Img>

      <div className='pt-12 lg:flex lg:pt-14'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12 lg:m-auto'>
          <h1 className='text-xl font-bold pb-5'>寒さとコロナによる疲弊</h1>
          <p className='text-md leading-relaxed pb-24'>2022年冬、COVID-19の影響で、身も心もあたたかさを失いつつあった。コロナウイルス感染に恐れながら満員電車に揺られ出勤する社会人、理想のキャンパスライフとはかけ離れたオンライン授業、行事ごとがことごとく中止になる高校生活。やるせない感情と、どうしようもならない現状との間に挟まれ、多くの人がそのギャップに疲弊していました。</p>
        </div>
      </div>

      <Img src={`/misosirutop_3.JPG`} width={900} height={600}></Img>

      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>「温度」「人」「色」で３度温まる味噌汁屋台</h1>
          <p className='text-md leading-relaxed pb-24'>学生や社会人が帰宅する夕刻に合わせて、温かい味噌汁を販売する屋台を動かしました。寒い日に自動販売機であったかい飲み物を購入した時の、あの「ホッ」とする体験を提供するべく、なんら普通の温かい味噌汁を販売。また１から屋台を制作し、どこか歪で、でもどこか親近感のある空間を作りました。デジタルな社会に包まれる今だからこそ、アナログ感溢れる体験を提供し、また屋台は、オレンジなどの暖色をメインに装飾して、安心感と温かさを演出しました。</p>
        </div>
      </div>
      <Img src={`/misosiruresult_2.jpg`} width={900} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>温かいコミュケーションが飛び交うプラットフォームに</h1>
          <p className='text-md leading-relaxed'>仕事帰りの方。SNSを見て駆けつけてくれた学生。貴社の方。ご近所さんとワンちゃん。 今まで会ったことも話したこともない人たちが、味噌汁と屋台を囲んで和気藹々と触れ合う空間がありました。 また味噌汁で使用された屋台は、他の学生や団体が「事業プラットフォーム」として活用しています。 NPO法人KOKOIMAと関西大学人間健康学部のゼミとの共催イベント、ストリートファッションショーの催し企画や、 東大阪市にあるシェアハウスTNKbase主催の、1から無農薬で作った焼き芋の販売や、菜の花を配るプロジェクトなど さまざまな企画や事業のプラットフォームの一つとして確立しました。</p>
        </div>

      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 list-none '>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3 border-b'><a href={`https://tnk-base-plathome.themedia.jp/`}>TNK base</a></li>
          <li className='pt-4 border-b'><a href={`https://www.kansai-u.ac.jp/Fc_hw/`}>関西大学人間健康学部</a></li>
        </div>
      </div>

    </div>

  )
}

export default Title;
