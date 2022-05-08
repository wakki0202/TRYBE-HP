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
      id: 1,
      title: "人狼コロシアム",
      subTitle: "高校の休み時間を取り戻すために生まれたボードゲーム",
      category1: "Entertainment",
      category2: "Student",
      issue: "高校の休み時間が、スマートフォンに奪われる",
      issueContent: "学校の授業が終わり休み時間になると、学生のポケットから出てくるのはスマホ。教室という一つの空間の中にいるのに、クラスメイトの意識はバラバラで、みんなスマホの中の世界に閉じこもっていました。今では当たり前になっているその光景。スマホの普及により、便利で快適な生活を送ることができる反面、それに伴い生じた「人と人とのつながりの希薄化」に課題を感じました。",
      solution: "休み時間の10分で出来る、人狼ボードゲーム",
      solutionContent: "休み時間の10分、昼休みの1時間という限られた時間の中で、スマホ触っているクラスメイトを巻き込む手段として、当時若者の間で流行していた「人狼ゲーム」を使い、活気ある休み時間を取り戻そうとしました。そこでTRYBEは、クラスメイトがスマホではなく、わざわざボードゲームに時間を使いたいと思ってもらうために、これまでの「人狼を見つける」人狼ゲームとは異なり、「人狼を見つけてはいけない」人狼ゲームという、真逆のコンセプトで「人狼コロシアム」というボードゲームの開発を行い、クラスメイトと休み時間を共にしました。",
      result: "活気を取り戻す休み時間",
      resultContent: "休み時間になると、一つの机の周りにクラスメイトが集まり、「人狼コロシアム」を取り囲んで会話が飛び交うようになりました。また、仲の良い他のクラスの生徒たちも、昼休みになると一つの教室に集まり、人狼コロシアムを遊ぶこともありました。手にあるのはスマホ、見つめる先もスマホだった光景が、人狼コロシアムの制作によって手にはカード、見つめる先には駆け引きを楽しむクラスメイトに変わって行きました。発展した世の中に、あえてアナログな体験を提供することで、活気溢れる大切な休み時間を体現することができました。",
      result2: "若者の圧倒的支持によりクラウドファンディング達成",
      resultContent2: "クラウドファンディングで約200万円の資金調達、453人の方に支援していただきました。453人の総支援者のうち、10代、20代だけで292人という、若者からの支援が過半数を占めており、リリース以降も様々なSNSを通して、「人狼コロシアム」の体験の様子を多くの方が投稿してくださいました。またイベント出展の際には、「かっこよさ」「高級感」などの一貫性のあるブランディングを行うことで、若者からの支持を集めています。",
      image: "AnyConv.com__IMG_6691.webp"
    },
    
    {
      id: 2,
      title: "青春奪還作戦",
      subTitle: "高校を舞台にした全国キャリアイベント", category1: "Entertainment",
      category2: "Student",
      issue: "就活という岐路に立ち、進路に悩む学生", issueContent: "学生たちはやりたいことや就きたい仕事が分からないまま就活が始まる人が多いです。どうしていいか分からないまま、とりあえず就活を進めたり、就職してしまう。そのような進路に悩む学生は世間の想像以上に多く、深刻な問題になっています。新卒が就職してから3年以内に30% の人が離職するという数字の本質もここにあると考えました。", solution: "高校生活にもう一度戻ることができる、擬似体験型キャリアイベント",
      solutionContent: "進路に悩める大学生が、２度と戻れないはずの高校生活を舞台に、自分の人生を考えるプログラムを丸一日かけて行いました。そこでは本来出会わないはずの新たなクラスメイトと共に、自分のやりたい事は何なのか、そのために今何をすることが必要なのか考え、自分の進路を自分の明確な意思を持って選択するためのきっかけを提供しました。授業については、すでに社会に出て活躍している大人や同世代の学生が先生として登壇し、国語や美術などのどこか懐かしく、けど学校では教えてもらわないような授業内容を講談してもらいました。プログラム終了後もアフターフォローとして希望者に個人面談を行なっており、選択肢を与えて終わらせるのではなく、最後までサポートする体制で取り組んでいます。", result: "起業家を排出",
      resultContent: "青春奪還作戦を通して、起業の道に進む人、今まで毛嫌いしていたはずのマーケティングにシフトする人、元々目指していた進路により確固たる決意を持つ人、将来やりたいことが決まった人など、多くの学生の人生に、少しのきっかけを与えることができました。イベント参加者、運営としての関わりだけで終わらず、起業に進む人や興味がある人に対しては教育環境の提供をしたり、就活に向けて自分の武器を作りたい人に対しては、プロジェクトごとにメンバーとしてジョインしてもらうなど、きっかけや機会を与えて終わるのではなく、その後も共に成長していくための取り組みに力を入れています。",
      result2: "TikTokでも大反響",
      resultContent2: "TikTokに青春奪還作戦のリール動画を投稿したところ、総視聴回数60万再生、5万4千いいね、350コメント、850共有を記録しました。コメントの内容としては「企画に対しての共感」と「参加表明」の二つが大半を占めております。すでに働いている人、進路に悩む大学生、コロナによって行事が中止になった高校生など、年齢性別に問わず、全国各地での開催を強く希望されております。現段階で大阪で2回開催、そして今後東京と広島で1回ずつ開催予定、その後も全国各地で開催する方針です。" 
    },

    {
      id: 3,
      title: "屋台プロジェクト",
      subTitle: "あたたかいを届ける屋台",
      category1: "Entertainment",
      category2: "Student",
      issue: "寒さとコロナによる疲弊",
      issueContent: "2022年冬、COVID-19の影響で、身も心もあたたかさを失いつつあった。コロナウイルス感染に恐れながら満員電車に揺られ出勤する社会人、理想のキャンパスライフとはかけ離れたオンライン授業、行事ごとがことごとく中止になる高校生活。やるせない感情と、どうしようもならない現状との間に挟まれ、多くの人がそのギャップに疲弊していました。", solution: "「温度」「人」「色」で３度温まる味噌汁屋台", solutionContent: "学生や社会人が帰宅する夕刻に合わせて、温かい味噌汁を販売する屋台を動かしました。寒い日に自動販売機であったかい飲み物を購入した時の、あの「ホッ」とする体験を提供するべく、なんら普通の温かい味噌汁を販売。また１から屋台を制作し、どこか歪で、でもどこか親近感のある空間を作りました。デジタルな社会に包まれる今だからこそ、アナログ感溢れる体験を提供し、また屋台は、オレンジなどの暖色をメインに装飾して、安心感と温かさを演出しました。", 
      result: "温かいコミュケーションが飛び交うプラットフォームに",
      resultContent: "仕事帰りの方。SNSを見て駆けつけてくれた学生。貴社の方。ご近所さんとワンちゃん。 今まで会ったことも話したこともない人たちが、味噌汁と屋台を囲んで和気藹々と触れ合う空間がありました。 また味噌汁で使用された屋台は、他の学生や団体が「事業プラットフォーム」として活用しています。 NPO法人KOKOIMAと関西大学人間健康学部のゼミとの共催イベント、ストリートファッションショーの催し企画や、 東大阪市にあるシェアハウスTNKbase主催の、1から無農薬で作った焼き芋の販売や、菜の花を配るプロジェクトなど さまざまな企画や事業のプラットフォームの一つとして確立しました。", result2: "", resultContent2: "" 
    },

    {
      id: 4,
      title: "サンタ屋",
      subTitle: "みんなが幸せなクリスマスを",
      category1: "Entertainment",
      category2: "Student",
      issue: "クリスマスは恋人だけのハッピーイベントではない", issueContent: "クリスマスは恋人がとても楽しそうに過ごしています。美味しいディナーを食べて、お互いクリスマスプレゼントを交換し合い、恋人はとても和やかで大事な時間を過ごしているでしょう。ですが、恋人がいない人たちは？その時期になると「非リア」と言われ、SNSに妬みと開き直った投稿が飛び交います。クリスマスは毎月やってくる25日のうちの一つでしかない。恋人がいない人も恋人がいる人も、クリスマスという行事を楽しんでほしいと思いました。",
      solution: "恩送りの文化から生まれた誰もがサンタさんになれるキッチンカー",
      solutionContent: "12 / 25に、サンタクロースやトナカイの衣装を着た学生たちが、寒い聖夜の街を歩く人たちに、温かい飲み物でホッと温まる体験を提供し、そして、その売上で街行く子供たちにお菓子をプレゼントしました。この企画は、恩送りの文化を通して、クリスマスという行事をより多くの人に体験してもらい、より多くの人に「幸せだな」「いい一日だな」と感じてほしいという思いで始まりました",
      result: "子供たちの喜ぶ姿とそれを見守る大人たち", resultContent: "キッチンカーの周りには、未就学児から社会人という、幅広い年齢層の方たちによって賑わいました。 子供たちはお菓子を持ったサンタクロースの周りに集まり、両手が塞がるまでお菓子をかき集めている光景を、 学生や社会人が見守るというとても温かい空間がありました。 お客さんとして当イベントに来た学生の中には、急遽売り子を始める学生や、 サンタクロースの衣装を着て子供と会話を楽しむ学生など、単なる運営とお客さんという関わりで終わらず、 共に空間を作りながらイベントを楽しむことができました。", result2: "", resultContent2: "" 
    },

    {
      id: 5, title: "1stステッププロジェクト", subTitle: "誰かの一歩を応援する", category1: "Student", category2: "", issue: "", issueContent: "", solution: "", solutionContent: "", result: "", resultContent: "", result2: "", resultContent2: "" 
    }
  ];
  
    Projects.map((project) => {
      // userの情報
      const projectInfo = { id: project.id, title: project.title ,subTitle: project.subTitle };
    })
  
  return (
    <div>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-body mt-24 mb-20 w-9/12 m-auto'>
        <h1 className='text-center mb-12 text-4xl font-bold'>ALL PROJECT</h1>
        
          
        <div >
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
                image: project.image


              };
              return (
                
                  <div key={project.id} className='  mb-12'>
                <Link as={`/projects/${project.id}`}
                href={{ pathname: `/projects/[id]`, query: projectInfo }} ><a>
                      <Img src={`/${project.image}`} className='w-full' width={600} height={330} ></Img>
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
