import React from "react";
import { useNavigate } from 'react-router-dom';
import picachu from '../assets/pokemon.gif';

const Start = () => {
    
    const navigate = useNavigate();
    return (
        <div className="start-image">
        <div className="start-text">
        <img src={picachu} alt='sucess' width='500'/>
            <h1>The Pokémon Shop</h1>
            <p>Adopt Your Pokémon Here</p>
            <button onClick={() => navigate('/Home')}>Expore All</button>
        </div>
        </div>      
    );


};

export default Start;