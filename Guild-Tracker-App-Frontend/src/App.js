import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuildHome from './Containers/GuildHome';
import NewMemberForm from './Containers/NewMemberForm';
import NavBar from './Components/NavBar';
import GuildMemberList from './Containers/GuildMemberList';
import './App.css'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ GuildHome } />
            <Route exact path="/members/new" component={NewMemberForm} />
            <Route exact path="/members" component={GuildMemberList} />
          </Switch>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
