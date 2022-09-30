import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mx-auto my-5 mb-3" style={{width: "50%"}} controlId="formBasicEmail">
        <Form.Label className='font-weight-bold' htmlFor='email'>Email address</Form.Label>
        <Form.Control id='email' type="email" name='email' placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mx-auto mb-3" style={{width: "50%"}} controlId="formBasicPassword">
        <Form.Label className='font-weight-bold' htmlFor='pwd'>Password</Form.Label>
        <Form.Control id='pwd' name='password' type="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>
      {error ? (
        <Form.Text className="text-muted">
        The provided credentials are incorrect.
      </Form.Text>
      ): null}
      <Button className="d-block mx-auto" style={{width: "50%"}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <div className='signUp'>
    //   <Link to ="/signup">Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className='formEntry'>
    //       <label htmlFor='email'>Email address:</label>
    //       <input
    //         placeholder='youremail@test.com'
    //         name='email'
    //         type='email'
    //         id='email'
    //         onChange={handleChange}
    //         />
    //     </div>
    //     <div className='formEntry'>
    //       <label htmlFor='pwd'>password:</label>
    //       <input
    //       placeholder='*******'
    //       name='password'
    //       type='password'
    //       id='pwd'
    //       onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className=''>The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className='formEntry'>
    //       <button type='submit'>Submit</button>
    //     </div>
    //   </form>
    // </div>
  );


}

export default Login;