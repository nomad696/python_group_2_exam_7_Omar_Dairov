import React from 'react';
import Cheeseburger from './Cheeseburger/Cheeseburger';
import Coffee from './Coffee/Coffee';
import Cola from './Cola/Cola';
import Fries from './Fries/Fries';
import Hamburger from './Hamburger/Hamburger';
import Tea from './Tea/Tea';

function Orderdetails(props) {
    const {cheeseburger, coffee, cola, fries, hamburger, tea} = props.foods;

    let foods = [];
    for (let i = 0; i < cheeseburger.count; i++) foods.push(<Cheeseburger/>);
    for (let i = 0; i < coffee.count; i++) foods.push(<Coffee/>);
    for (let i = 0; i < cola.count; i++) foods.push(<Cola/>);
    for (let i = 0; i < fries.count; i++) foods.push(<Fries/>);
    for (let i = 0; i < hamburger.count; i++) foods.push(<Hamburger/>);
    for (let i = 0; i < tea.count; i++) foods.push(<Tea/>);

    return <div className='Orderdetails'>
        {foods}
    </div>
}

export default Orderdetails;