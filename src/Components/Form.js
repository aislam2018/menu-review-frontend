import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComment } from '../Thunks'

  class Form extends Component {

    state={
      content:""
    }

    changeHandle = (event) => this.setState({content: event.target.value})

    handleSubmit = (event) => {
      event.preventDefault()
      let comment = this.state.content
      let itemId = this.props.itemId

      let commentObj = {comment:comment, itemId:itemId}
      this.props.getComment(commentObj)
      this.setState({content: ""})
    }

    render (){

      return (
        <form onSubmit={this.handleSubmit}>
          <input name="content" type="text" value={this.state.content} onChange={this.changeHandle}/>
          <button>Add Review</button>
        </form>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  getComment: (commentObj) => dispatch(getComment(commentObj))
})



export default connect(null, mapDispatchToProps)(Form)
