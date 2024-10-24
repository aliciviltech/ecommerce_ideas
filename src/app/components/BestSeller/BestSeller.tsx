import './BestSeller.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menSuit } from '@/utils/ProductsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const BestSeller = ({ itemsInCart, setItemsInCart }:{ itemsInCart: any; setItemsInCart: Dispatch<SetStateAction<any>> }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [innerWidth, setInnerWidth] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
  // const [sliderSettings, setSliderSettings] = useState(settings);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 430) {
        setSlidesToShow(1);
      } else if(window.innerWidth < 600){
        setSlidesToShow(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='BestSeller'>
      <h1 className='newArrivalHeading headingH2'>New Arrival</h1>
      <div className="products">
        <Slider {...settings}>
          {
            menSuit.map((suit, index) => {
              return (
                <div key={index} className='productCard'>
                  <div className="image">
                    <img src={suit.colors[0].colorImage} alt="" />
                    <div className="viewDetails" >
                      View Details <FontAwesomeIcon className='cartIcon' icon={faArrowUpRightFromSquare} />
                    </div>
                  </div>
                  <div className="text">
                  <h4 className="title">{suit.title}</h4>
                  <p>Price: PKR {suit.price}</p>
                  </div>
                </div>
              )
              
              // return(
                
              //     <Card key={suit.id} suit={suit} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cardSize={'small'}/>
                
              // )
            })
          }

        </Slider>
      </div>
    </div>
  )
}

export default BestSeller