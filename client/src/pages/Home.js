import React from "react";
import FeaturedPets from "../components/FeaturedPets";


const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Petpets!</h1>
      <h3>We are here to help you find your new bestfriend!</h3>

      <FeaturedPets />
    </div>
  )
}

export default Home;
