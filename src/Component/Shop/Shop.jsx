import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[]);

    useEffect(()=>{
        const storeCart = getShoppingCart();
        const saveCart = [];
        // console.log(storeCart); 
        // step 1 : get id of the added product
        for(const id in storeCart){
            // step 2 : get product from the products state by using id
        const addedProduct = products.find(product => product.id===id)
        // console.log(savedProduct);
      if(addedProduct){
        // step 3 : add quantity
        const quantity= storeCart[id];
        addedProduct.quantity = quantity;
        // step 4 : added to the saveCart;
        saveCart.push(addedProduct)
      }
        // console.log('added product',addedProduct);
        }
        // step 5 : set the cart;
        setCart(saveCart)

    },[products])
   
    const handleAddToCart = (product)=>{
        console.log(product);
        const newCart =[...cart,product];
            setCart(newCart)
            addToDb(product.id)
      }
    return (
        <div className='shop-container'>
           <div className="product-container">
        {
            products.map(product =><Product key={product.id}product={product}
                handleAddToCart={handleAddToCart}
            ></Product>)
        }
           </div>
           <div className="cart-container">
           <Cart cart={cart}>
            <Link className='link-style' to='/order'>
                <button className='proceed-btn'>Review Order  <FontAwesomeIcon icon={ faArrowRight} /></button>
            </Link>
           </Cart>
           </div>

        </div>
    );
};

export default Shop;