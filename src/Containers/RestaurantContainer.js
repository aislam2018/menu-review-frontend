import React from 'react'
 import { getRestaurant } from '../Actions'
import { connect } from 'react-redux'
import MenuContainer from './MenuContainer'
import {Route, Switch} from 'react-router-dom'


let  RestaurantContainer = (props) => {


  let mapRestaurants = props.restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    .map(res => <li key={res.id} onClick={() => props.getRestaurant(res.id)} >{res.name}</li> ) || []

    let showRes = (routerProps) => {
      let id = parseInt(routerProps.match.params.id)
      let restaurant = props.restaurants.find(
        resObj => resObj.id === id
       )
       return  <MenuContainer restaurant={restaurant}/>
    }

  return(
    <div>
      <Switch>
        <Route path="/restaurants/:id" render={(routerProps)=>

            <div>{props.restaurants.length > 0 ? (showRes(routerProps)) : null }</div>


          }></Route>
        <Route path="/restaurants" render={()=>
            <div>
              <h2>Restaurants</h2>
              <ul>{ mapRestaurants }</ul>
            </div>
        }/>


      </Switch>
      </div>
  )
}
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,

    selectedRestaurant: state.selectedRestaurant
   }
}

const mapDispatchToProps = (dispatch) => ({
  getRestaurant: (resId) => dispatch(getRestaurant(resId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer)
