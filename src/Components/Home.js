import React from "react";
import { Segment, Image } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="parent-div">
    <h2>Welcome!</h2>
      <Image className="home-image" src="https://www.wichitabyeb.com/wp-content/uploads/2017/10/food-collage.jpg" size='medium' centered />
      <br></br>
      <hr></hr>
      <hr></hr>
      <p className="about-info">
        This site is here to help you decide what to order in a restaurant. It lists feedback on menu items.
        You have the ability to view all the reviews left behind by customers. You also have the
        ability to add, edit, delete your own review.
      </p>
    </div>
  );
};

export default Home;
// https://www.wichitabyeb.com/wp-content/uploads/2017/10/food-collage.jpg
