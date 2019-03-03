import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";


import RestaurantContainer from './Containers/RestaurantContainer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

import Home from './Components/Home'

import { connect } from 'react-redux'
import { getRestaurants } from './Thunks'
import { BrowserRouter } from "react-router-dom";



class App extends Component {

  componentDidMount(){

    if (localStorage.getItem("token")) {
    this.props.getRestaurants()
    } else {
      this.props.history.push("/login");
    }
}

  render() {
console.log("APP", this.props)



    return (
      <BrowserRouter>
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
    </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    restaurants: state.restaurants,
    currentItem: state.selectedItem,
    selectedItem: state.selectedItem,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
