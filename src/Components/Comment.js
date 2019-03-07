import React, { Component } from 'react'
import EditForm from './EditForm'
import { connect } from 'react-redux'
import { getDeleteComment } from '../Thunks'
import { withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react'

class Comment extends Component{

  state={
    clicked: false
  }

  handleClick = () => this.setState({clicked: !this.state.clicked})
  handleSubmit = () => this.setState({clicked: !this.state.clicked})
  handleDelete = (event) => {
    console.log("redirect", this.props.redirect)

    let deleteObj = {
      itemId: this.props.itemId,
      commentId: this.props.comment.id
    }

  return  this.props.getDeleteComment(deleteObj, this.props.redirect)
  }


  render () {

    return(
      <div >

      {this.state.clicked? <EditForm comment={this.props.comment}
                                     itemId={this.props.itemId}
                                     handleSubmit={this.handleSubmit}
                                     /> :
        (<div>
          <li>{this.props.comment.content}</li>
            <Button onClick={this.handleClick}>Edit</Button>
            <Button onClick={this.handleDelete} color='red'>Delete</Button>
          </div>) }
      </div>
    )
  }


}

const mapDispatchToProps = (dispatch) => ({
  getDeleteComment: (editedCommentObj, redirect) => dispatch(getDeleteComment(editedCommentObj, redirect))
})

export default withRouter(connect(null, mapDispatchToProps)(Comment))
