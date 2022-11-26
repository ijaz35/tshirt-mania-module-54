import React, { useState } from 'react';
import useTshirt from '../../Hook/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';


const Home = () => {
    const [tShirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);
    const handlerAddToCart = (selectedTshirt) => {
        const exist = cart.find(tshirt => tshirt._id === selectedTshirt._id)
        if (!exist) {
            const newCart = [...cart, selectedTshirt];
            setCart(newCart);
        } else {
            alert('Item Already added')
        }
    }
    const handlerAddToDelete = (deletedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== deletedItem._id);
        setCart(rest)
    }
    return (
        <div className="home-container">
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt.index}
                        tShirt={tShirt}
                        handlerAddToCart={handlerAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handlerAddToDelete={handlerAddToDelete}></Cart>
            </div>

        </div>
    );
};

export default Home;