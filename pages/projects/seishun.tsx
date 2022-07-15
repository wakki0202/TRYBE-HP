import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'



const Title: React.FC = () => {

  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>もしも一度だけ、あの日に戻れるのなら</h1>
      <h3 className='pb-8'>高校を舞台にした全国キャリアイベント</h3>

      <Img src={`/seishuntop-1.jpg`} width={900} height={500}></Img>

      <div className='pt-12 lg:flex lg:pt-14'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Issue</h1>
        </div>
        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>就活という岐路に立ち、進路に悩む学生</h1>
          <p className='text-md leading-relaxed pb-24'>学生たちはやりたいことや就きたい仕事が分からないまま就活が始まる人が多いです。どうしていいか分からないまま、とりあえず就活を進めたり、就職してしまう。そのような進路に悩む学生は世間の想像以上に多く、深刻な問題になっています。新卒が就職してから3年以内に30% の人が離職するという数字の本質もここにあると考えました。</p>
        </div>
      </div>

      <Img src={`/seishuntop-2.jpg`} width={900} height={500}></Img>

      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>Solution</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>高校生活にもう一度戻ることができる、擬似体験型キャリアイベント</h1>
          <p className='text-md leading-relaxed pb-24'>進路に悩める大学生が、２度と戻れないはずの高校生活を舞台に、自分の人生を考えるプログラムを丸一日かけて行いました。そこでは本来出会わないはずの新たなクラスメイトと共に、自分のやりたい事は何なのか、そのために今何をすることが必要なのか考え、自分の進路を自分の明確な意思を持って選択するためのきっかけを提供しました。授業については、すでに社会に出て活躍している大人や同世代の学生が先生として登壇し、国語や美術などのどこか懐かしく、けど学校では教えてもらわないような授業内容を講談してもらいました。プログラム終了後もアフターフォローとして希望者に個人面談を行なっており、選択肢を与えて終わらせるのではなく、最後までサポートする体制で取り組んでいます。</p>
        </div>
      </div>
      <Img src={`/AnyConv.com__IMG_0164.webp`} width={900} height={500}></Img>


      <div className='lg:flex pt-10'>

        <div className=' lg:w-2/12 '>
          <h1 className=' text-2xl font-bold text-gray-400'>Result</h1>
        </div>

        <div className=' lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>起業家を排出</h1>
          <p className='text-md leading-relaxed'>青春奪還作戦を通して、起業の道に進む人、今まで毛嫌いしていたはずのマーケティングにシフトする人、元々目指していた進路により確固たる決意を持つ人、将来やりたいことが決まった人など、多くの学生の人生に、少しのきっかけを与えることができました。イベント参加者、運営としての関わりだけで終わらず、起業に進む人や興味がある人に対しては教育環境の提供をしたり、就活に向けて自分の武器を作りたい人に対しては、プロジェクトごとにメンバーとしてジョインしてもらうなど、きっかけや機会を与えて終わるのではなく、その後も共に成長していくための取り組みに力を入れています。</p>

          <h1 className='text-xl font-bold pb-5 pt-14'>TikTokでも大反響</h1>
          <p className='text-md leading-relaxed'>TikTokに青春奪還作戦のリール動画を投稿したところ、総視聴回数60万再生、5万4千いいね、350コメント、850共有を記録しました。コメントの内容としては「企画に対しての共感」と「参加表明」の二つが大半を占めております。すでに働いている人、進路に悩む大学生、コロナによって行事が中止になった高校生など、年齢性別に問わず、全国各地での開催を強く希望されております。現段階で大阪で2回開催、そして今後東京と広島で1回ずつ開催予定、その後も全国各地で開催する方針です。</p>
        </div>

      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Link</h1>
          <li className='pt-3 border-b pb-1'><a href="https://isouta1003.wixsite.com/trybe">ウェブサイト</a></li>
          <li className='pt-3 border-b pb-1'><a href="https://vt.tiktok.com/ZSdYj4NMh/">TikTok</a></li>
        </div>
        <div className='w-6/12 lg:w-3/12 list-none ml-10'>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3'><a href="https://kids-project.jp/">キッズプロジェクト</a></li>
          <li className='pt-3'><a href="https://www.instagram.com/fulfilm.jp/?hl=ja">fulfilM</a></li>
          <li className='pt-3'><a href="https://instagram.com/creatorcamp.official?igshid=YmMyMTA2M2Y=">CreatorCamp</a></li>
          <li className='pt-3'><a href="https://tnk-base-plathome.themedia.jp/">TNK base</a></li>
          <li className='pt-3'><a href="https://vision-project.editorx.io/sonia/">SONIA</a></li>
        </div>
      </div>

    </div>

  )
}

export default Title;
