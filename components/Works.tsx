import Link from 'next/link';
import Img from 'next/image'

const Works = () => (


  <div className=''>

    <h1 className='text-center mb-12 text-4xl font-bold'>Works</h1>
    <div>
      <div className='grid lg:grid-cols-2 gap-2'>
       
          
            <div  className='  mb-12'>

              <Link href={"/works/robotstreet"} ><a>
                <div className='w-full'>
              <Img src={"/rs_pc_top.jpg"} width="800" height="450" className='hover:opacity-50'></Img>
                </div>
                <div className="mt-2">
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Plannning</p>
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
              <h1 className="font-bold text-2xl py-3">ロボットストリート</h1>
                  <p className="pt-5 font-normal">And more</p>
                </div>
              </a>
              </Link>
            
            </div>
        
        <div className='  mb-12'>

          <Link href={"/works/sekisuikaruta"} ><a>
            <div className='w-full'>
              <Img src={"/sekisui.jpg"} width="800" height="450" className='hover:opacity-50'></Img>
            </div>
            <div className="mt-2">
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Plannning</p>
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
              <h1 className="font-bold text-2xl py-3">セキスイカルタ</h1>
              <p className="pt-5 font-normal">And more</p>
            </div>
          </a>
          </Link>

        </div>

        <div className='  mb-12'>

          <Link href={"/works/kidsexpo"} ><a>
            <div className='w-full'>
              <Img src={"/S__50216973.jpg"} width="800" height="450" className='hover:opacity-50'></Img>
            </div>
            <div className="mt-2">
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Plannning</p>
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
              <h1 className="font-bold text-2xl py-3">Kids tech EXPO</h1>
              <p className="pt-5 font-normal">And more</p>
            </div>
          </a>
          </Link>

        </div>

        <div className='  mb-12'>

          <Link href={"/works/crowdfoundconsulting"} ><a>
            <div className='w-full'>
              <Img src={"/cf_thum.png"} width="800" height="450" className='hover:opacity-50'></Img>
            </div>
            <div className="mt-2">
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Corporate</p>
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Education</p>
              <h1 className="font-bold text-2xl py-3">クラファンコンサル</h1>
              <p className="pt-5 font-normal">And more</p>
            </div>
          </a>
          </Link>

        </div>

        <div className='  mb-12'>

          <Link href={"/works/careermeeting"} ><a>
            <div className='w-full border'>
              <Img src={"/S__51306542.jpg"} width="800" height="450" className='hover:opacity-50 '></Img>
            </div>
            <div className="mt-2">
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Student</p>
              <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Education</p>
              <h1 className="font-bold text-2xl py-3">Career Meeting</h1>
              <p className="pt-5 font-normal">And more</p>
            </div>
          </a>
          </Link>

        </div>
      </div>
    </div>
  
  </div>


);

export default Works;