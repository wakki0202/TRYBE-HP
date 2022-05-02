import Link from 'next/link';

const Contactbtn = () => (
  <div>
    <Link href={"/contact"}><button type="button" className="border border-black rounded py-6 px-48 font-semibold hover:bg-black hover:text-white duration-200">お問い合わせはこちら</button></Link>

  </div>

);

export default Contactbtn;