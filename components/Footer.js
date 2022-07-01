import Link from 'next/link';

const Footer = () => (
  <div>

    <nav className=" bg-black  text-white pt-5 ">
      <div className='text-center'>
        <h1 className='text-2xl '>TRYBE.inc</h1>
      </div>
      <div >
        <div className=''>
          <ul className=' lg:flex lg:justify-center mt-5'>
            <Link href={"/"}><a><li className='px-2 hover:text-blue-400'>Top</li></a></Link>
            <Link href={"/about"}><a><li className='px-2 hover:text-blue-400'>About</li></a></Link>
            <Link href={"/projects"}><a><li className='px-2 hover:text-blue-400'>Projects</li></a></Link>
            <Link href={"/members"}><a><li className='px-2 hover:text-blue-400'>Members</li></a></Link>
            <Link href={"/mail"}><a><li className='px-2 hover:text-blue-400'>Contact</li></a></Link>
          </ul>
        </div>
      </div>
      <div>
        <p className='text-center text-xs border-t border-gray-700 pt-1 pb-1 mt-8'>© 2019 TRYBE Inc.</p>
      </div>
    </nav>

  </div>

);

export default Footer;