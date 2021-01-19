import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Dailly from './Components/Dailly/Dailly';
import All from './Components/All/All';
import My from './Components/My/My';
import Donations from './Components/Donations/Donations';
import Home from './Components/Home/Home';
import Discover from './Components/Discover/Discover';
import Following from './Components/Following/Following';
import Profile from './Components/Profile/Profile';
import New from './Components/New/New';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/following" component={Following} />
          <Route path="/profile" component={Profile} />
          <Route path="/new" component={New} />
          <Route path="/dailly" component={Dailly} />
          <Route path="/all" component={All} />
          <Route path="/my" component={My} />
          <Route path="/donations" component={Donations} />
          <Route path="/discover" component={Discover} />
          <Route path="/following" component={Following} />
          <Route path="/profile" component={Profile} />
          <Route path="/new" component={New} />
        </Switch>
        <Nav className="bar Bottom" />
      </div>
    </Router>
  );
}

export default App;
