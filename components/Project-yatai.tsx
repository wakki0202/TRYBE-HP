import Link from 'next/link';
import Img from 'next/image'

const Yatai = () => (


                <div className='  mb-12'>
                    <Link href={`/projects/yatai`} ><a>
                    <div className='w-full block hover:opacity-50'>
                    <Img src={`/misosirutop_1.JPG`} width="800" height="450" className='block'></Img> 
                    </div>
                    
                      
                      <div className="mt-2">
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">Student</p>
                        <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">Education</p>
                        <h1 className="font-bold text-2xl py-3">屋台プロジェクト</h1>
                        <h2 className="font-medium text-md">あたたかいを届ける屋台</h2>
                        <p className="pt-5 font-normal">And more</p>
                      </div>
                    </a>
                    </Link>
                  </div>


);

export default Yatai;