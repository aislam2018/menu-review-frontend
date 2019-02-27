import React from 'react'
import { connect } from 'react-redux'
import { searchRestaurant } from '../Actions'

const SearchForm = (props) =>  {

    const changeHandle = (event) => {
      let newTerm = event.target.value

      props.searchRestaurant(newTerm)

    }
      return (
        <form>
          <input name="searchTerm" type="text" value={props.searchTerm} onChange={changeHandle}/>
        </form>
      )

}
const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => ({
  searchRestaurant: (searchTerm) => dispatch(searchRestaurant(searchTerm))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
