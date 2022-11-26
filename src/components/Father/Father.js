import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../GrandPa/GrandPa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;