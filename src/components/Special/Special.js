import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>

            <p>House: {house}</p>
        </div>
    );
};

export default Special;