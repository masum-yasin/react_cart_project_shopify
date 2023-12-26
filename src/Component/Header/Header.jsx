import React from 'react';
import logo from '../../images/images.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to="/product">Product</Link>
                <Link to="login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;