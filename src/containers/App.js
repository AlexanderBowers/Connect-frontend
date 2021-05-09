import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Home from './Home'
import Profile from './Profile'
import Parties from './Parties'

class App extends Component {

  componentDidMount(){
    let token = localStorage.getItem('token')
    if (token) {
      this.props.history.push("/parties")
    }
  }

  state = {
    openParty: "",
  }

  handleLoginSubmit = (e) => {
    let username = this.state.username
    let password = this.state.password
    let info = {username: username, password: password}
    fetch("https://localhost:3000/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        user: info
      })
    })
    .then(rsp => rsp.json())
    .then(json => {
      if (json.user) {
        this.setState({
            loggedIn: !this.state.loggedIn,
            user: json.user.username,
            userId: json.user.id
        })
        localStorage.setItem("token", json.jwt) 
        localStorage.setItem("user",json.user.id)
        this.props.history.push("/parties")
     }
     else{ 
       this.setState({error: json.message})
      }
    })

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
      <div className="Header">
        <NavigationBar signOut={this.signOut}/>
        <Route exact path='/' render={routerProps => <Home {...routerProps} handleUserInfo={this.handleUserInfo} handleLoginSubmit={this.handleLoginSubmit}
         handleLoginChange={this.handleLoginChange} />   } />
        <Route exact path='/profile' render={routerProps => <Profile {...routerProps} /> } />
        <Route exact path='/parties' render={routerProps => <Parties {...routerProps} openParty={this.state.openParty}  />} />
      </div>
    </Router>
  );
  }
}

export default App;
