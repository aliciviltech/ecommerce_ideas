
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Card.css'
import { menSuitType } from "@/utils/ProductsData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ProductModal from '../productModal/ProductModal';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '../../firebase/firebaseConfig'
import { db, addDoc, collection, getDocs } from '../../firebase/firebaseConfig'


const Card = ({ itemsInCart, setItemsInCart, suit, cardSize }: { itemsInCart: any; setItemsInCart: Dispatch<SetStateAction<any>>, suit: menSuitType, cardSize: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [userUID, setUserUID] = useState('');

  // ------------- authentication - check state -----------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserUID(uid)
        getItemsF(uid)
      }
    })
  }, [])
  console.log(suit.colors)

  // ---------------- firestore -----------------
  const addItemF = async () => {
    try {
      const docRef = await addDoc(collection(db, "ideasCarts"), {
        userUID: userUID,
        itemsInCart: suit,
      });
      console.log("Document written with ID: ", docRef.id);
      setItemsInCart([...itemsInCart, { userUID: userUID, itemsInCart: suit, }])
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getItemsF = async (uid: string) => {
    const querySnapshot = await getDocs(collection(db, "ideasCarts"));
    const arr = querySnapshot.docs.map((doc) => {
      if (doc.data().userUID === uid) {
        return doc.data();
      }
      return null;
    }).filter(item => item !== null);
    console.log(arr);
    setItemsInCart(arr);
  }

  return (
    <div className={`Card ${cardSize === 'normal' ? "normalSizeCard" : "smallSizeCard"}`} >
      <div className="image">
        <img src={suit.colors[0].colorImage} alt="" />
        <div className="viewDetails" onClick={() => setShowModal(true)}>
          View Details <FontAwesomeIcon className='cartIcon' icon={faArrowUpRightFromSquare} />
        </div>
      </div>
      <div className="text">
        <h4> {suit.title}</h4>
        <p className='priceContainer paragraphP3'>
          {suit.discount ?
            <>
              <span className='oldPrice'>PKR {suit.price}</span>
              &nbsp; &nbsp;
              <span className='discountedPrice'>PKR {Math.round(suit.price - suit.price * suit.discount / 100)}</span>
            </>
            :
            <span>PKR {suit.price}</span>
          }
          <span className='addToCart' onClick={addItemF}>
            <FontAwesomeIcon className='cartIcon' icon={faCartShopping} />
            <span className="plusSign">{'+'}</span>
          </span>
        </p>
      </div>
      {
        showModal && <ProductModal suit={suit} showModal={showModal} setShowModal={setShowModal} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} userUID={userUID} />
      }
    </div>
  )
}

export default Card