import React from 'react'
 import { getRestaurant } from '../Actions'
import { connect } from 'react-redux'

let  RestaurantContainer = (props) => {

  let mapRestaurants = props.restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    .map(res => <li key={res.id} onClick={() => props.getRestaurant(res.id)} >{res.name}</li> ) || []

  return(
    <div>{props.restaurants.length !== 0 ? (<div>
          <h2>Restaurants</h2>
          <ul>{ mapRestaurants }</ul>
        </div>) : null }</div>
  )
}
const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => ({
  getRestaurant: (resId) => dispatch(getRestaurant(resId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer)
