import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPA.css'

export const RingContext = createContext('ring');

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Daimond ring';
    const buyHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className="grandpa">
                <h2>Grandfather</h2>
                <p>House: {house} <button onClick={buyHouse}>Buy house</button></p>
                <div className="grandpa-children">
                    <Father></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;