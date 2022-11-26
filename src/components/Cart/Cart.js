import React from 'react';
import './Cart.css'

const Cart = ({ cart, handlerAddToDelete }) => {
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please Select Any Tshirt </h5>
            <p>Your cart is empty.. </p>
        </div>
    } else if (cart.length === 1) {
        command = <p>Please Add More</p>
    } else {
        command = <p>Thanks for shopping</p>
    }

    return (
        <div>
            <h2>This is cart </h2>

            {
                cart.map(cartItem => <p key={cartItem._id}>{cartItem.name}
                    <button onClick={() => handlerAddToDelete(cartItem)}>X</button></p>)
            }
            {cart.length === 3 && <div className="orange">
                <h5>Trigonal</h5>
                <p>You get a t-shirt free</p>
            </div>}
            {cart.length === 0 || <p className="orange">YaY! you are buying</p>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button>Review Items</button>}
        </div>
    );
};

export default Cart;