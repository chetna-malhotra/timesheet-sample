import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import{setUserSession} from '../utils/session';
import axios from 'axios';
import '../styles/loginComponent.css';

export const LoginComponent = (props) => {
 
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

    
    const handleSubmit=()=>{
      setError(null);
      axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value })
      .then(response => {        
        setUserSession(response.data.token, response.data.user);
        props.history.push('http://localhost:3010/app/#');
      }).catch(error => {
        
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  }
    
    return (
        <>
            <div className="container col-md-4" >
                <div className="box">
                    <img src="https://image.flaticon.com/icons/png/512/18/18609.png"/>
                    <div > Log into your account</div>
                    <br></br>
                    <div id="login">
                        <Form  className="login-body " >
                         <FormGroup>
                             <Input type="text"  {...username}  autoComplete="new-password" placeholder="Enter username" />
                             <Input type="password" {...password}   autoComplete="new-password" placeholder="Enter password" />
                        </FormGroup>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                        <Button type="submit" onClick={handleSubmit}>Login</Button>
                        </Form>
                     </div>
                </div>
                </div>
                <div className="footer col-md-4 align-center">
                    <div className="pull-left"> 
                    <a href="https://www.wavelabs.ai" target="_blank">About us</a>
                     || <a href="_" target="_blank">Contact us</a>
                     </div>                     

                    <div className="pull-right"> © Wavelabs.ai</div>
                </div>
                </>
    );
   
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
}


