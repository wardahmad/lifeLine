import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import signin from './img/signin.png';

export class SignUp extends React.Component {

    constructor(props) {
       super(props);
}
   
render(){
        return(
            <Form>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Hospital" />
                </Form.Group>
                <Form.Group controlId="formGroupLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="city, district" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
            </Form>


        );
    }
}
export default SignUp;

