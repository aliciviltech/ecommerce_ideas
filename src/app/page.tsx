"use client";
import './page.css'
import { menSuit } from '@/utils/ProductsData';
import { menSuitType } from '@/utils/ProductsData';
import { useDebugValue, useEffect, useRef, useState } from 'react';
import BestSeller from './components/BestSeller/BestSeller';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from './firebase/firebaseConfig'
import { db, addDoc, collection, getDocs } from './firebase/firebaseConfig'
import CartContext from './components/context/cart/CartContext';

const Home = () => {
  interface userData {
    email: string | null;
  }
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [itemsInCart, setItemsInCart] = useState<any>([]);
  const [isUser, setIsUser] = useState(false);
  const [userUID, setUserUID] = useState('');
  const [userData, setUserData] = useState<any | null>(null);


  // const handelHeaderPosition = () => {
  //   if (headerRef.current) {
  //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  //       headerRef.current.style.position = 'fixed';
  //       headerRef.current.style.top = '0';
  //       headerRef.current.style.backgroundColor = '#000';

  //     } else {
  //       headerRef.current.style.position = 'absolute';
  //       headerRef.current.style.backgroundColor = 'unset';
  //     }
  //   }
  // }
  // window.addEventListener('scroll', handelHeaderPosition);



  // ========================== firebase =============================

  // ------------- authentication - check state -----------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserData({email: user.email})
        setIsUser(true)
        // ...
      } else {
        setIsUser(false);
      }
    });
  }, [])



  return (
    <CartContext>
    <div className="Home">

      {/* Header */}
      <div ref={headerRef} className="headerContainer">
        <Header />
      </div>

      {/* Hero */}
      <Hero />

      {/* Category - new Arrival */}
      <BestSeller itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />


      {/* ================== central body ==================== */}

      <section className="centeralBody">

        {/* All Products */}
        <div className="allProductsContainer">

          <h1 className='allProductsHeading headingH2'>All Products</h1>
          <div className="allProducts">
            {
              menSuit.map((suit: menSuitType) => {
                return <Card key={suit.id} suit={suit} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cardSize={'normal'} />
              })
            }
            {
              menSuit.map((suit: menSuitType) => {
                return <Card key={suit.id} suit={suit} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cardSize={'normal'} />
              })
            }
            {
              menSuit.map((suit: menSuitType) => {
                return <Card key={suit.id} suit={suit} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cardSize={'normal'} />
              })
            }
          </div>
        </div>

        {/* Best Seller */}
        <div className="bestSellerContainer">
          <h1 className='bestSellerHeading headingH2'>Best Seller</h1>
          {
            menSuit.map((suit: menSuitType) => {
              return <Card key={suit.id} suit={suit} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cardSize={'small'} />
            })
          }
        </div>
      </section>
    </div>
    </CartContext>
  )
}

export default Home