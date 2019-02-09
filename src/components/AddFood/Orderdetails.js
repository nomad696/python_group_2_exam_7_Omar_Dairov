import React from 'react';
// import OrderForm from "../Orderdetails/OrderForm";
import OrderView from '../OrderView/OrderView'

function Orderdetails(props) {
    const foodKeys = Object.keys(props.foods);
    //'cheeseburger' => <FoodControl food={props.foods['cheeseburger']}/>

    return <div className='Orderdetails'>
        <div className='OrderList'>
                {foodKeys.map((cheeseburger)=>{
                    console.log(cheeseburger);
                    return (<OrderView food={props.foods[cheeseburger]} key={cheeseburger}/>)})}
            </div>
        </div>
}

export default Orderdetails;