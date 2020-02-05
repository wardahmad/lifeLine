import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';


export class SignUp extends React.Component {

    state = {}

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmetHandler = () => {
        axios.post("http://localhost:7000/hospital", this.state)
            .then(res => { console.log(res)
                this.props.history.push('/SignIn')})
            
            .catch(err => { console.log(err) })
    }
    render() {
        //console.log(this.state)
        return (
            <Form onSubmit={this.onSubmetHandler} className="form">
                <h4 style={{textAlign: "center"}}>SignUp</h4><br></br>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Hospital Name</Form.Label>
                    <Form.Control name="name" onChange={this.onChangeHandler} type="text" placeholder="Hospital" />
                </Form.Group>
                <Form.Group controlId="formGroupLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" onChange={this.onChangeHandler} type="text" placeholder="city, district" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={this.onChangeHandler} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.onChangeHandler} type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={this.onSubmetHandler}>SignUp</Button>
            </Form>


        );
    }
}
export default SignUp;

