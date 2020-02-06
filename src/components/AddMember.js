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
        var hospital = jwt_decode(localStorage.token).hospital
        axios.post(`http://localhost:7000/${hospital._id}/members`, this.state)
            .then(res => {
                console.log(res)
                this.props.history.push('/member')
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmetHandler} className="form">
                    <h3 style={{ textAlign: "center" }}>Add Member</h3>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" onChange={this.onChangeHandler} type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control name="nationality" onChange={this.onChangeHandler} type="text" placeholder="nationality" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control name="dateOfBirth" onChange={this.onChangeHandler} type="date" placeholder="dateOfBirth" />
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
                    <Button onClick={this.onSubmetHandler}>Save</Button>
                </Form></div>
        )
    }
}

export default AddMember;