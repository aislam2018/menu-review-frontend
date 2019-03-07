import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComment } from '../Thunks'
import { Button, Form as CommentForm} from 'semantic-ui-react'

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

          <CommentForm onSubmit={this.handleSubmit}>
            <CommentForm.Field>
            <input className="comment-txt" placeholder="Add A Review" name="content"
              type="text" value={this.state.content} onChange={this.changeHandle}/>
          </CommentForm.Field>
            <br/>
            <Button type='submit'>Add A Review</Button>
          </CommentForm>

      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  getComment: (commentObj) => dispatch(getComment(commentObj))
})



export default connect(null, mapDispatchToProps)(Form)
