import './App.css';
import React from 'react'
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Login from '../src/components/Login'

function App() {
  return (
    <div className="App">
     <ul>
       <li>
          <Link to="/login">Login</Link>
       </li>
     </ul>
     <Switch>
       <Route path="login" component={Login} />
     </Switch>
    </div>
  );
}

export default App;
