import React from 'react'
import { getItem } from '../Thunks'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {Route, Switch} from 'react-router-dom'
import ReviewContainer from './ReviewContainer'
import { withRouter } from "react-router-dom";


let  MenuContainer = (props) => {



  let isItemEmpty = Object.keys(props.selectedItem).length === 0


  let mapItems = props.restaurant.items.map(item => <li key={item.id} onClick={() => props.getItem(item.id)}><Link to={`/restaurants/${props.restaurant.id}/item/${item.id}`}>{item.name}</Link></li> )

  return(

    <Switch>
    <Route path="/restaurants/:id/item/:id" render={()=>
        <div>{ isItemEmpty ? null : <ReviewContainer item={props.selectedItem} />}</div>
      }/>

<Route path="/restaurants/:id" render={()=>
    <div>{props.restaurant.items.length !== 0 ? (<div>
      <Link to="/restaurants">Back to restaurants</Link>
        <h1>{ props.restaurant.name }</h1>
        <h3>{props.restaurant.address}</h3>
        <h2>Menu</h2>
        <ul>{ mapItems }</ul>
      </div>) : null }</div> }/>
      </Switch>


  )


}
const mapStateToProps = (state) => {

  return {
    selectedItem: state.selectedItem
  }
}


const mapDispatchToProps = (dispatch) => ({
  getItem: (itemId) => dispatch(getItem(itemId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuContainer))
