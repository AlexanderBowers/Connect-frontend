import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
//import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Redirect } from "react-router-dom";

class Home extends Component {

    componentDidMount(){
        let token = localStorage.getItem('token')
        if (token) {
          this.props.history.push("/parties")
          console.log('should be redirected')
        }
      }

    render () {
        return (
            <div className="Login-container">
                    <Container>
                        <Form>
                            <Form.Label> Sign In</Form.Label>
                            <Form.Group >
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" placeholder="Enter username" onChange={(e) => this.props.handleLoginChange(e)}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => this.props.handleLoginChange(e)}/>
                            </Form.Group>
                        </Form>
                    </Container>
                    <Button variant="primary" type="button" onClick={(e) => this.props.handleLoginSubmit(e)}>Sign in</Button>
                    <Button variant="success" type="button" className="create" onClick={(e) => this.props.handleSignupSubmit(e)}>Sign Up</Button>
                </div>
        )
    }
}

export default Home