import React from "react";
import FeaturedPets from "../components/FeaturedPets";


const Home = () => {
  return (
    <>
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{fontSize: "50px"}}>Welcome to Petpets!</h1>
        <h3>We are here to help you find your new bestfriend!</h3>
      </div> 
    </div>
    <FeaturedPets />
    </>
  )
}

export default Home;
