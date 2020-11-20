import React from 'react';
import NavBar from './navbar';
import { Switch, Route } from 'react-router-dom'
import MainContainer from './MainContainer';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import Login from './Login';
import UserMainContainer from './UserMainContainer'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={ContactForm}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path ="/main" component={UserMainContainer}/>
      </Switch>
    </div>

  );
}

export default App;
