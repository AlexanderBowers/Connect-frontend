import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
//import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



class Signup extends Component {

    renderSwitch(state) {
        switch(state){
            case 'Sign In':
                return(  
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
                        <Button variant="primary" type="button" className="signin" onClick={(e) => this.props.toggleLogin(e)}></Button>
                    </div>
                )
            default:
                return <div>
                    <button onClick={this.props.signIn} className="primary">Sign In</button>
                    <button onClick={this.props.signUp} variant="success">Sign Up</button>
                </div>
            break;

        } 
    }


    render () {
        return (
            <div>
                {this.renderSwitch(this.props.active)}
            </div>
        )
    }

    // render() {
    //     return(
    //         <div className="Login-container">
    //             <h5>Welcome to Connect!</h5>
    //             <Container>
    //             <Form>
    //                 <Form.Label> Signup</Form.Label>
    //                 <Form.Group >
    //                     <Form.Label>Username</Form.Label>
    //                     <Form.Control name="username" placeholder="Enter username" onChange={(e) => this.props.handleLoginChange(e)}/>
    //                 </Form.Group>

    //                 <Form.Group controlId="formBasicPassword">
    //                     <Form.Label>Password</Form.Label>
    //                     <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => this.props.handleLoginChange(e)}/>
    //                 </Form.Group>
    //                 <div className="buttons">
    //                 <Button variant="success" type="button" className="create" onClick={(e) => this.props.handleSignupSubmit(e)}>
    //                 </Button>
    //                 <Button variant="primary" type="button" className="signin" onClick={(e) => this.props.toggleLogin(e)}>
    //                 </Button>
    //                 </div>
    //             </Form>
    //             </Container>
    //         </div>
    //     )
    // }
}

export default Signup