import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper' //使いたい機能をインポート
SwiperCore.use([Pagination, Navigation, Autoplay])
// カルーセルにする画像のソースをリストにします

const Slider = () => {
  return (
  <div>
    <div className='hidden lg:block'>
    <Swiper
      slidesPerView={4} //一度に表示するスライドの数
      // pagination={{
      //   clickable: true,
      // }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
      //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false
      }
      }
      speed={4000}
    >
      <SwiperSlide>
        <Link href={`/projects/santa`}><a>
        <div className="mx-3 my-5 hover:opacity-50">
            <Image
              src={"/AnyConv.com__S__6185130.webp"}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </div>
        </a></Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/projects/yatai`}><a>
        <div className="mx-3 my-5 hover:opacity-50">
            <Image
              src={"/DSC02957.JPG"}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </div>
        </a></Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/projects/seishun`}><a>
        <div className="mx-3 my-5 hover:opacity-50">
            <Image
              src={"/AnyConv.com__DSC04710.webp"}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </div>
        </a></Link>
      </SwiperSlide>
        <SwiperSlide>
        <Link href={`/projects/jinro`}><a>
        <div className="mx-3 my-5 hover:opacity-50">
            <Image
                  src={"/AnyConv.com__IMG_6691.webp"}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </div>
        </a></Link>
      </SwiperSlide>
        </Swiper>
      </div>
      <div className='lg:hidden '>
        <Swiper
          slidesPerView={2} //一度に表示するスライドの数
          // pagination={{
          //   clickable: true,
          // }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
          //スライドを前後させるためのボタン、スライドの左右にある
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }
          }
          speed={4000}
        >
          <SwiperSlide>
            <Link href={`/projects/santa`}><a>
              <div className="mx-3 my-5 hover:opacity-50">
                <Image
                  src={"/AnyConv.com__S__6185130.webp"}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                />
              </div>
            </a></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`/projects/yatai`}><a>
              <div className="mx-3 my-5 hover:opacity-50">
                <Image
                  src={"/DSC02957.JPG"}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                />
              </div>
            </a></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`/projects/seishun`}><a>
              <div className="mx-3 my-5 hover:opacity-50">
                <Image
                  src={"/AnyConv.com__DSC04710.webp"}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                />
              </div>
            </a></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`/projects/jinro`}><a>
              <div className="mx-3 my-5 hover:opacity-50">
                <Image
                  src={"/AnyConv.com__IMG_6691.webp"}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                />
              </div>
            </a></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default Slider;












