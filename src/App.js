import React, { Component } from "react";
import NavBar from './navbar';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import About from './About';
import Login from './Login';
import AdminMainContainer from './AdminMainContainer';
import NoMatchPage from './NoMatchPage';
import Amy from './AmyGallery';
import Giulia from './GiuliaGallery'
import './owfont-regular.css'
import './css/owfont-regular.min.css'


class App extends Component {

  constructor() {
    super()
    this.state = {
      CurrentUser: null,
      CurrentUserData: null
    }
  }

  setCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.name,
      CurrentUserData: data
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/about" component={About} />

          <Route exact path='/login'
            render={(props) => <Login
              setCurrentUser={this.setCurrentUser}
              routerProps={props} />} />

          <Route path="/admin" component={AdminMainContainer} />
          <Route exact path="/amyslinkedin" component={Amy} />
          <Route exact path="/giuliaslinkedin" component={Giulia} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>

    );
  }
}

export default App;
