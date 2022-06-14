import type { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'
import { type } from 'os'
import ProjectCard from '../../components/Project'
import ProjectContent from '../../components/ProjectContent'
const Home: NextPage = () => {
  const Projects = [

     
    {
      id: 3,
      title: "屋台プロジェクト",
      subTitle: "あたたかいを届ける屋台",
      category1: "Entertainment",
      category2: "Student",
      issue: "寒さとコロナによる疲弊",
      issueContent: "2022年冬、COVID-19の影響で、身も心もあたたかさを失いつつあった。コロナウイルス感染に恐れながら満員電車に揺られ出勤する社会人、理想のキャンパスライフとはかけ離れたオンライン授業、行事ごとがことごとく中止になる高校生活。やるせない感情と、どうしようもならない現状との間に挟まれ、多くの人がそのギャップに疲弊していました。", solution: "「温度」「人」「色」で３度温まる味噌汁屋台", solutionContent: "学生や社会人が帰宅する夕刻に合わせて、温かい味噌汁を販売する屋台を動かしました。寒い日に自動販売機であったかい飲み物を購入した時の、あの「ホッ」とする体験を提供するべく、なんら普通の温かい味噌汁を販売。また１から屋台を制作し、どこか歪で、でもどこか親近感のある空間を作りました。デジタルな社会に包まれる今だからこそ、アナログ感溢れる体験を提供し、また屋台は、オレンジなどの暖色をメインに装飾して、安心感と温かさを演出しました。",
      result: "温かいコミュケーションが飛び交うプラットフォームに",
      resultContent: "仕事帰りの方。SNSを見て駆けつけてくれた学生。貴社の方。ご近所さんとワンちゃん。 今まで会ったことも話したこともない人たちが、味噌汁と屋台を囲んで和気藹々と触れ合う空間がありました。 また味噌汁で使用された屋台は、他の学生や団体が「事業プラットフォーム」として活用しています。 NPO法人KOKOIMAと関西大学人間健康学部のゼミとの共催イベント、ストリートファッションショーの催し企画や、 東大阪市にあるシェアハウスTNKbase主催の、1から無農薬で作った焼き芋の販売や、菜の花を配るプロジェクトなど さまざまな企画や事業のプラットフォームの一つとして確立しました。", result2: "", resultContent2: "",
      image1: "misosirutop_1.JPG",
      image2: "misosirutop_3.JPG",
      image3: "DSC02957.JPG",
      image4: "DSC02957.JPG"
   
    },
    {
      id: 4,
      title: "サンタ屋",
      subTitle: "みんなが幸せなクリスマスを",
      category1: "Entertainment",
      category2: "Student",
      issue: "クリスマスは恋人だけのハッピーイベントではない",
      issueContent: "クリスマスは恋人がとても楽しそうに過ごしています。美味しいディナーを食べて、お互いクリスマスプレゼントを交換し合い、恋人はとても和やかで大事な時間を過ごしているでしょう。ですが、恋人がいない人たちは？その時期になると「非リア」と言われ、SNSに妬みと開き直った投稿が飛び交います。クリスマスは毎月やってくる25日のうちの一つでしかない。恋人がいない人も恋人がいる人も、クリスマスという行事を楽しんでほしいと思いました。",
      solution: "恩送りの文化から生まれた誰もがサンタさんになれるキッチンカー",
      solutionContent: "12 / 25に、サンタクロースやトナカイの衣装を着た学生たちが、寒い聖夜の街を歩く人たちに、温かい飲み物でホッと温まる体験を提供し、そして、その売上で街行く子供たちにお菓子をプレゼントしました。この企画は、恩送りの文化を通して、クリスマスという行事をより多くの人に体験してもらい、より多くの人に「幸せだな」「いい一日だな」と感じてほしいという思いで始まりました",
      result: "子供たちの喜ぶ姿とそれを見守る大人たち",
      resultContent: "キッチンカーの周りには、未就学児から社会人という、幅広い年齢層の方たちによって賑わいました。 子供たちはお菓子を持ったサンタクロースの周りに集まり、両手が塞がるまでお菓子をかき集めている光景を、 学生や社会人が見守るというとても温かい空間がありました。 お客さんとして当イベントに来た学生の中には、急遽売り子を始める学生や、 サンタクロースの衣装を着て子供と会話を楽しむ学生など、単なる運営とお客さんという関わりで終わらず、 共に空間を作りながらイベントを楽しむことができました。",
      result2: "",
      resultContent2: "",
      image1: "AnyConv.com__S__6185130.webp",
      image2: "AnyConv.com__S__6185130.webp",
      image3: "AnyConv.com__S__6185130.webp",
      image4: "AnyConv.com__S__6185130.webp"
     
    }
  ];


  const Works = [
    {
      id: 1,
      title: "クラファンコンサル",
      category1: "Corporate",
      category2: "Education",
      what: "コンサルティング",
      whatContent: "クラウドファンディングでカンボジアの小学校に国際貢献する、実践型ビジネス体験プログラム「サムライカレープロジェクトオンライン」のコンサルティングに取り組みました。過去に成功したクラウドファンディン体験をもとに、2時間程度の講義とクラウドファンディングサイトのフィードバックを行いました。実績として、コンサルティングとして関わったプロジェクトのうち4つのプロジェクトが成功しました。",
      whatContent2: "実績や社会経験も何も持たない学生が、勝負していく一つの手段であるクラウドファンディングの講義を、学生向けに無料で行なっており、学生主体のプロジェクト促進に向け全力で支援・サポートしております。",
      image1: "AnyConv.com__IMG_6691.webp",
      image2: "AnyConv.com__IMG_6691.webp",
      image3: "AnyConv.com__IMG_6691.webp",
      image4: "AnyConv.com__IMG_6691.webp"
   
    },
    {
      id: 2,
      title: "Career Meeting",
      category1: "Student",
      category2: "Education",
      what: "企画・プロモーション",
      whatContent: "今現在、環境をはじめとした様々な課題や、テクノロジーによる急激な変化と向き合っています。その状況の中でどのように働き、成長していくのかの前に、知らない仕事や世の中の流れを知っておくことが重要だと考えました。将来に向けて積極的にキャリア形成したい学生から、このままでいいのかと思っている学生までが、20代で成長するための一歩を踏み出すきっかけとなるイベントです。大手企業とスタートアップ双方に通じた人事のスペシャリストや、現役インターンや新卒採用でスタートアップの世界に入り活躍する社員の方などを招き、リアルな社会をお伝えしていただきました。TRYBEは「Career Meeting」の企画・プロモーションに携わりました。",
      image1: "AnyConv.com__IMG_6691.webp",
      image2: "AnyConv.com__IMG_6691.webp",
      image3: "AnyConv.com__IMG_6691.webp",
      image4: "AnyConv.com__IMG_6691.webp",
      video: "C0129.mp4"
    },
    {
      id: 3,
      title: "ロボットストリート",
      category1: "Plannning",
      category2: "Entertainment",
      what: "企画・開発・運営",
      whatContent: "子供たちがテクノロジー体験できる場所として、Gather.Townのバーチャル空間の中で、自分のキャラクターを動かし、秘密の屋上を目指す「ロボットストリート」の企画・開発・運営を行いました。ロボットストリートの中には、脱出ゲーム、⚪︎×クイズ、謎解きなどのコンテンツが用意されており、子供たちがバーチャル空間の中で遊んでる様子が伺えました。その他に、ロボットの操作、プログラミング、電子工作などのワークショップやセミナーなども同時に開催されていました。",
      image1: "AnyConv.com__IMG_6691.webp",
      image2: "AnyConv.com__IMG_6691.webp",
      image3: "AnyConv.com__IMG_6691.webp",
      image4: "AnyConv.com__IMG_6691.webp",
      
    },
    {
      id: 4,
      title: "セキスイカルタ",
      category1: "Plannning",
      category2: "Entertainment",
      what: "企画・開発",
      whatContent: "私たちの生活は積水化学工業様の、環境に配慮し開発された製品に支えられています。 SDGsに大変力を入れてい事業に取り組まれています。そして今後の日本を担っていく小学生に、SDGsそのものやSDGs貢献の重要性などを伝えていきたいと思いました。ですが、小学生はSDGsに触れたこともなければ、興味もない。そんな小学生にSDGsへの貢献について伝えていくことに課題を感じていました。そこで、誰もが経験したことがある、「カルタ」を用いたゲーミフィケーションを通して、小学生にSDGsを分かりやすく楽しんでもらえるようなコンテンツの開発に取り組みました。",
      image1: "AnyConv.com__IMG_6691.webp",
      image2: "AnyConv.com__IMG_6691.webp",
      image3: "AnyConv.com__IMG_6691.webp",
      image4: "AnyConv.com__IMG_6691.webp",
    
    },
    {
      id: 5,
      title: "Kids tech EXPO",
      category1: "Plannning",
      category2: "Entertainment",
      what: "企画・運営",
      whatContent: "プログラミングや電子工作など、テクノロジーを遊びながら学び、子どもたちの夢や自信のきっかけをつくる体験型ワークショップイベントの企画・運営を行いました。クラスター株式会社が企画・開発・運営を行う、バーチャル空間に集まって遊ぶことができるメタバースプラットフォーム「cluster」を使用し、子どもたちが遊ぶことができる企画開発に携わりました。「cluster」内のバーチャル空間と、未来& 先端テクノロジー体験施設「Robo & Peace」内のリアル空間を掛け合わせた、バーチャルとリアルが同時に進行する企画です。 ",
      image1: "AnyConv.com__IMG_6691.webp",
      image2: "AnyConv.com__IMG_6691.webp",
      image3: "AnyConv.com__IMG_6691.webp",
      image4: "AnyConv.com__IMG_6691.webp",
 
    },
  ];
  Projects.map((project) => {
    // userの情報
    const projectInfo = { id: project.id, title: project.title, subTitle: project.subTitle, image1: project.image1, image2: project.image2, image3: project.image3, image4: project.image4 };
  })
  Works.map((work) => {
    // userの情報
    const workInfo = { id: work.id, title: work.title, video: work.video, image1: work.image1, image2: work.image2, image3: work.image3, image4: work.image4, what: work.what, whatContent: work.whatContent, whatContent2: work.whatContent2 };
  })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-body mt-24 mb-20 w-9/12 m-auto'>
        <section id="projects">
          <h1 className='text-center mb-12 text-4xl font-bold'>PROJECTS</h1>
          <div>
            <div className='grid lg:grid-cols-2 gap-2'>
              <div className='  mb-12'>
                
                  <Img src={`/S__50151467.jpg`}  width="100%" height="315"></Img>   
                    <Link href={`/projects/jinro`} ><a>
                      <div className=' grid grid-cols-2 gap-2 '>
                      <Img src={`/jinrotop1.jpg`} className='w-full' width={600} height={330} ></Img>
                      <Img src={`/jinrotop2.jpg`} className='w-full' width={600} height={330} ></Img>
                      </div>
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Education</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
                        <h1 className="font-bold text-2xl py-3">人狼コロシアム</h1>
                    <h2 className="font-medium text-md">高校の休み時間を取り戻すために生まれたボードゲーム</h2>
                        <p className="pt-5 font-normal">and more</p>
                      </div>
                    </a>
                    </Link>
                  </div>
                  <div className='  mb-12'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YMZNYzhbY_s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    <Link href={`/projects/seishun`} ><a>
                      <div className=' grid grid-cols-2 gap-2 pt-2'>
                        <Img src={`/seishuntop-1.jpg`} className='w-full' width={600} height={330} ></Img>
                        <Img src={`/seishuntop-2.jpg`} className='w-full' width={600} height={330} ></Img>
                      </div>
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Education</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
                        <h1 className="font-bold text-2xl py-3">青春奪還作戦</h1>
                        <h2 className="font-medium text-md">高校を舞台にした全国キャリアイベント</h2>
                        <p className="pt-5 font-normal">and more</p>
                      </div>
                    </a>
                    </Link>
                  </div>
            
            </div>
          </div>
          <div>
            <div className='grid lg:grid-cols-2 gap-2'>
              {Projects.map((project) => {
                const projectInfo = {
                  id: project.id,
                  title: project.title,
                  subTitle: project.subTitle,
                  issue: project.issue,
                  issueContent: project.issueContent,
                  solution: project.solution,
                  solutionContent: project.solutionContent,
                  result: project.result,
                  resultContent: project.resultContent,
                  result2: project.result2,
                  resultContent2: project.resultContent2,
                  image1: project.image1,
                  image2: project.image2,
                  image3: project.image3,
                  image4: project.image4
                };
                return (
                  <div key={project.id} className='  mb-12'>
                    <Img src={`/S__50151467.jpg`} width="100%" height="315"></Img> 
                    <Link as={`/projects/${project.id}`} href={{ pathname: `/projects/[id]`, query: projectInfo }} ><a>
                      <div className=' grid grid-cols-2 gap-2 pt-2'>
                        <Img src={`/${project.image1}`} className='w-full' width={600} height={330} ></Img>
                        <Img src={`/${project.image2}`} className='w-full' width={600} height={330} ></Img>
                      </div>
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">{project.category1}</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">{project.category2}</p>
                        <h1 className="font-bold text-2xl py-3">{project.title}</h1>
                        <h2 className="font-medium text-md">{project.subTitle}</h2>
                        <p className="pt-5 font-normal">and more</p>
                      </div>
                    </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="works">
          <h1 className='text-center mb-12 text-4xl font-bold'>WORKS</h1>
          <div>
            <div className='grid lg:grid-cols-2 gap-2'>
              {Works.map((work) => {
                const workInfo = {
                  id: work.id,
                  title: work.title,
                  image1: work.image1,
                  image2: work.image2,
                  image3: work.image3,
                  image4: work.image4,
                  video: work.video,
                  what: work.what,
                  whatContent: work.whatContent,
                  whatContent2: work.whatContent2
                };
                return (
                  <div key={work.id} className='  mb-12'>
                    <Img src={`/S__50151467.jpg`} width="100%" height="315"></Img> 
                    <Link as={`/works/${work.id}`} href={{ pathname: `/works/[id]`, query: workInfo }} ><a>
                      <div className=' grid grid-cols-2 gap-2 pt-2'>
                        <Img src={`/${work.image1}`} className='w-full' width={600} height={450} ></Img>
                        <Img src={`/${work.image2}`} className='w-full' width={600} height={450} ></Img>
                      </div>
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">{work.category1}</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">{work.category2}</p>
                        <h1 className="font-bold text-2xl py-3">{work.title}</h1>
                        <p className="pt-5 font-normal">and more</p>
                      </div>
                    </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Home