import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class Members extends Component {
    state = {
        arr: []
    }

    componentDidMount() {
        var hospital = jwt_decode(localStorage.token).hospital
        //console.log(hospital)

        axios.get(`http://localhost:7000/members/${hospital._id}`)
            .then(res => {
                this.setState({
                    arr: res.data.member.member
                })


                console.log(this.state.arr)
            })
            .catch(console.log)
    }

    // deleteMember = (e) => {
    //     axios.delete(`http://localhost:7000/members/:id`)
    //       .then(res => {
    //         //console.log(res)
    //         console.log(res)
    //         this.props.history.push('./')
    //       }
    //       )
    //   }

    render() {
        return (
            <div>
                {this.state.arr.map((element, key) =>

                    <span>
                        <Card body className="text-left" style={{ width: '30rem',alignContent: 'center', marginTop: "25px", marginLeft: "Auto", marginRight: "Auto" }}>
                            <CardTitle className="memberPar">Full Name: {element.name}</CardTitle>
                            <CardText className="memberPar">Nationality: {element.nationality}</CardText>
                            <CardText className="memberPar">NationalID: {element.nationalID}</CardText>
                            <CardText className="memberPar">Type: {element.type}</CardText>
                            <Button style={{ width: '5rem',alignContent: 'center' }} color="danger"><i aria-hidden="true" class="delete link icon" onClick={(e) => this.deleteMember(e)}></i></Button>
                            
                        </Card>

                    </span>



                )}
            </div>
        )
    }
}
