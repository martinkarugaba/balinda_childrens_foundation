import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slideImages } from '../data/slider_data';

const Swiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[100%] border-1 border-gray-600">
      <Slider {...settings}>
        <div className="h-[100%] w-[100%] border-2 border-green-700">
          <h1>slide 1</h1>
        </div>
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
          <h1>slide 2</h1>
        </div>
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
          <h1>slide 3</h1>
        </div>
        <div className="h-[100%] w-[100%] border-2 border-orange-700">
          <h1>slide 4</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Swiper;
