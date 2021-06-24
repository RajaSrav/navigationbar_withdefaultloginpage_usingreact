import Navigation from './org/navigation';
import Home from './org/home';
import Login from './org/login';
import registration from './org/registration';
import Profile from './org/Profile';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={registration} />
        <Route path="/profile" name="raja" component={Profile} />
        
      </Router>
    </div>
  );
}

export default App;
