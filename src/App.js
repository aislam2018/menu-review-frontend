import React, { Component } from 'react';
import MenuContainer from './Containers/MenuContainer'
import ReviewContainer from './Containers/ReviewContainer'
import SearchForm from './Components/SearchForm'
import RestaurantContainer from './Containers/RestaurantContainer'

import { connect } from 'react-redux'
import { getRestaurants } from './Thunks'



class App extends Component {

  componentDidMount(){
    this.props.getRestaurants()
}

  render() {
console.log("APP", this.props)
      let isItemEmpty = Object.keys(this.props.currentItem).length === 0
      let isResEmpty = Object.keys(this.props.selectedRestaurant).length === 0

    return (
      <div>
        <div>
          <h1>Menu Review</h1>
          <br></br>
          <h5>Search For a Restaurant</h5>
          <SearchForm/>
        </div>
        <RestaurantContainer restaurants={this.props.restaurants|| [{name:""}]}></RestaurantContainer>

        {isResEmpty  ? null : <MenuContainer restaurant={this.props.selectedRestaurant}/>}
         { isItemEmpty ? null : <ReviewContainer item={this.props.currentItem} />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    restaurants: state.restaurants,
    currentItem: state.selectedItem,
    selectedRestaurant: state.selectedRestaurant,
    selectedItem: state.selectedItem,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
