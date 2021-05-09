import '../App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Home from './Home'

class App extends Component {

  state = {
    openParty: ""
  }

  handleUserInfo = (userId) => {
    this.setState({userId})
  }

  render() {
    return (
      <Router>
      <div>
        <NavigationBar signOut={this.signOut}/>
        <Route exact path='/' render={routerProps => <Home {...routerProps}/>  } />
        <Route exact path='/profile' render={routerProps => <Profile {...routerProps} /> } />
        <Route exact path='/login' render={routerProps => <HomeContainer {...routerProps} handleUserInfo={this.handleUserInfo} />} />
      </div>
    </Router>
  );
  }
}

export default App;
