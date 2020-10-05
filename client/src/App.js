import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {LoginComponent } from './components/loginComponent';
import Dashboard from './components/Menu';
import User from './components/User';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute'
import axios from 'axios'
import {getToken,setUserSession,removeUserSession} from './utils/session'
import './App.css';

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect((props) => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`)
    .then(response => {
      setUserSession(response.data.token, response.data.user);
    }).catch(error => {
      removeUserSession();
      
    });
  }, []);
 
  

  return (    
    <div>
       <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LoginComponent}/>
        <PublicRoute exact path="/login" component={LoginComponent}/>
        <PrivateRoute  exact path="/dashboard" history= {props.history} component={Dashboard}/>    
        <Route exact path="/user" component={User}/>
       
      </Switch>
     
      </BrowserRouter> 
   
    </div>
     

    
   
  );
}

export default App;
