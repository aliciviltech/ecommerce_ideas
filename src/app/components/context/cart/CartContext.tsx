"use client"
import { Children, createContext, useEffect, useState } from "react"
import { onAuthStateChanged, auth } from "@/app/firebase/firebaseConfig";
import { db, addDoc,setDoc, collection, getDocs,doc,deleteDoc } from "@/app/firebase/firebaseConfig";

export const CartContextValue = createContext<any>(null);
const CartContext = ({ children }: { children: any }) => {
    const [cartItems, setCartItems] = useState<any>(null);
    const [userUID, setUserUID] = useState<any>('');
    const [isUser, setIsUser] = useState(false);
    const [userData, setUserData] = useState<any | null>(null);
    const [isDataLoaded, setIsDataLoaded]=useState(false);

    console.log('runningggggggggggggggg................')
    // ------------- authentication - check state -----------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUserUID(uid)
                setIsUser(true);
                setUserData({ email: user.email })
                getItems(uid)
            }
        })
    }, [cartItems])

    // ============= add items in cart ==============
    const addItems = async (item: any) => {
        try {
            await setDoc(doc(db, "ideasCarts", `${item.id}-${item.colors.colorCode}-${userUID}`), item);
            const arr = [...cartItems, item];
            getItems(userUID);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    // ============= get items from cart ============
    const getItems = async (uid:any) => {
        const querySnapshot = await getDocs(collection(db, 'ideasCarts'));
        const arr = querySnapshot.docs.map((doc) => {
            if (doc.data().userUID === uid) {
                return doc.data();
            }
            return null;
        }).filter(item => item !== null);
        setCartItems(arr);
        setIsDataLoaded(true);

    }
    // ============= delete item from cart ============
    const deleteItem = async(item:any)=>{
        try{
            await deleteDoc(doc(db, "ideasCarts", `${item.id}-${item.colors.colorCode}-${userUID}`) )
            getItems(userUID);
        }catch(e){
            console.log(e)
        }
    }

    // console.log(cartItems.length)
    // if(!isDataLoaded){
    //     return <div>Loading.....</div>
    // } 
    return (
        <CartContextValue.Provider value={{userUID, isUser, userData, cartItems, addItems, deleteItem}}>
            {children}
        </CartContextValue.Provider>
    )
    
}

export default CartContext