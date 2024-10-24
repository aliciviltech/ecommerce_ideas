"use client";

import { useContext, useEffect, useState } from 'react';
import './Checkout.css'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '../../firebase/firebaseConfig'
import { db, addDoc, collection, getDocs } from '../../firebase/firebaseConfig'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import CartContext, { CartContextValue } from '../context/cart/CartContext';
import Button from '../Buttons/Buttons';


const Checkout = () => {
  const { userUID, isUser, userData, cartItems, addItems, deleteItem } = useContext(CartContextValue)
  const [itemsInCart, setItemsInCart] = useState(cartItems);
  const [subTotal, setSubTotal] = useState(0);
  console.log('checkout')
  useEffect(() => {
    const sum = cartItems?.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0)
    setSubTotal(sum)
  }, [cartItems])
  // const itemsInCart = fetchedData;
  // const [userUID, setUserUID] = useState('');
  // const [isUser, setIsUser] = useState(false);
  // const [itemsInCart, setItemsInCart] = useState<any>([]);R
  // const [userData, setUserData] = useState<any | null>(null);


  // ------------- authentication - check state -----------
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setUserUID(uid)
  //       setIsUser(true);
  //       setUserData({ email: user.email })
  //       getItemsF(uid)
  //     }
  //   })
  // }, [])

  // const getItemsF = async (uid: string) => {
  //   const querySnapshot = await getDocs(collection(db, "ideasCarts"));
  //   const arr = querySnapshot.docs.map((doc) => {
  //     if (doc.data().userUID === uid) {
  //       return doc.data();
  //     }
  //     return null;
  //   }).filter(item => item !== null);
  //   setItemsInCart(arr);
  // }


  return (
    <div className='Checkout'>

      {/* Header */}
      <div className="headerContainer">
        <Header />
      </div>

      <h1 className='headingH1 my-10 mx-auto' >Checkout</h1>

      {
        cartItems?.length > 0
          ?
          <section className=" mainBody flex justify-between">

            <div className="allItems flex flex-col gap-5">
              {
                cartItems.map((item: any, index: number) => {
                  return (
                    <div key={index} className="item flex">
                      <div className="image">
                        <img src={item.colors.colorImage} alt="" />
                      </div>
                      <div className="description">
                        <h4 className='font-bold '>{item.title}</h4>
                        <p>{item.colors.colorCode}</p>
                        <p>Price: PKR: {item.price}</p>
                        <div className="quantity">Quantity: {item.quantity}</div>
                        <div className="totalPrice ">Total Price: {item.price * item.quantity}</div>
                        <button className='h-fit bg-red-500 text-white px-5 py-2 hover:bg-red-700' onClick={() => { deleteItem(item) }}>Delete item</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div className="summary w-[300px] h-fit p-5 border-2 mr-10 flex flex-col gap-2">
              <h1 className='font-bold'>Summary</h1>
              <p>Sub-Total: {subTotal}</p>
              <p>Shipping Charges: 99</p>
              <h1>Order Total: {subTotal + 99}</h1>
              <button className='bg-[#757575] py-2 text-white hover:bg-[#616161]'>Check Out</button>
            </div>
          </section>
          
          :
          <h1 className='emptyCart'>No items in cart.</h1>
      }
    </div>
  )
}

export default Checkout