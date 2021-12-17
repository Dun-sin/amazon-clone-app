import React, { useState } from 'react'
import '../css/Header.css';
import { useStateValue } from './StateProvider';

// Icons //
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="signin_Link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user?.email : 'Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Primes</span>
        </div>
        <div className={`header__optionBasket`} >
          <Link className="basket__link" to="/checkout">
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;