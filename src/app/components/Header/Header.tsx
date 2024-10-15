
import Cart from '../Cart/Cart'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCartShopping, faCoins, faLocationDot, faRotate } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';

interface userData {
    email:string|null
  } 

const Header = ({ itemsInCart, setItemsInCart, isUser , userData}: { itemsInCart: any; setItemsInCart: Dispatch<SetStateAction<any>>; isUser:boolean; userData:userData|null }) => {
    
    console.log(itemsInCart);
    
    return (
        <div className="Header">
            <div className="row1">
                <div className="logo"><img src="/images/ideas_logo.png" alt="" /></div>
                <div className="nav">
                    <ul>
                        <li> <FontAwesomeIcon className='icon' icon={faCoins} /> Ideas Rewards</li>
                        <li><FontAwesomeIcon className='icon' icon={faRotate} /> Return & Exchanges</li>
                        <li><FontAwesomeIcon className='icon' icon={faRotate} /> Track Order</li>
                        <li><FontAwesomeIcon className='icon' icon={faBookOpen} />Look Book</li>
                    </ul>
                </div>
                <div className="userSide">
                    <FontAwesomeIcon  icon={faSearch} />
                    {
                        isUser? <div className="userImage">{userData && userData.email?.slice(0,1).toUpperCase()}</div> 
                        :
                        <FontAwesomeIcon icon={faUser} />
                    }
                    <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} cartColor={'white'}/>
                    |
                    <select id="currencySelector">
                        <option value="usd"> PKR</option>
                        <option value="usd"> USD</option>
                        <option value="aed"> AED</option>
                        <option value="cad"> CAD</option>
                        <option value="eur"> EUR</option>
                        <option value="sar"> SAR</option>
                    </select>
                </div>
            </div>

            {/* =============== row-2============== */}
            <div className="row2">
                <div className="storeLocation">
                    Store<FontAwesomeIcon className='icon' icon={faLocationDot} />
                </div>
                <div className="nav">
                    <ul>
                        <li>Limited Edition</li>
                        <li>Lawn 2024</li>
                        <li>Unstitched</li>
                        <li>Ideas Home</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Jewelry</li>
                        <li>Shoes</li>
                        <li>Bags</li>
                        <li>Kids</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header