import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import swiperInfo from '../data/slider_data';
import HeroInfo from './HeroInfo';

const Swiper = () => {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <div className="relative h-[100%]">
      <Slider {...settings}>
        <div className="h-[100vh] bg-[url('img/hero/girl_leaning_against_wall.JPG')] bg-cover"></div>
        <div className="h-[100vh] bg-[url('img/hero/girl_carrying_jerrycan.JPG')] bg-cover"></div>
        <div className="h-[100vh] bg-[url('img/hero/boy_tieng_cow.JPG')] bg-cover"></div>
        <div className="h-[100vh] bg-[url('img/hero/woman_sitted_with_children.JPG')] bg-cover"></div>
      </Slider>
      <HeroInfo />
    </div>
  );
};

export default Swiper;
