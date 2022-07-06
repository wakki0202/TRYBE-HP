import Img from 'next/image';
const About = () => (

  <div className='mt-32  font-body'>
    <h1 className='text-3xl lg:text-4xl font-bold mb-6 text-center lg:mb-12 '>About</h1>
    <h1 className=' text-2xl font-bold my-16 leading-normal  lg:text-5xl lg:leading-relaxed'>『好き』を好きだと言い続けられる社会へ</h1>
    <p className='text-lg lg:text-2xl  leading-relaxed font-semibold'>
      『TRYBE Inc.は学生起業である。』
    </p>
    <p className='text-md lg:text-xl mt-2 mb-8 leading-relaxed font-medium'>
      2020年12月、関西の6大学の学生が集まり起業しました。 プロジェクトメンバーには多様な学生を巻き込み、 関西だけでなく、関東にも活動の幅を広げています。
    </p>
    <p className='text-lg lg:text-2xl  leading-relaxed font-semibold'>
      『TRYBE Inc.は学生企業である。』
    </p>
    <p className='text-md lg:text-xl mt-2 mb-6 lg:mb-8 leading-relaxed font-medium'>
      私たちは学生のリアルタイムにコミットした企業です。 学生にわかりやすくためになる「教育」事業と、 学生がおもしろくたのしめる「エンタメ」事業と、 学生に求められる「ブランディング」事業を提供しています。
    </p>
    <div className='flex lg:mt-20  lg:flex-row flex-col-reverse'>
      <div className='lg:w-7/12 text-md'>
        <p className='mb-7'>
          自分のやりたいことは、やればいいってこと 自分の好きなことは、やればいいってこと そして、そんなこと言われなくても分かってるってこと。</p>
        <p className='mb-7'>大丈夫。ちゃんと伝わってる。</p>
        <p className='mb-7'>ただ、辞める理由がこの世には多すぎるんだよね。 お金・進路・家族の意見・周りからの評価。できなくなる理由があまりにも多いんだよね。</p>
        <p className='mb-7'>めちゃくちゃ分かってる。</p>
        <p className='mb-7'>ただ、もし、君が、「本当に好きなことをやりたいなら」</p>
        <p className='mb-7'>君がそれを望むなら、 君がそれを喜んでくれるのなら、 君の一日、いや一時間を僕たちに預けてほしい。</p>
        <p className='mb-7'>君の「好き」ができなくなる その理由を、僕たちが全力でぶっ潰します。</p >
        <p>『好きなことを好きだと言える社会へ』</p>
      </div>
      <div className='lg:w-5/12 mb-16 text-center hidden lg:block'>
        <Img src="/AnyConv.com__threeValue.webp" width={850} height={700}></Img>
      </div>
      <div className='lg:w-5/12 mb-16 text-center lg:hidden'>
        <Img src="/AnyConv.com__threeValue.webp" width={600} height={500}></Img>
      </div>
    </div>
  </div>
);
export default About;