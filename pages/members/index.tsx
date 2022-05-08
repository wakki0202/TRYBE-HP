import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Member from '../../components/Member'
import Link from 'next/link'

const Home: NextPage = () => {
  const members = [
    {
      id: 1,
      name: "山口陽",
      nameRoma:"Hinata Yamaguchi",
      position: "代表/企画屋",
      image: "AnyConv.com__hinata.webp",
      introduction:"2000年生まれ。株式会社TRYBE代表。 高校時代に企画したカードゲーム「人狼コロシアム」を、クラウドファンディングサイトCAMP FIREにて196万円の資金調達を機に、大学在学中に株式会社TRYBEを設立。小学生の頃から、たくさんのゲームや遊びを開発してきた経験をもとに、「遊びごころ」と「ユーモア」溢れる企画を立案する企画屋。学生のリアルに寄り添い、学生の今にコミットする企画を得意とする。",
      achievement: "株式会社インシーク主催「Intelligent Challenge」でヒッチハイクの民主化をテーマにした企画でアイデア賞。LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。アイデアコンペ「Evolve」で、会社クイズ採用システムからプロモーションを企画し、優勝。クラウドファンディングコンサルタントで4度の成功実績。「クリエイティブスクール」の企画・運営。関西大学「起業部」発起人。「セキスイカルタ」の企画。",
      tel: "TEL：080-6103-9185",
      email:"Email：h_yamaguchi@trybe.co.jp"
    },
    {
      id: 2,
      name: "山本健太",
      nameRoma: "Kenta Yamamoto",
      position: "取締役/クリエイティブディレクター",
      image: "AnyConv.com__ken.webp",
      introduction: "2000年生まれ。株式会社TRYBE副代表。 『背景ある創作物に囲まれた生活を送る』を信条に、言葉による表現を得意とし、 企画とコピーライトの両論でクリエイティブディレクションを行う。広告にも取り組んでおり、日々SNS(主にInstagram)を通して、世の中に溢れた広告を読み解きより分かりやすく発信する「広告妄想論」を学生に発信している。また、多くの組織との接点となるマネージャーとしての一面も持つ。",
      achievement: "社会福祉法人「基弘会」のアイデアコンテストで、3kを学生×お年寄りで塗り替えるアイデアを企画し、優勝。LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。 大阪、東京で開催した「青春奪還作戦」の総合プロデューサー。「屋台プロジェクト」、「セキスイカルタ」、「Kids tech EXPO」、「ロボットストリート」の企画。東南アジア9都市をバックパックで一周。",
      tel: "TEL：080-9608-6400",
      email: "Email：k_yamamoto@trybe.co.jp"
    },
    {
      id: 3,
      name: "稲田創太",
      nameRoma: "Sota Inada",
      position: "取締役/ディレクター",
      image: "AnyConv.com__ina.webp",
      introduction: "2000年生まれ。株式会社TRYBE取締役。 イラスト、デザイン、写真、映像などのクリエイティブ業務の企画から編集まで一貫して行うディレクター。またエンタメ事業全体のディレクション、バックオフィス業務、その他事業の企画立案、バックオフィス業務なども手がけ、枠やジャンルに収まらない役割を担う。学生が運営している他の組織・団体・法人との接点となり、マネージャーとしての役割も担っている。",
      achievement: "「関西大学フェスティバルin関西」のロゴコンペにて、ロゴ制作をディレクションし、優勝。アイデアコンペ「Evolve」で、会社クイズ採用システムからプロモーションを企画し、優勝。「屋台プロジェクト」、「サマーキャンパス」、「サンタ屋」の企画。「人狼コロシアム」、「アウトドアボードゲーム」、自社ブランディングのディレクション。「人狼コロシアム」「青春奪還作戦」のPVの企画、撮影、編集。",
      tel: "TEL：080-4484-0979",
      email: "Email：s_inada@trybe.co.jp"
    },
    {
      id: 4,
      name: "戸澤愛梨",
      nameRoma: "Airi Tozawa",
      position: "取締役/デザイナー",
      image: "AnyConv.com__ai.webp",
      introduction: "2000年生まれ。株式会社TRYBE取締役。 彼女はデザイナーとVtuberという二つの顔を持つ異色のクリエイター。デザイン業務は『クライアントに寄り添う』をモットーに取り組んでおり、ロゴデザイン、YouTube のサムネイル制作、資料作成を行っている。Vtuberとしての活動も、独自のデザイン性を売りにして、毎日配信を続けることで根強いファンを作っている。",
      achievement: "V liveアプリ「IRIAM」にて、月間ランキング1位を受賞。「関西大学フェスティバルin関西」のロゴコンペにて、ロゴデザインを担当し、優勝。 ",
      tel: "TEL：080-1456-6691",
      email: "Email：a_tozawa@trybe.co.jp"
    },
    {
    id: 5,
      name: "松下峻輔",
      nameRoma: "matsushita shunsuke",
      position: "プランナー",
      image: "AnyConv.com__shun.webp",
      introduction: "2000年生まれ。株式会社TRYBEメンバー。 企画を立案から実行まで行うプランナー。リスクマネジメント能力やコミュニケーション能力に長けており、現場のスピード感や温度感を汲み取りながら、リスクヘッジやモチベーション管理なども行う。面白そうなことに敏感で、まずはやってみる精神を持ち合わせており、すぐ企画・すぐリリースを徹底したプランニングとマネジメントを行う。",
      achievement: "LIFULL×VMKアクセラレータープログラム「OPEN SWITCH」で、ゲームからコミュニティへの流入モデルを企画し、優勝。2021年クリスマス、梅田にて「サンタ屋」の企画運営。「人狼コロシアム」、「アウトドアボードゲーム」の企画。",
      tel: "TEL：070-6688-2583",
    email: "Email：s_matsushita@trybe.co.jp"
    },
    {
      id: 6,
      name: "井上友聖",
      nameRoma: "inoue yusei",
      position: "プランナー",
      image: "AnyConv.com__yu.webp",
      introduction: "2001年生まれ。株式会社TRYBEメンバー。 「変化や速さを求められる世の中で、自分の世界を大切に生きれる人を教育する」をモットーに、学生のメンターや起業家育成、企業のコンサルタントや、タレントのプロデュースなどの教育事業を中心に多岐にわたる役割を担っている。自身で企画立案も行っており、山を買うことを最終目標に「林間学校」という学生向けのキャリアイベントを運営している。",
      achievement: "中学2年生時、仮想通貨に手をつけ101万円の利益を出す。当時のUSJの部長と「学生団体ZONE」を共同代表。企業コンサル2社、タレントやプロスポーツ選手の人生設計、セカンドキャリア支援、事業設計を請け負う。ディズニーライブにてキッズダンサーの経験あり。「林間学校」企画運営。",
      tel: "TEL：080-3863-6557",
      email: "Email：y_inoue@trybe.co.jp"
    },
    {
      id: 7,
      name: "南湧太",
      nameRoma: "minami yuta",
      position: "カメラマン",
      image: "AnyConv.com__yuta.webp",
      introduction: "1999年生まれ。TNK BASEシェアハウスの運営。 「No camera cameraman Yuta」の名で、写真撮影を中心に映像撮影・編集などのカメラマンとしての活動を主に行なっている。また建築学を活かした空間デザインや、リノベーション設計を中心に人と建物、人と街、人と人を繋ぐ建築プランナーを目指し日々活動している。TNK BASEでは空間設計やリノベーションとしての役割を担っている。",
      achievement: "中崎町にある古着屋moreの店舗設計。神戸の北野異人館のインテリアデザインやDIYを担当。「人狼コロシアム」special movieの撮影・編集・監督。",
      tel: "TEL：080-6208-7996",
      email: "Email：y_minami@trybe.co.jp"
    },
    {
      id: 8,
      name: "辻本太郎",
      nameRoma: "tujimoto taro",
      position: "インフルエンサー",
      image: "AnyConv.com__taro.webp",
      introduction: "1999年生まれ。TNK BASE シェアハウスの代表。 元バイク屋の空き地をリノベーションし、「TNK BASE」を立ち上げた発起人。視覚芸術を得意とし、文章や写真やアートを通して、多くの若者に影響を与えられる「発信力」と「人望」を持つ。また、旅人という側面もあり、TNK  BASEには日々新しい旅人が集まってくる。自身も全国各地を旅して回りながらイベントを開催している。",
      achievement: "世界一周の夢を叶えるコンテスト 「DREAM」のファイナリスト。「海辺の映画祭」を主催。「日本一周×野外シネマ」の企画運営。 ",
      tel: "TEL：090-4973-4455",
      email: "Email：crossbook0504@icloud.com"
    },
    {
      id: 9,
      name: "藤本樹林",
      nameRoma: "hujimoto jurin",
      position: "映像プランナー",
      image: "AnyConv.com__juri.webp",
      introduction: "2000年生まれ。映像制作団体fulfilMの代表。 『主人公になりやがれ』というfulfilMの理念のもと、若者が一歩目を踏み出すきっかけの一つになるような映像制作を行っている。また、大阪府堺市を中心としたまちづくりや、学生を応援する雑誌制作、イベント企画などにも取り組んでいる。Instagram運用のコンサルなども行い、若者向けに映像を中心とした事業を展開している。",
      achievement: "映像イベント「The shooting Day」企画運営。「人狼コロシアム」、「青春奪還作戦」の公式PVの企画・監督。「高校生百貨店」企画。映像作品のTikTok総再生回数は100万回を超える。",
      tel: "TEL：080-5630-6705",
      email: "Email：jjsoccer1006@gmail.com"
    },
    // {
    //   id: 10,
    //   name: "今泉大輝",
    //   nameRoma: "imaizumi taiki",
    //   position: "プランナー",
    //   image: "",
    //   introduction: "",
    //   achievement: "",
    //   tel: "TEL：080-6927-4020",
    //   email: "Email：t_imaizumi@trybe.co.jp"
    // },
    {
      id: 11,
      name: "畑野悠人",
      nameRoma: "hatano haruto",
      position: "ゲームプランナー",
      image: "AnyConv.com__hata.webp",
      introduction: "2000年生まれ。 「人狼コロシアム」や「アウトドアボードゲーム」などのボードゲーム・カードゲーム事業を担う。『人生没頭する』をテーマに、誰もが心の底からハマる遊びを日々研究中。自身がカードゲームが大好きであり、今まで遊び込んだ知識経験を活かし、新しい物を生み出していく。また自分の経験に驕らず、市場調査から顧客のリアルの声を汲み取り、ユーザーの目線に立った企画を行う。",
      achievement: "よさこい団体「飛舞人」の15代目代表。「人狼コロシアム」、「アウトドアボードゲーム」の企画。",
      tel: "TEL：080-2278-3755",
      email: "Email：h_hatano@trybe.co.jp"
    },
    {
      id: 12,
      name: "森脇弓貴",
      nameRoma: "moriwaki yutaka",
      position: "エンジニア",
      image: "AnyConv.com__waki.webp",
      introduction: "2001年生まれ。エンジニア団体si-cleのエンジニア担当。 主に企業のWebサイトやECサイトのコーディングを行っている。ただ単にコードを書いて終わりではなく、常日頃からユーザー目線に立つことにこだわっている。どんなに複雑なプログラムでも、機能するまでやりきる根性を持ち合わせている。また、エンジニアの枠組みに収まらず、経営の学習に取り組むなど、とても好奇心旺盛である。",
      achievement: "Webサービス「口コミ複行パラキャリ」の制作。アパレルECサイト「Maison a la mode」の制作。株式会社TRYBEのWebサイト制作。",
      tel: "TEL：090-6985-6766",
      email: "Email：ytk0202@outlook.jp"
    },
    {
      id: 13,
      name: "中島秀時",
      nameRoma: "nakajima hidetoki",
      position: "プランナー",
      image: "AnyConv.com__hide.webp",
      introduction: "2002年生まれ。学生キャリア支援団体SONIA代表。 高校生を中心とした若者に対して企画立案を行うプランナー。自身では「ビジョンプロジェクト」という、進路に悩む高校生に対して、交流やロールモデル、トークセッションができる3ヶ月間のオンラインプログラムを運営している。他にも多くのオンラインイベントの企画や、リアルイベントのワークショップの企画運営などを手掛けてきた。",
      achievement: "iU主催ピッチコンテスト「デモデイ」優勝。フジテレビ公式YouTube「シゴトズキ」動画企画。東京「青春奪還作戦」企画運営。「HANEDA STEAM LAB」運営。",
      tel: "TEL：080-2480-9659",
      email: "Email：h_nakajima@trybe.co.jp"
    },
    {
      id: 14,
      name: "河内壱成",
      nameRoma: "Kawachi issei",
      position: "プランナー",
      image: "AnyConv.com__dai.webp",
      introduction: "2000年生まれ。 客観的なクリティカルシンキングを持つプランナー。話に入り込みすぎないスタンスで常に客観視した意見を持ち合わせ、かつ芸術やアートなどの創作物に日々囲まれ、独自の感性を備えているため、批判的だがどこか真新しいようなアイデアを生み出すことができる。現在は就職活動中。",
      achievement: "寺でカプレーゼを作る「寺カプレーゼ」の主催。「青春奪還作戦」企画。 センター試験世界史満点。",
      tel: "",
      email: "Email：i_kawachi@trybe.co.jp"
    },]
  
  members.map((member) => {
    // memberの情報
    const memberInfo = {
      id: member.id,
      name: member.name,
      position: member.position,
      image: member.image,
      introduction: member.introduction,
      achievement: member.achievement,
      tel: member.tel,
      email: member.email
    };
  })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-100'> 
        <div className='w-9/12 m-auto pb-14 '>
          <h1 className='pt-24 mb-12 text-4xl font-bold text-center '>ALL MEMBER</h1>
        <ul className="  
 lg:grid lg:grid-cols-3 lg:gap-1 lg:flex-wrap">
            {members.map((member) => {
              // memberの情報
              const memberInfo = {
                id: member.id,
                name: member.name,
                position: member.position,
                nameRoma: member.nameRoma,
                image: member.image,
                introduction: member.introduction,
                achievement: member.achievement,
                tel: member.tel,
                email: member.email
              }; return (
                <li key={member.id} className="  mb-8 ">
                  <Link as={`/members/${member.id}`}
                    href={{ pathname: `/members/[id]`, query: memberInfo }} ><a><div className=''>
                      <Image src={`/${member.image}`} width={550} height={300} alt="" className='hover:opacity-50' />
                  </div>
                  <p className='text-black pb-1 font-bold'>{member.name}</p>
                  <p className='text-gray-700 text-xs'>{member.position}</p>
                    </a></Link></li>);
              
            })}
          </ul>
        </div>
      </main>


    </div>
  )
}

export default Home
