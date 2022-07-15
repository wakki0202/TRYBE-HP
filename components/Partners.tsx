import Link from 'next/link';
import Image from 'next/image'

const Partners = () => (


  <div>
        <h1 className='pt-24 mb-12 text-4xl font-bold text-center '>Partners</h1>
        <ul className="  
 lg:grid lg:grid-cols-3 lg:gap-1 lg:flex-wrap">

          <li className="  mb-8 ">
            <Link
              href={`/members/yuta`} ><a><div className=''>
                <Image src={`/AnyConv.com__yuta.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>南湧太</p>
                <p className='text-gray-700 text-xs'>フォトグラファー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/taro`} ><a><div className=''>
                <Image src={`/AnyConv.com__taro.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>辻本太郎</p>
                <p className='text-gray-700 text-xs'>インフルエンサー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/jurin`} ><a><div className=''>
                <Image src={`/AnyConv.com__juri.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>藤本樹林</p>
                <p className='text-gray-700 text-xs'>映像プランナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/yutaka`} ><a><div className=''>
                <Image src={`/AnyConv.com__waki.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>森脇弓貴</p>
                <p className='text-gray-700 text-xs'>エンジニア</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/issei`} ><a><div className=''>
                <Image src={`/AnyConv.com__dai.webp`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>河内壱成</p>
                <p className='text-gray-700 text-xs'>プランナー</p>
              </a></Link></li>
          <li className="  mb-8 ">
            <Link
              href={`/members/taiki`} ><a><div className=''>
                <Image src={`/taiki.gif`} width={550} height={300} alt="" className='hover:opacity-50' />
              </div>
                <p className='text-black pb-1 font-bold'>今泉大輝</p>
                <p className='text-gray-700 text-xs'>プランナー</p>
              </a></Link></li>
          
        </ul>
      </div>


);

export default Partners;