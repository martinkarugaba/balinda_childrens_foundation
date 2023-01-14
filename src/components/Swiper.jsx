import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slideImages } from '../data/slider_data';

const Swiper = () => {
  const settings = {
    infinite: true,
    fade:true,
    autoplay:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="border-1 -mt h-[100%] border-gray-600">
      <Slider {...settings}>
        {/* slide 1 */}
        <div className="flex h-[100vh] w-[100%] flex-col items-center justify-end bg-[url('img/hero/girl_using_sewing_machine.JPG')] bg-cover">
          {/* slide content */}
          <div className="h-auto w-[60%] border">
            <h1 className="text-center text-[3rem] font-bold leading-snug uppercase text-white">
              Empowering the next generation, one child at a time.
            </h1>
          </div>
        </div>
        {/* slide 2 */}
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
          <h1>slide 2</h1>
        </div>
        {/* slide 3 */}
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
        <h1>slide 2</h1>

        </div>
        {/* slide 4 */}
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
          <h1>slide 3</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Swiper;
