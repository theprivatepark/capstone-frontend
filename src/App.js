import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import About from './About';
import Login from './Login';
import AdminMainContainer from './AdminMainContainer';
import NoMatchPage from './NoMatchPage';
import Grid from './GalleryGrid';
import axios from 'axios';


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedIn(!loggedIn)
    setUser(data.user)
  }

  const handleLogout = () => {
    setLoggedIn(!loggedIn)
    setUser(null)
  }

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true }) // This allows our Rails server to set and read the cookie on the front-end’s browser.
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    loginStatus()
  }, []);


  return (
    <div>
      <NavBar render={props => (
            <Login {...props} handleLogin={handleLogin} loggedInStatus={loggedIn} handleLogout={handleLogout}/>
          )}/>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/about" component={About} />
        <Route exact path ='/login' component={Login} />
        <Route path="/admin" component={AdminMainContainer} />
        <Route exact path="/grid" component={Grid} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>

  );
}
