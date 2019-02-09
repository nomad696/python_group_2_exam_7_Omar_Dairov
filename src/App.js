import React, { Component } from 'react';
import './App.css';
import Orderdetails from './components/AddFood/Orderdetails';
import OrderForm from './components/Orderdetails/OrderForm';
import OrderView from './components/OrderView/OrderView';

const availableFoods = [
  {name: 'cheeseburger', price: 80, label: 'cheeseburger'},
  {name: 'coffee', price: 70, label: 'coffee'},
  {name: 'cola', price: 80, label: 'cola'},
  {name: 'fries', price: 80, label: 'fries'},
  {name: 'hamburger', price: 80, label: 'hamburger'},
  {name: 'tea', price: 80, label: 'tea'}
];


class App extends Component {
  state = {
    foods: {
        cheeseburger: {count: 0, total: 0},
        coffee: {count: 0, total: 0},
        cola: {count: 0, total: 0},
        fries: {count: 0, total: 0},
        hamburger: {count: 0, total: 0},
        tea: {count: 0, total: 0}
    },
    total: 0
  };

  addFood = (name) => {
      let food = {...this.state.foods[name]};
      let price = availableFoods.find(item => item.name === name).price;
      food.count += 1;
      food.total = food.count * price;

      let foods = {...this.state.foods};

      foods[name] = food;

      let newState = {...this.state};
      newState.foods = foods;
      this.setState(newState);
      this.getCost(newState)
  };

  removeFood = (name) => {
      let food = {...this.state.foods[name]};
      let price = availableFoods.find(item => item.name === name).price;
      if (food.count > 0) {
      food.count -= 1;
      }
      food.total = food.count * price;

      let foods = {...this.state.foods};

      foods[name] = food;

      let newState = {...this.state};
      newState.foods = foods;
      this.setState(newState);
      this.getCost(newState)
  };

  getCost = () => {
      return this.state.foods.cheeseburger.total+this.state.foods.coffee.total + this.state.foods.cola.total + this.state.foods.fries.total + this.state.foods.hamburger.total + this.state.foods.tea.total;
  };


  render() {
    return (
      <div className="container">
          <Orderdetails foods={this.state.foods}/>
            <p>Price : {this.getCost()} Rub</p>
          <OrderForm add = {this.addFood}/>
      </div>
    );
  }
}

export default App;
