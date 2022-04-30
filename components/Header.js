import Link from 'next/link';

const Header = () => (
  <div>

    <nav className="flex items-center  flex-wrap bg-teal-500 p-6">
      <div className="flex  flex-shrink-0 text-white ">

        <span className="font-semibold text-xl tracking-tight">TRYBE.inc</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block ml-3 flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">

        </div>
        <div>
          <Link href={"/"}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Top
          </a></Link>
          <Link href={"/about"}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a></Link>
          <Link href={"/projects"}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Projects
          </a></Link>
          <Link href={"/members"}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Members
          </a></Link>
          <Link href={"/contact"}><a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
            </a></Link>
        </div>
      </div>
    </nav>

  </div>

);

export default Header;