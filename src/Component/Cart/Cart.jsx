import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // const cart = props.cart;
    // const {cart} =props;
    // console.log(cart);
    let total = 0;
   let  Totalshipping =0;
   let quantity = 0;

    for(const product of cart){
        if(product.quantity==0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1
        total = total + product.price*product.quantity;
        Totalshipping = Totalshipping + product.shipping;
        quantity = quantity	+product.quantity;
    };
    const tax = total*7/100;
    const grandTotal = total + Totalshipping+ tax
   
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Select Item:{cart.length}</p> 
            <p>Total Price:${total.toFixed(2)}</p>
            <p>Total Shipping Charge:{Totalshipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='clear-btn-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;