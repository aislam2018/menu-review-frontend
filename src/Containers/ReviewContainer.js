import React, { Component } from 'react'
import Form from '../Components/Form'

import Comment from '../Components/Comment'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Grid, Image, Segment } from 'semantic-ui-react'

class ReviewContainer extends Component {

  render () {
  let { item } = this.props;

    let redirect = () => this.props.history.push(`/restaurants/${item.restaurant.id}/item`)
  let commentsMapped = item.comments.map(comment => <Comment key={comment.id} comment={comment} itemId={item.id} redirect ={redirect}/>) || [];

    return (

      <Grid divided='vertically'>
         <Grid.Row columns={2}>
           <Grid.Column width={8}>
             <Link to={`/restaurants/${item.restaurant.id}`}>Back to Menu</Link>
             <br/>
             <div className="child-div">
             <Image src={item.image} />
             <h2>{item.name} ${item.price}</h2>
             <h4>{"Ingredients: " + item.description}</h4>
             <br></br>
             <Form itemId={item.id}></Form>
             </div>
           </Grid.Column>
           <Grid.Column width={8}>
                <h2>Reviews</h2>
                  <ul className="reviews-ul">{commentsMapped}</ul>
           </Grid.Column>
         </Grid.Row>

       </Grid>

    )
  }
}



export default withRouter(ReviewContainer);


// <div className="parent-div">
//         <Link to={`/restaurants/${item.restaurant.id}`}>Back to Menu</Link>
//         <h2>{item.name} ${item.price}</h2>
//         <h4>{"Ingredients: " + item.description}</h4>
//         <img className="image" src={item.image} alt=""/>
//         <br></br>
//
//         <Form itemId={item.id}></Form>
//
//         <h3>Reviews:</h3>
//         <ul className="reviews-ul">{commentsMapped}</ul>
//
//       </div>
