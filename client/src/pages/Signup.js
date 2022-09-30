import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return(
    <Form onSubmit={handleFormSubmit}>
    <Form.Group className="mx-auto mb-3" style={{width: "50%"}} controlId="firstName">
      <Form.Label className='font-weight-bold' htmlFor='firstName'>First Name</Form.Label>
      <Form.Control  type="firstName" name='firstName' placeholder="First" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mx-auto mb-3" style={{width: "50%"}} controlId="lastName">
      <Form.Label className='font-weight-bold' htmlFor='lastName'>Last Name</Form.Label>
      <Form.Control  type="lastName" name='lastName' placeholder="Last" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mx-auto mb-3" style={{width: "50%"}} controlId="email">
        <Form.Label className='font-weight-bold' htmlFor='email'>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mx-auto mb-3" style={{width: "50%"}} controlId="pwd">
        <Form.Label className='font-weight-bold' htmlFor='pwd'>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>

      <Button className="d-block mx-auto" style={{width: "50%"}} variant="primary" type="submit">
      Submit
      </Button>
  </Form>

    // <div className='signUp'>
    //   <Link to = "/login"> Go to Login</Link>

    //   <h2>Signup</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className='formEntry'>
    //       <label htmlFor='firstName'>First Name:</label>
    //       <input
    //         placeholder='First'
    //         name='firstName'
    //         type='firstName'
    //         id='firstName'
    //         onChange={handleChange}
    //         /> 
    //     </div>
    //     <div className='formEntry'>
    //       <label htmlFor='lastName'>Last Name:</label>
    //       <input
    //         placeholder='Last'
    //         name='lastName'
    //         type='lastName'
    //         id='lastName'
    //         onChange={handleChange}
    //         /> 
    //     </div>
    //     <div className='formEntry'>
    //       <label htmlFor='email'>Email:</label>
    //       <input
    //          placeholder='youremail@test.com'
    //          name='email'
    //          type='email'
    //          id='email'
    //          onChange={handleChange}
    //          />
    //     </div>
    //     <div className='formEntry'>
    //       <label htmlFor='pwd'>Password:</label>
    //       <input
    //         placeholder='********'
    //         name='password'
    //         type='password'
    //         id='pwd'
    //         onChange={handleChange}
    //         />
    //     </div>
    //     <div className='formEntry'>
    //       <button type='submit'>Submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Signup;