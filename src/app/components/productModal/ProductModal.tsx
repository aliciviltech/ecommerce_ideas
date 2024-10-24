import './ProductModal.css'
import { menSuitType } from '@/utils/ProductsData';
import Cart from '../Cart/Cart'
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Button from '../Buttons/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { CartContextValue } from '../context/cart/CartContext';

const ProductModal = ({ showModal, setShowModal,  suit}: { showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>>, suit: menSuitType}) => {
    const [showCartAlert, setShowCartAlert] = useState(false);
    const [colorImage, setColorImage] = useState(suit.colors[0].colorImage)
    const [colorCode, setColorCode] = useState(suit.colors[0].colorCode)
    const [quantity, setQuantity] = useState(1);
    
    const {userUID,isUser, userData, cartItems, addItems } = useContext(CartContextValue)
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
                                <span className='discountedPrice'>PKR {Math.round(suit.price - suit.price * suit.discount / 100)}</span>
                            </>
                            :
                            <span>PKR {suit.price}</span>
                        }
                    </p>

                    <div className="colors">
                        Colors:
                        {
                            suit.colors.map((color, i) => {
                                return <span key={i} onClick={() => { setColorImage(color.colorImage); setColorCode(color.colorCode) }} style={{ backgroundColor: color.colorCode }}></span>
                            })
                        }
                    </div>
                    <div className="quantity">
                        Quantity: <button onClick={() => { quantity > 1 && setQuantity(quantity - 1) }}>-</button> {quantity} <button onClick={() => { setQuantity(quantity + 1) }}>+</button>
                    </div>
                    <p>Total: {suit.price*quantity}</p>
                    <div className="cartContainer">
                        <button onClick={() => {
                            const selectedSuit = {
                                ...suit,
                                colors: { colorCode: colorCode, colorImage: colorImage },
                                quantity: quantity,
                                userUID: userUID,
                            };
                            addItems(selectedSuit);
                            setShowCartAlert(true)
                            setTimeout(() => {
                                setShowCartAlert(false)
                            }, 2300);
                        }
                        }>Add to cart <FontAwesomeIcon className='icon' icon={faCartPlus} /></button>
                        <Cart cartColor='black' />
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