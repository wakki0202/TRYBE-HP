import Link from 'next/link';
import Img from 'next/image'

const Jinro = () => (

  
    <div className='mb-12'>
      
    <Link href={`/projects/jinro`} ><a>
      <div className='w-full'>
        <div className='bg-black hover:bg-gray-600 text-white lg:h-80 h-48 text-center text-2xl lg:text-3xl align-middle flex justify-center items-center'><p className='flex justify-center items-center font-bold leading-10'>Jinro Colosseum PV <br />Coming Soon</p></div>
      </div>
        <div className=' grid grid-cols-2 gap-2 pt-2 '>
        <Img src={`/jinrotop1.jpg`} className='w-full hover:opacity-50' width={600} height={380} ></Img>
        <Img src={`/jinrotop2.JPG`} className='w-full hover:opacity-50' width={600} height={380} ></Img>
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


);

export default Jinro;