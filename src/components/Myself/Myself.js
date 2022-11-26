import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';
import Special from '../Special/Special';

const Myself = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>MySelf</h5>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>buy house</button>
            <Special></Special>
        </div>
    );
};

export default Myself;