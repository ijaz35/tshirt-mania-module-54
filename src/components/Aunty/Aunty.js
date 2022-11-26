import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy house</button>
        </div>
    );
};

export default Aunty;