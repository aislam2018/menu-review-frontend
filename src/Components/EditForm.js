import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEditedComment } from '../Thunks'
import { Button, Form } from 'semantic-ui-react'

  class EditForm extends Component {

    state={
      content: this.props.comment.content
    }

    changeHandle = (event) => this.setState({content: event.target.value})

    handleSubmit = (event) => {
      event.preventDefault()
      let commentId = this.props.comment.id
      let itemId = this.props.itemId
      let comment = event.target.content.value
      let editedCommentObj = {comment: comment, commentId: commentId, itemId: itemId}
      this.props.getEditedComment(editedCommentObj)
      this.props.handleSubmit()

    }

    render (){

      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <input name="content" type="text" value={this.state.content} onChange={this.changeHandle}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      )
    }
}
const mapDispatchToProps = (dispatch) => ({
  getEditedComment: (editedCommentObj) => dispatch(getEditedComment(editedCommentObj))
})



export default connect(null, mapDispatchToProps)(EditForm)
