import './BestSeller.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menSuit } from '@/utils/ProductsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import { Dispatch, SetStateAction } from 'react';

const BestSeller = ({ itemsInCart, setItemsInCart }:{ itemsInCart: any; setItemsInCart: Dispatch<SetStateAction<any>> }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
  return (
    <div className='BestSeller'>
      <h1 className='newArrivalHeading headingH2'>New Arrival</h1>
      <div className="products">
        <Slider {...settings}>
          {
            menSuit.map((suit) => {
              return (
                <div className='productCard'>
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