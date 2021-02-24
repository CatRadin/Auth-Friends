import './App.css';  
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './components/Login';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
