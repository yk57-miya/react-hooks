import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SlideType } from '../types/index';

const Carousel = ({ sliders }: { sliders: SlideType[] }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    centerMode: true
  };

  return (
    <Slider {...settings}>
      {/* {value} */}
      {sliders.map((slide: SlideType) => (
        <div key={slide.name} className="slide-item px-2">
          <img
            src={`https://placehold.jp/18/${slide.color}/ffffff/360x200.png`}
            alt=""
          />
          <h3>{slide.name}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
