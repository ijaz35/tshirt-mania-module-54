import React from 'react';

const Cart = ({ cart, handlerAddToDelete }) => {
    // console.log(cart)
    return (
        <div>
            <h2>This is cart </h2>
            {
                cart.map(cartItem => <p key={cartItem._id}>{cartItem.name}
                    <button onClick={() => handlerAddToDelete(cartItem)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;