import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode'



class AddMember extends React.Component {

    state = {}

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmetHandler = () => {
        var hospital =jwt_decode(localStorage.token).hospital
        axios.post(`http://localhost:7000/${hospital._id}/members`, this.state)
            .then(res => { console.log(res)})
            .catch(err => { console.log(err) })
    }

    render() {
        return(
            <div><h1>Add Member</h1>
            <Form onSubmit={this.onSubmetHandler}>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={this.onChangeHandler} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group controlId="formGroupLocation">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control name="nationality" onChange={this.onChangeHandler} type="text" placeholder="nationality" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control name="dateOfBirth" onChange={this.onChangeHandler} type="text" placeholder="dateOfBirth" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>National ID</Form.Label>
                    <Form.Control name="nationalID" onChange={this.onChangeHandler} type="number" placeholder="nationalID" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Blood Type</Form.Label>
                    <Form.Control name="bloodType" onChange={this.onChangeHandler} type="text" placeholder="bloodType" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control name="type" onChange={this.onChangeHandler} type="text" placeholder="type" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    
                  </Button> */}
                <Button onClick = {this.onSubmetHandler} > SignUp</Button>
            </Form></div>

        )
    }
}

export default AddMember;