import React from 'react'
import { connect } from 'react-redux'
import { searchRestaurant } from '../Actions'

const SearchForm = (props) =>  {

    const changeHandle = (event) => {
      let newTerm = event.target.value

      props.searchRestaurant(newTerm)

    }
      return (
        <div className="search-box">
          <input className="search-txt" name="searchTerm" type="text"
            placeholder="Search For A Restaurant" value={props.searchTerm} onChange={changeHandle}/>
        </div>
      )

}
const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => ({
  searchRestaurant: (searchTerm) => dispatch(searchRestaurant(searchTerm))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
