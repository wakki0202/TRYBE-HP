import Link from 'next/link';
import Img from 'next/image'

const Service = () => (

    <div>

      <div className='mt-20 lg:mt-32 w-10/12 lg:w-9/12 m-auto'>

        <div className=' mb-10'><h1 className='text-4xl lg:text-4xl font-bold text-center'>SERVICE</h1></div>

        <div className='lg:flex'>

        <div className='lg:w-3/12 m-auto text-center'>
          <div className='lg:block hidden'>
            <Img src="/education.jpg" alt="" width={200} height={200} className="hover:opacity-50 " />
          </div>
          <div className='lg:hidden'>
            <Img src="/education.jpg" alt="" width={400} height={400} className="hover:opacity-50 " />
          </div>
            <h1 className='text-2xl lg:text-4xl font-bold mb-5 lg:text-center'>
              <span className='border-b-2 border-black'>Education</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          </div>

        <div className='lg:w-3/12 m-auto text-center'>
          <div className='lg:block hidden'>
            <Img src="/creative.jpg" alt="" width={200} height={200} className="hover:opacity-50 " />
          </div>
          <div className='lg:hidden'>
            <Img src="/creative.jpg" alt="" width={400} height={400} className="hover:opacity-50 " />
          </div>
            <h1 className='text-2xl lg:text-4xl font-bold mb-5 lg:text-center'>
              <span className='border-b-2 border-black'>Creative</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          </div>

        <div className='lg:w-3/12 m-auto text-center pt-5'>
          <div className='lg:block hidden'>
            <Img src="/plannning.png" alt="" width={200} height={200} className="hover:opacity-50 " />
          </div>
          <div className='lg:hidden'>
            <Img src="/plannning.png" alt="" width={300} height={300} className="hover:opacity-50 " />
          </div>
            <h1 className='text-2xl lg:text-4xl font-bold mb-5 lg:text-center'>
              <span className='border-b-2 border-black'>Planning</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          </div>

        </div>

      </div>

    </div>

);

export default Service;