import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

class SignIn extends React.Component {

    state = {}

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmetHandler = () => {
        axios.post("http://localhost:7000/login", this.state)
        .then(res =>   {
            
            console.log(res.data.login)
        if (res.data.login){
            console.log(res.data.token)
            var pynode = jwt_decode(res.data.token)
            console.log(pynode)
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/hospital')
            //localStorage.hospital
        }
        })
        .catch(err => console.log(err))
    }

    render() {
        //console.log(this.state)
        return (

            <Form onSubmit={this}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={this.onChangeHandler} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.onChangeHandler} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    
                  </Button> */}
                  <Button onClick={this.onSubmetHandler} >Sign In</Button>
            </Form>

        );
    }
}

export default SignIn;

