import Link from 'next/link';
import Img from 'next/image'

const Service = () => (

    <div>

      <div className='mt-20 lg:mt-32 w-10/12 lg:w-9/12 m-auto'>

        <div className=' mb-10'><h1 className='text-2xl lg:text-4xl font-bold lg:text-center'>OUR SERVICE</h1></div>

        <div className='flex'>

          <div className='w-3/12 m-auto text-center'>
            <Img src="/education.jpg" alt="" width={200} height={200} className="hover:opacity-50 " />
            <h1 className='text-lg lg:text-4xl font-bold mb-5 lg:text-center'>
              <span className='border-b-2 border-black'>Education</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          </div>

          <div className='w-3/12 m-auto text-center'>
            <Img src="/plannning.png" alt="" width={200} height={200} className="hover:opacity-50 " />
            <h1 className='text-lg lg:text-4xl font-bold mb-5 lg:text-center'>
              <span className='border-b-2 border-black'>Creative</span>
            </h1>
            <p className='line-relaxed lg:text-lg text-sm'>
            </p>
          </div>

        <div className='w-3/12 m-auto text-center pt-5'>
            <Img src="/branding.jpg" alt="" width={180} height={180} className="hover:opacity-50 " />
            <h1 className='text-lg lg:text-4xl font-bold mb-5 lg:text-center'>
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