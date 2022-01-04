/* eslint-disable jsx-a11y/anchor-is-valid */
import { Carousel, Wrap } from './ImgStyle'

const ImgSlider = (props) => { 
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

      return (
        <Carousel {...settings}>
          <Wrap>
            <a>
              <img src="/assets/images/slider-badging.jpg" alt="" />
            </a>
          </Wrap>
    
          <Wrap>
            <a>
              <img src="/assets/images/slider-scale.jpg" alt="" />
            </a>
          </Wrap>
    
          <Wrap>
            <a>
              <img src="/assets/images/slider-badag.jpg" alt="" />
            </a>
          </Wrap>
    
          <Wrap>
            <a>
              <img src="/assets/images/slider-scales.jpg" alt="" />
            </a>
          </Wrap>
        </Carousel>
      );
}

export default ImgSlider;