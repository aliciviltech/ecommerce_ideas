"use client";

import { useEffect, useState } from 'react';
import './Checkout.css'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '../../firebase/firebaseConfig'
import { db, addDoc, collection, getDocs } from '../../firebase/firebaseConfig'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';


const Checkout = () => {
  // const itemsInCart = fetchedData;
  const [userUID, setUserUID] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<any>([]);
  const [userData, setUserData] = useState<any | null>(null);


  // ------------- authentication - check state -----------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserUID(uid)
        setIsUser(true);
        setUserData({ email: user.email })
        getItemsF(uid)
      }
    })
  }, [])

  const getItemsF = async (uid: string) => {
    const querySnapshot = await getDocs(collection(db, "ideasCarts"));
    const arr = querySnapshot.docs.map((doc) => {
      if (doc.data().userUID === uid) {
        return doc.data();
      }
      return null;
    }).filter(item => item !== null);
    setItemsInCart(arr);
  }



  return (

    <div className='Checkout'>

      {/* Header */}
      <div className="headerContainer">
      <Header itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} isUser={isUser} userData={userData} />
      </div>

      <h1>Checkout</h1>

      {
        itemsInCart.length > 0
        ?
        itemsInCart.map((item: any) => {
          return (
            <div className="item">
              <div className="image">
                <img src={item.itemsInCart.colors[0].colorImage} alt="" />
              </div>
              <div className="description">
                <h4>{item.itemsInCart.title}</h4>
                {
                  item.itemsInCart.colors.map((color:any)=>{
                    <p>{color.colorCode}</p>
                  })
                }
                <p>Price: PKR: {item.itemsInCart.price}</p>
              </div>
            </div>
          )
        })
        :
        <h1 className='emptyCart'>No items in cart.</h1>
      }

    </div>
  )
}

export default Checkout