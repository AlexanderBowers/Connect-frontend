import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Home from './Home'
import Profile from './Profile'
import Parties from './Parties'

class App extends Component {

  state = {
    openParty: "",
    active: ""
  }

  signIn = () => {
      this.setState({
        active: 'Sign In'})
  }

  signUp = () => {
    this.setState({
      active: 'Sign Up'})
  }

  handleUserInfo = (userId) => {
    this.setState({userId})
  }

  handleLoginChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <Router>
      <div>
        <NavigationBar signOut={this.signOut}/>
        <Route exact path='/' render={routerProps => <Home {...routerProps} handleUserInfo={this.handleUserInfo} signIn={this.signIn} signUp={this.signUp}/>   } />
        <Route exact path='/profile' render={routerProps => <Profile {...routerProps} /> } />
        <Route exact path='/parties' render={routerProps => <Parties {...routerProps} openParty={this.state.openParty}  />} />
      </div>
    </Router>
  );
  }
}

export default App;
