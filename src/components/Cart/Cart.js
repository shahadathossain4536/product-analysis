import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log("trrr", { cart });
    const { name, img } = cart;
    // console.log(name);
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{name}</p>


        </div>
    );
};

export default Cart;

