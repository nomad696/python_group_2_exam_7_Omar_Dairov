import React from 'react';
import FoodControl from "../Orderdetails/FoodControl/FoodControl";
import OrderForm from "../Orderdetails/OrderForm";

function Orderdetails(props) {
    const foodKeys = Object.keys(props.foods);
    //'cheeseburger' => <FoodControl food={props.foods['cheeseburger']}/>

    return <div className='Orderdetails'>
        <div className='OrderList'>
                {foodKeys.map((cheeseburger)=>{
                    return (<OrderForm food={props.foods[cheeseburger]} key={cheeseburger}/>)})}
            </div>
        </div>
}

export default Orderdetails;