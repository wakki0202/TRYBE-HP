import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper' //使いたい機能をインポート
SwiperCore.use([Pagination, Navigation, Autoplay])
// カルーセルにする画像のソースをリストにします
const images = [
  '/AnyConv.com__S__6185130.webp',
  '/DSC02957.JPG',
  '/AnyConv.com__DSC04710.webp',
  '/AnyConv.com__IMG_6691.webp',
  '/AnyConv.com__IMG_0164.webp'
]
const TestCarousel = () => {
  return (
    <Swiper
      slidesPerView= { 4} //一度に表示するスライドの数
  // pagination={{
  //   clickable: true,
  // }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
  //スライドを前後させるためのボタン、スライドの左右にある
  loop = { true}
  autoplay = {{
    delay: 1,
      disableOnInteraction: false
  }
}
speed = { 4000}
  >
{
  images.map((src: string, index: number) => {
    return (
      <SwiperSlide key= {`${index}`
  }>
  <div className="mx-5 my-5 hover:opacity-50" >
  <Image
                src={ src }
                layout = "responsive"
                width = { 640}
                height = { 400}
                alt = "test_image"
    />
    </div>
    </SwiperSlide>
  )
})}
</Swiper>
  )
}
export default TestCarousel;












