import React, { Component } from 'react'
import Axios from 'axios';
import jwt_decode from 'jwt-decode'
export default class Members extends Component {
    state = {
        name: "",
        nationality: "",
        nationalID: "",
        BloodType: "",
        type: ""
    }

    componentDidMount(){
        var hospital =jwt_decode(localStorage.token).hospital
        //console.log(hospital)

        Axios.get(`http://localhost:7000/members/${hospital._id}`)
        .then(res => {
          //var hospitalID = res.data.hospital;
          //console.log(res) 
          //console.log(res.data.member.member[0].name)
          this.setState({
            name: res.data.member.member[0].name,
            nationality: res.data.member.member[0].nationality,
            nationalID: res.data.member.member[0].nationalID,
            BloodType: res.data.member.member[0].bloodType,

            type: res.data.member.member[0].type
        //     id : hospital._id
        //     //hospital : jwt_decode(localStorage.token).hospital
             })
        })
        .catch(console.log)
      }
    
    render() {
        return (
            <div>
                <h1>All Members</h1>
                Name: {this.state.name}<br></br>
                Nationality: {this.state.nationality}<br></br>
                NationalID :{this.state.nationalID}<br></br>
                Type: {this.state.type}   
            </div>
        )
    }
}
