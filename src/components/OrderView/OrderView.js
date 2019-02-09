import React from 'react';


function OrderView(props) {
    console.log(props);
    console.log(props.food);
    // const foodKeys = Object.keys(props.foods);
    return <div className='OrderView'>
        {props.food.count}
        {props.food.total}
    </div>
}

export default OrderView;