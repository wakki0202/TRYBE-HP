import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Img from 'next/image'
import Link from 'next/link'
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
// ページコンポーネントの引数の型定義
type StatusPageProps = { id: string; title: string }
// サーバーサイドでの前処理を行う関数
export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<StatusPageProps>> => {
  // context経由でブラウザから送信されたパラメーターを受け取る
  const { id, title } = context.query
  // 受け取ったパラメーターが意図した型でなければnotfoundページとして処理する
  if (typeof id !== 'string') {
    return { notFound: true }
  }
  if (typeof title !== 'string') {
    return { notFound: true }
  }
  // 受け取ったパラメータに問題がなければStatusPagePropsを返す
  return { props: { id, title } }
}
const StatusPage: NextPage<StatusPageProps> = (props) => {
  const router = useRouter();
  return (
    <div className='w-10/12 lg:w-8/12 m-auto'>
      <h1 className='font-bold text-3xl pt-16 pb-2'>{props.title}</h1>
      <h3 className='pb-8'>{router.query.subTitle}</h3>
      <Img src={`${router.query.image1}`} width={900} height={500}></Img>
      <div className='lg:flex pt-10'>
        <div className=' lg:w-2/12 '>
          <h1 className='text-4xl pb-2 lg:pb-0 lg:text-2xl font-bold text-gray-400'>What</h1>
        </div>
        <div className='pb-14 lg:w-10/12'>
          <h1 className='text-xl font-bold pb-5'>{router.query.what}</h1>
          <p className='text-md leading-relaxed pb-8'>{router.query.whatContent}</p>
          <p className='text-md leading-relaxed pb-24'>{router.query.whatContent2}</p>
        </div>
      </div>
      <div className='flex pt-24 pb-32 list-none'>
        <div className='w-6/12 lg:w-3/12 text-md'>
          <h1 className=' text-2xl font-bold text-gray-400'>Link</h1>
          <li className='pt-3 border-b pb-1'><a href="https://sites.google.com/view/jinrocolosseum/">ウェブサイト</a></li>
          <li className='pt-3 border-b pb-1'><a href="https://camp-fire.jp/projects/view/243888">クラウドファンディング</a></li>
          <li className='pt-3 border-b pb-1'><a href="https://jinclo.base.shop/categories/2721013">ショップ</a></li>
        </div>
        <div className='w-6/12 lg:w-3/12 list-none ml-10'>
          <h1 className=' text-2xl font-bold text-gray-400'>Pertoner</h1>
          <li className='pt-3'><a href="https://www.daiko-printing.co.jp/">大興印刷株式会社</a></li>
          <li className='pt-3'><a href="https://lit.link/haraceleb">原セレブ</a></li>
        </div>
      </div>
    </div>
  )
}
export default StatusPage;