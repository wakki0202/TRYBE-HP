import Link from 'next/link';

const Footer = () => (
  <div>

    <nav className=" bg-black  text-white">
      <div className='text-center'>
        <h1 className='text-2xl '>TRYBE.inc</h1>
      </div>
      <div >
        <div className=''>
          <ul className=' lg:flex lg:justify-center mt-3'>
            <li className='px-2'>Top</li>
            <li className='px-2'>About</li>
            <li className='px-2'>Contact</li>
          </ul>
        </div>
      </div>
    </nav>

  </div>

);

export default Footer;