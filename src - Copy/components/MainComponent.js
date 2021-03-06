import React, { Component } from 'react';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import DishDetail from "./DhisDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponents';
import Home from './HomeComponent';
import About from './AboutComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {

  constructor(props){
    super(props);
  }


    
  render(){

    const HomePage = () =>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
          promotion={this.props.promotions.filter((promo)=>promo.featured)[0]} 
          leader={this.props.leaders.filter((leader)=>leader.featured)[0]} 
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );

  }
}

export default withRouter(connect(mapStateToProps)(Main));
