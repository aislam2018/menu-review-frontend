import React, { Component } from 'react'
import Form from '../Components/Form'

import Comment from '../Components/Comment'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ReviewContainer extends Component {

  render () {
  let { item } = this.props;

    let redirect = () => this.props.history.push(`/restaurants/${item.restaurant.id}/item`)
  let commentsMapped = item.comments.map(comment => <Comment key={comment.id} comment={comment} itemId={item.id} redirect ={redirect}/>) || [];
    return (
      <div>
        <Link to={`/restaurants/${item.restaurant.id}`}>Back to Menu</Link>
        <h2>{item.name} ${item.price}</h2>
        <h4>{"Ingredients: " + item.description}</h4>
        <br></br>
        <Form itemId={item.id}></Form>

        <h3>Reviews:</h3>
        <ul>{commentsMapped}</ul>
      </div>
    )
  }
}



export default withRouter(ReviewContainer);
