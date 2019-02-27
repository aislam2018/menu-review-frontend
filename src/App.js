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
    console.log(this.props)
      let isItemEmpty = Object.keys(this.props.currentItem).length === 0

    return (
      <div>
        <div>
          <h1>Bites Review</h1>
          <br></br>
          <h5>Search For a Restaurant</h5>
          <SearchForm/>
        </div>
        <RestaurantContainer restaurants={this.props.restaurants|| [{name:""}]}></RestaurantContainer>

        {this.props.restaurants.length === 0  ? null : <MenuContainer items={this.props.restaurants[0].items} currentRes={this.props.restaurants[0]}/>}
         { isItemEmpty ? null : <ReviewContainer item={this.props.currentItem} />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    restaurants: state.restaurants,
    currentItem: state.selectedItem
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
