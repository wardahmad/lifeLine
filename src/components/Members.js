import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class Members extends Component {
    state = {
        name: "",
        nationality: "",
        nationalID: "",
        BloodType: "",
        type: "",
        arr: []
    }

    componentDidMount() {
        var hospital = jwt_decode(localStorage.token).hospital
        //console.log(hospital)

        axios.get(`http://localhost:7000/members/${hospital._id}`)
            .then(res => {
                //var hospitalID = res.data.hospital;
                //console.log(res) 
                //console.log(res.data.member.member[0].name)
                this.setState({
                    // name: res.data.member.member[1].name,
                    // nationality: res.data.member.member[1].nationality,
                    // nationalID: res.data.member.member[1].nationalID,
                    // BloodType: res.data.member.member[1].bloodType,

                    // type: res.data.member.member[0].type
                    arr: res.data.member.member
                    //     id : hospital._id
                    //     //hospital : jwt_decode(localStorage.token).hospital
                })


                console.log(this.state.arr)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {this.state.arr.map((element, key) =>

                    //    <span> Name: {element.name}
                    //     nationality: {element.nationality}
                    //     nationalID: {element.nationalID}<br></br>
                    //     type: {element.type}</span>

                    <span>
                    <Card body className="text-center">
                        <CardTitle>Full Name: {element.name}</CardTitle>
                        <CardText>Nationality: {element.nationality}</CardText>
                        <CardText>NationalID: {element.nationalID}</CardText>
                        <CardText>type: {element.type}</CardText>
                        <Button>Go somewhere</Button>
                    </Card>

                    </span>



                )}
            </div>
        )
    }
}
