import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/frontend" exact component={Home} />
          <Route path="/discover" exact component={Discover} /> {/* Works */}
          <Route path="/following" exact component={Following} /> {/* Works */}
          <Route path="/profile" exact component={Following} /> {/* Works */}
          <Route path="/new" exact component={Following} />
          <Route path="/frontend/dailly" exact component={Dailly} /> {/* Works */}
          <Route path="/frontend/all" exact component={All} />
          <Route path="/frontend/my" exact component={My} />
          <Route path="/frontend/donations" exact component={Donations} />
          {/* <Route path="/frontend/discover" exact component={Discover} />
          <Route path="/frontend/following" exact component={Following} />
          <Route path="/frontend/profile" exact component={Profile} />
          <Route path="/frontend/new" exact component={New} /> */}
        </Switch>
        <Nav className="bar Bottom" />
      </div>
    </BrowserRouter>
  );
}

export default App;
