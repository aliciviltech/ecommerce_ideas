// "use client";
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
 
const Cart = ({ itemsInCart, setItemsInCart, cartColor }: { itemsInCart: any; setItemsInCart: Dispatch<SetStateAction<any>>, cartColor:string }) => {
  return (
    <Link href={'/components/checkout'}>
    <div className="Cart" >
        <FontAwesomeIcon className='cartIcon' icon={faCartShopping} style={{color:`${cartColor}`}} />
        <div className="itemsInCart">{itemsInCart.length}</div>
    </div>
    </Link>
  )
}

export default Cart