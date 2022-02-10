import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from "./DhisDetailComponent";
import { DISHES } from '../shared/dishes';
import React, { Component } from 'react';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

    onDishSelect(dishId){
    this.setState({ selectedDish: dishId});
    }

  render(){
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className='container'>

        <Menu dishes={this.state.dishes}  onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
        <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
        </div>
      </div>
    );

  }
}

export default Main;