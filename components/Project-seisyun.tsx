import Link from 'next/link';
import Img from 'next/image'

const Seishun = () => (


  <div className='  mb-12'>
    <div className='lg:block hidden'>
      <iframe width="100%" height="320" src="https://www.youtube.com/embed/YMZNYzhbY_s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
    <div className='lg:hidden'>
      <iframe width="100%" height="180" src="https://www.youtube.com/embed/YMZNYzhbY_s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
    <Link href={`/projects/seishun`} ><a>
      <div className=' grid grid-cols-2 gap-2 pt-2'>
        <Img src={`/seishuntop-1.jpg`} className='w-full hover:opacity-50' width={600} height={380} ></Img>
        <Img src={`/seishuntop-2.jpg`} className='w-full hover:opacity-50' width={600} height={380} ></Img>
      </div>
      <div className="mt-2">
        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Education</p>
        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Entertainment</p>
        <h1 className="font-bold text-2xl py-3">青春奪還作戦</h1>
        <h2 className="font-medium text-md">もしも一度だけ、あの日に戻れるのなら</h2>
        <p className="pt-5 font-normal">AAnd more</p>
      </div>
    </a>
    </Link>
  </div>


);

export default Seishun;