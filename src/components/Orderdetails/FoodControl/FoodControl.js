import React from 'react';

function FoodControl(props) {
    return <div className='FoodControl'>
        <p className='FoodName'> {props.name}</p>
        <button className='FoodButton' onClick={() => props.sub(props.name)}>Add</button>
    </div>
}

export default FoodControl;