import React from 'react';

function FoodControl(props) {
    return <div className='FoodControl'>
        <p className='FoodName'> {props.name}</p>
        <h5>Price: {props.price}</h5>
        <button className='FoodButton' onClick={() => props.add(props.name)}>Add</button>
    </div>
}

export default FoodControl;

