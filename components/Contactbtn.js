import Link from 'next/link';

const Contactbtn = () => (
  <div>
    <Link href={"/mail"}><button type="button" className="border border-gray-300 rounded py-3 px-12 lg:py-6 lg:px-48 font-semibold hover:bg-[#4a9ed8] hover:text-white duration-200">お問い合わせはこちら</button></Link>

  </div>

);

export default Contactbtn;