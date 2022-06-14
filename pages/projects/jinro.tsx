import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'



const Title: React.FC = () => {

  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>人狼コロシアム</h1>
      <h3 className='pb-8'>高校の休み時間を取り戻すために生まれたボードゲーム</h3>

      <Img src={`/jinrotop1.jpg`} width={1200} height={900}></Img>

      <div className='pt-12 lg:flex lg:pt-14'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12 lg:m-auto'>
          <h1 className='text-xl font-bold pb-5'>高校の休み時間が、スマートフォンに奪われる</h1>
          <p className='text-md leading-relaxed pb-24'>学校の授業が終わり休み時間になると、学生のポケットから出てくるのはスマホ。教室という一つの空間の中にいるのに、クラスメイトの意識はバラバラで、みんなスマホの中の世界に閉じこもっていました。今では当たり前になっているその光景。スマホの普及により、便利で快適な生活を送ることができる反面、それに伴い生じた「人と人とのつながりの希薄化」に課題を感じました。</p>
        </div>
      </div>

      <Img src={`/jinrotop2.JPG`} width={1000} height={500}></Img>

      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>休み時間の10分で出来る、人狼ボードゲーム</h1>
          <p className='text-md leading-relaxed pb-24'>休み時間の10分、昼休みの1時間という限られた時間の中で、スマホ触っているクラスメイトを巻き込む手段として、当時若者の間で流行していた「人狼ゲーム」を使い、活気ある休み時間を取り戻そうとしました。そこでTRYBEは、クラスメイトがスマホではなく、わざわざボードゲームに時間を使いたいと思ってもらうために、これまでの「人狼を見つける」人狼ゲームとは異なり、「人狼を見つけてはいけない」人狼ゲームという、真逆のコンセプトで「人狼コロシアム」というボードゲームの開発を行い、クラスメイトと休み時間を共にしました。</p>
        </div>
      </div>
      <Img src={`/AnyConv.com__IMG_6691.webp`} width={1000} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>活気を取り戻す休み時間</h1>
          <p className='text-md leading-relaxed'>休み時間になると、一つの机の周りにクラスメイトが集まり、「人狼コロシアム」を取り囲んで会話が飛び交うようになりました。また、仲の良い他のクラスの生徒たちも、昼休みになると一つの教室に集まり、人狼コロシアムを遊ぶこともありました。手にあるのはスマホ、見つめる先もスマホだった光景が、人狼コロシアムの制作によって手にはカード、見つめる先には駆け引きを楽しむクラスメイトに変わって行きました。発展した世の中に、あえてアナログな体験を提供することで、活気溢れる大切な休み時間を体現することができました。</p>

          <h1 className='text-xl font-bold pb-5 pt-14'>若者の圧倒的支持によりクラウドファンディング達成</h1>
          <p className='text-md leading-relaxed'>クラウドファンディングで約200万円の資金調達、453人の方に支援していただきました。453人の総支援者のうち、10代、20代だけで292人という、若者からの支援が過半数を占めており、リリース以降も様々なSNSを通して、「人狼コロシアム」の体験の様子を多くの方が投稿してくださいました。またイベント出展の際には、「かっこよさ」「高級感」などの一貫性のあるブランディングを行うことで、若者からの支持を集めています。</p>
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
