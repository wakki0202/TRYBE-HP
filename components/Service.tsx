import Link from 'next/link';
import Img from 'next/image'

const Service = () => (

    <div>

      <div className='mt-20 lg:mt-32 w-10/12 lg:w-9/12 m-auto'>

        <div className=' mb-10'><h1 className='text-3xl lg:text-4xl font-bold text-center'>Service</h1></div>

      <div className='grid lg:grid-cols-3 gap-10 '>

        <div className=' text-center lg:border-4 lg:py-5 '>
          <div className=''>
            <Img src="/education.jpg" alt="" width={150} height={150} className="hover:opacity-50 " />
          </div>
          <h1 className='text-3xl font-bold mb-5 tracking-wider'>
              <span className='border-black '>Education</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          <div className='text-center'>
            <ul className='text-sm inline-block'>
              <li className='text-center'>企業コンサル</li>
              <li className='text-center'>起業支援</li>
              <li className='text-center'>クラウドファンディングコンサル</li>
            </ul>
          </div>
          </div>

        <div className='text-center lg:border-4 lg:py-5 '>
          <div className=''>
            <Img src="/creative.jpg" alt="" width={150} height={150} className="hover:opacity-50 " />
          </div>
          
          <h1 className='text-3xl font-bold mb-5 tracking-wider'>
              <span className=' border-black '>Creative</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
          </p>
          <div className=''>
            <ul className='text-sm inline-block'>
              <li className='text-center'>映像</li>
              <li className='text-center'>写真</li>
              <li className='text-center'>デザイン</li>
              <li className='text-center'>イラスト</li>
              <li className='text-center'>Web</li>
              <li className='text-center'>コピーライト</li>
            </ul>

          </div>
          </div>

        <div className='text-center lg:border-4 py-5 '>
          <div className=''>
            <Img src="/plannning.png" alt="" width={150} height={150} className="hover:opacity-50 " />
          </div>
       
          <h1 className='text-3xl font-bold mb-5 tracking-wider'>
              <span className=' border-black'>Planning</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
          </p>
          <div className='text-center'>
            <ul className='text-sm inline-block'>
              <li className='text-center'>イベント企画</li>
              <li className='text-center'>コンテンツ企画・開発</li>
              <li className='text-center'>サービス開発</li>
            </ul>
          </div>
        </div>
        
        


        </div>

      </div>

    </div>

);

export default Service;