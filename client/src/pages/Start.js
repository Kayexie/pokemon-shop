import React from "react";
import { useNavigate } from 'react-router-dom';

const Start = () => {
    
    const navigate = useNavigate();
    return (
        <div className="start-image">
        <div className="start-text">
            <h1>The Pokemon Shop</h1>
            <p>Adopt Your Pokemon Here</p>
            <button onClick={() => navigate('/Home')}>Expore All</button>
        </div>
        </div>      
    );


};

export default Start;