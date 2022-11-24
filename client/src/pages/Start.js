import React from "react";
import { useNavigate } from 'react-router-dom';

const Start = () => {
    
    const navigate = useNavigate();
    return (
        <div>
        <div class="btnS">
        <p>The pokemon Shop</p>
        <button onClick={() => navigate('/Home')}>Start</button>
        </div>
         </div>
    );


};

export default Start;