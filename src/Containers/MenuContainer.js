import React from 'react'
import { getItem } from '../Thunks'
import { connect } from 'react-redux'

let  MenuContainer = (props) => {

  let mapItems = props.restaurant.items.map(item => <li key={item.id} onClick={() => props.getItem(item.id)}>{item.name}</li> )
  return(

  <div>{props.restaurant.items.length !== 0 ? (<div>
        <h1>{ props.restaurant.name }</h1>
        <h3>{props.restaurant.address}</h3>
        <h2>Menu</h2>
        <ul>{ mapItems }</ul>
      </div>) : null }</div>
  )


}


const mapDispatchToProps = (dispatch) => ({
  getItem: (itemId) => dispatch(getItem(itemId))
})

export default connect(null, mapDispatchToProps)(MenuContainer)
