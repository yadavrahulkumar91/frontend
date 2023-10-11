import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <span>Cart ({cartItems.length})</span>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
