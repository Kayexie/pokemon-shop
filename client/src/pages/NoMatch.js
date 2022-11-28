import React from "react";
import Jumbotron from "../components/Jumbotron";
import errorImage from '../assets/404.png';

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
       <img src={errorImage} alt='sucess' width='200'/>
        <h1>404 Page Not Found</h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
