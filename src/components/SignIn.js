import React from 'react';
 import {Form} from 'react-bootstrap';
 import {Button} from 'react-bootstrap';


class SignIn extends React.Component {
render(){
        return(
            
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                  </Button>
            </Form>

        );
    }
}

export default SignIn;

