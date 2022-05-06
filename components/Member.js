import Image from 'next/image'

const Member = () => (
  <li className="  mb-8 ">
    <div className='border border-gray-300'>
      <Image src="/AnyConv.com__hinata.webp" width={500} height={300} alt="" className='hover:opacity-50' />
    </div>
    <p className='text-black py-1'>山口陽</p>
    <p className='text-gray-700 text-xs'>代表/企画屋</p>
  </li>

);

export default Member;