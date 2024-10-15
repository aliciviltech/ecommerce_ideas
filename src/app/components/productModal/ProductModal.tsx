import './ProductModal.css'
import { menSuitType } from '@/utils/ProductsData';
import Cart from '../Cart/Cart'
import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../Buttons/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';

const ProductModal = ({ showModal, setShowModal, itemsInCart, setItemsInCart, suit, userUID }: { showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>>, itemsInCart: any, setItemsInCart: Dispatch<SetStateAction<any>>, suit: menSuitType, userUID: string }) => {
    const [showCartAlert, setShowCartAlert] = useState(false);
    const [colorImage, setColorImage] = useState(suit.colors[0].colorImage)
    const addItemsF = () => {
        setItemsInCart([...itemsInCart, { userUID: userUID, suit: suit, }])
        setShowCartAlert(true)
        setTimeout(() => {
            setShowCartAlert(false)
        }, 2300);
    }
    return (
        <div className="productModalContainer">
            <div className="ProductModal">

                <div className="image">
                    <img src={colorImage} alt="" />
                </div>

                <div className="suitDetails">
                    <h4 className='suitTitle'>{suit.title}</h4>
                    <p className='suitPrice'>
                        Price: &nbsp;
                        {suit.discount ? 
                        <>
                        <span className='oldPrice'>PKR {suit.price}</span>
                        &nbsp; &nbsp;
                        <span className='discountedPrice'>PKR {Math.round(suit.price - suit.price*suit.discount/100)}</span>
                        </>
                        :
                        <span>PKR {suit.price}</span>
                    }
                    </p>

                    <div className="colors">
                        Colors:
                        {
                            suit.colors.map((color, i) => {
                                return <span key={i} onClick={() => { setColorImage(color.colorImage) }} style={{ backgroundColor: color.colorCode }}></span>
                            })
                        }
                    </div>
                    <div className="cartContainer">
                        <button onClick={addItemsF}>Add to cart <FontAwesomeIcon className='icon' icon={faCartPlus} /></button>
                        <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cartColor='black' />
                    </div>

                </div>

                <span className='closeBtn' onClick={() => setShowModal(false)}> <img src="/images/closeIcon.png" /> </span>


                {
                    showCartAlert &&
                    <div className="cartAlert">
                        <img src="/images/cart.gif" alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductModal