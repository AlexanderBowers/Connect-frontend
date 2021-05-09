import React from 'react';
//import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'

const NavigationBar = (props) => {

  const logout = () => {
    localStorage.removeItem("token","user")
    window.location.href = "/"
  }

  function loggedIn  () {
    let token = localStorage.getItem("token")
      if (token) {
           return(
            <Navbar bg="transparent" variant="dark" >
              <Container className="jHeader">
                <Nav className="mr-auto">
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/parties">Parties</Nav.Link>
                  <Nav.Link href="#" onSelect={logout}>Logout</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
           )
      } else {
        return (
          <Navbar bg="transparent" variant="dark" >
            <Container className="jHeader">
                <Nav className="mr-auto">
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/parties">Parties</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
        )
      }
  }

    
    return (
      <div>
        {loggedIn()}
      </div>
    )
}

export default NavigationBar;