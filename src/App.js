import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import LoggedIn from './components/LoggedIn';
import UserSignUp from './components/UserSignUp'
import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>

        <Nav/>
        <Switch>

        <Route path="/about" component={About}/>
        <Route path="/Home"  component={Home}/>        
        <Route path="/loggedIn" component={LoggedIn}/>
        <Route path="/UserSignUp" component={UserSignUp}/>
        </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
