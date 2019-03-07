import React from 'react'

import { connect } from 'react-redux'
import MenuContainer from './MenuContainer'
import {Route, Switch} from 'react-router-dom'
import SearchForm from '../Components/SearchForm'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


let  RestaurantContainer = (props) => {

  let mapRestaurants = props.restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    .map(res => <li key={res.id} ><Link to={`/restaurants/${res.id}`}>{res.name}</Link></li> ) || []

    let showRes = (routerProps) => {
      let id = parseInt(routerProps.match.params.id)
      let restaurant = props.restaurants.find(
        resObj => resObj.id === id
       )
       return  <MenuContainer restaurant={restaurant}/>
    }

  return(

    <div className="parent-div">
      <Switch>
        <Route path="/restaurants/:id" render={(routerProps)=>

            <div>{props.restaurants.length > 0 ? (showRes(routerProps)) : null }</div>


          }></Route>
        <Route path="/restaurants" render={()=>
            <div>
              <SearchForm/>
              <br></br>
              <h2>Restaurants</h2>
              <ul className="res-ul">{ mapRestaurants }</ul>
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

export default withRouter(connect(mapStateToProps)(RestaurantContainer))
