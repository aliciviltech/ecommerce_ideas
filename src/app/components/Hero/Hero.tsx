import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coverImages } from '@/utils/HeroCoverImages';
import { url } from 'inspector';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
      };
  return (
    <div className='Hero'>
<Slider {...settings}>
          {
            coverImages.map((img, index)=>{ 
              return (
              <div key={index} className="coverImage" style={{backgroundImage:`url(${img.src})`  }}>
                {/* <img src={`${img.src}`} alt="" /> */}
              </div>   
              ) 
            })
          }
          {/* <div className="coverImage">
            <img src={`${coverImages[1].src}`} alt="" />
          </div>
          <div className="coverImage">
            <img src="images/hero2.jpg" alt="" />
          </div>
          <div className="coverImage">
            <img src="images/hero4.jpg" alt="" />
          </div>
          <div className="coverImage">
            <img src="images/hero3.jpg" alt="coverImg" />
          </div>
          <div className="coverImage">
            <img src="images/hero5.jpg" alt="coverImg" />
          </div> */}

        </Slider>
    </div>
  )
}

export default Hero