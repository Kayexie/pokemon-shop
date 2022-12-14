import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import back from '../assets/back.png';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.userName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    
    <div className="containerSignup">
          <Link to="/Home">
            <img src={back} width='200px' alt='go back to home'></img>
          </Link>
      
      <h2 className="signup">Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="center">
        <div className="flex-row space-between containerTwo">
          <label htmlFor="userName">User Name:</label>
          <input
            placeholder="Your User Name"
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between containerTwo">
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="Your Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between containerTwo">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
        <button  className='signupButton' type="submit">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
