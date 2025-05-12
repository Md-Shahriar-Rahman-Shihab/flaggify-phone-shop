import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCart } from '../utils';

const CartProvider = ({children}) => {
    const [cart,setCart]= useState([])
    useEffect(()=>{
        //locall storage a giye dekho cart er data ache naki
        setCart(getCart())
    },[])
    return (
       
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;