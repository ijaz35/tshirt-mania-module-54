import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tShirt, handlerAddToCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className="tshirt">
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: $ {price}</p>
            <button onClick={() => handlerAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;