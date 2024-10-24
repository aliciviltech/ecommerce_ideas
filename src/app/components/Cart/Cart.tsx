// "use client";
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Link from 'next/link';
import { CartContextValue } from '../context/cart/CartContext';
 
const Cart = ({cartColor }: { cartColor:string }) => {
  const {userUID,isUser, userData, cartItems, addItems } = useContext(CartContextValue)

  return (
    <Link href={'/components/checkout'}>
    <div className="Cart" >
        <FontAwesomeIcon className='cartIcon' icon={faCartShopping} style={{color:`${cartColor}`}} />
        <div className="itemsInCart">{cartItems?.length}</div>
    </div>
    </Link>
  )
}

export default Cart