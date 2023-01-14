import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Swiper = () => {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
  };
  return (
    <div className="border-1 h-[100%] border-gray-600">
      <Slider {...settings}>
        <div className="h-[100vh] bg-[url('img/hero/girl_leaning_against_wall.JPG')] bg-cover py-[5rem]"></div>
        <div className="h-[100vh] bg-[url('img/hero/girl_carrying_jerrycan.JPG')] bg-cover py-[5rem]"></div>
        <div className="h-[100vh] bg-[url('img/hero/girl_using_sewing_machine.JPG')] bg-cover py-[5rem]"></div>
        <div className="h-[100vh] bg-[url('img/hero/boy_tieng_cow.JPG')] bg-cover py-[5rem]"></div>
      </Slider>

      {/* hero content */}
      <section className='h-[100%] w-[100%]'>

      </section>
    </div>
  );
};

export default Swiper;
