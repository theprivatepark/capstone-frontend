import React from 'react';
import NavBar from './navbar';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import About from './About';
import Login from './Login';
import AdminMainContainer from './AdminMainContainer';
import NoMatchPage from './NoMatchPage';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route path="/admin" component={AdminMainContainer} />
        <Route component={NoMatchPage}/>
      </Switch>
    </div>

  );
}

export default App;
