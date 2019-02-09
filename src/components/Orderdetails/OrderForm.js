import React from 'react';
import FoodControl from './FoodControl/FoodControl'

function OrderForm(props) {
    return <div className='Orderform'>
        <FoodControl name = {"cheeseburger"} add = {props.add}/>
        <FoodControl name = {"coffee"} add = {props.add}/>
        <FoodControl name = {"cola"} add = {props.add}/>
        <FoodControl name = {"fries"} add = {props.add}/>
        <FoodControl name = {"hamburger"} add = {props.add}/>
        <FoodControl name = {"tea"} add = {props.add}/>
    </div>

}

export default OrderForm;