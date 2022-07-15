import Link from 'next/link';
import Image from 'next/image'

const Members = () => (


  <div>

        <h1 className='pt-24 mb-12 text-4xl font-bold text-center '>Members</h1>
        <ul className="  
 lg:grid lg:grid-cols-3 lg:gap-1 lg:flex-wrap">
          
              <li className="  mb-8 ">
                <Link
                  href={`/members/hinata`} ><a><div className=''>
                <Image src={`/AnyConv.com__hinata.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
                  </div>
                <p className='text-black pb-1 font-bold'>山口陽</p>
                <p className='text-gray-700 text-xs'>代表/企画屋</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/kenta`} ><a><div className=''>
                <Image src={`/AnyConv.com__ken.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>山本健太</p>
                <p className='text-gray-700 text-xs'>取締役/クリエイティブディレクター</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/sota`} ><a><div className=''>
                <Image src={`/AnyConv.com__ina.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>稲田創太</p>
                <p className='text-gray-700 text-xs'>取締役/ディレクター</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/airi`} ><a><div className=''>
                <Image src={`/AnyConv.com__ai.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>戸澤愛梨</p>
                <p className='text-gray-700 text-xs'>取締役/デザイナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/shunsuke`} ><a><div className=''>
                <Image src={`/AnyConv.com__shun.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>松下峻輔</p>
                <p className='text-gray-700 text-xs'>プランナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/yusei`} ><a><div className=''>
                <Image src={`/AnyConv.com__yu.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>井上友聖</p>
                <p className='text-gray-700 text-xs'>プランナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/hidetoki`} ><a><div className=''>
                <Image src={`/AnyConv.com__hide.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>中島秀時</p>
                <p className='text-gray-700 text-xs'>プランナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/haruto`} ><a><div className=''>
                <Image src={`/hata.gif`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>畑野悠人</p>
                <p className='text-gray-700 text-xs'>ゲームプランナー</p>
              </a></Link></li>
        </ul>
      </div>



);

export default Members;