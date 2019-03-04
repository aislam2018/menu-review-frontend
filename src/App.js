import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import RestaurantContainer from './Containers/RestaurantContainer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

import Home from './Components/Home'

import { connect } from 'react-redux'
import { getRestaurants } from './Thunks'
import { withRouter } from "react-router-dom";



class App extends Component {

  componentDidMount(){

    if (localStorage.getItem("token")) {
    this.props.getRestaurants()
    } else {
      this.props.history.push("/login");

    }
}
componentDidUpdate(previousState, previousProps){

    if(previousState.restaurants.length === 0){

      if (localStorage.getItem("token")) {

        this.props.getRestaurants()

      }
    }
}

  render() {
console.log("APP", this.props)



    return (

      <div>
        <h1>Menu Review</h1>
        <Navbar />
        <Switch>
          <Route path='/restaurants' render={() => <>

            {this.props.restaurants.length !== 0 ? (<RestaurantContainer restaurants={this.props.restaurants|| [{name:""}]}/>) : null}
              </>}/>
          <Route path='/login' render={() => <><Login/><Signup/></>}/>
          <Route path='/' component={Home} />
          </Switch>
        <div>

        </div>

      </div>

    );
  }
}
const mapStateToProps = (state) => {

  return {
    restaurants: state.restaurants,
    selectedItem: state.selectedItem,
    user: state.user

  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
