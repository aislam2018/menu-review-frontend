import React from 'react'
import Form from '../Components/Form'

import Comment from '../Components/Comment'
import { Link } from "react-router-dom";

let ReviewContainer = (props) => {
  let { item } = props;
  let commentsMapped = item.comments.map(comment => <Comment key={comment.id} comment={comment} />);
    return (
      <div>
        <Link to="/restaurants/:id">Back to Menu</Link>
        <h2>{item.name} ${item.price}</h2>
        <h4>{"Ingredients: " + item.description}</h4>
        <br></br>
        <Form itemId={item.id}></Form>

        <h3>Reviews:</h3>
        <ul>{commentsMapped}</ul>
      </div>
    )
}



export default ReviewContainer;
