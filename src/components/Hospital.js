import React from 'react';
import Axios from 'axios';
//import axios from 'axios';
import jwt_decode from 'jwt-decode'
//import EditHospital from './EditHospital'

class Hospital extends React.Component {
  state = {
    name: "",
    location: "",
    email: "",
    hospital: "",
    id: ""
  }

  componentDidMount(){
    var hospital =jwt_decode(localStorage.token).hospital
    console.log(hospital)
    Axios.get(`http://localhost:7000/hospital/${hospital._id}`)
    .then(res => {
      //var hospitalID = res.data.hospital;
      //console.log(hospitalID) 
      console.log(res.data.hospital.name)
      this.setState({
        name: res.data.hospital.name,
        location: res.data.hospital.location,
        email: res.data.hospital.email,
        id : hospital._id
        //hospital : jwt_decode(localStorage.token).hospital
        })
    })

    .catch(console.log)
  }

  deleteHospital=(e)=>{
    Axios.delete(`http://localhost:7000/hospital/${this.state.id}`) //http://localhost:7000/hospital/:id
    .then(res => {
      //console.log(res)
      console.log(res)
      //this.props.history.push('./hospital')
    } 
      )}

  editHospital=()=>{
    this.props.history.push(`./EditHospital/${this.state.id}`)
  }

  addMember=()=>{
    this.props.history.push(`./AddMember/${this.state.id}`)
  }


  render() {
    return (
      <div>
        <h1>Hospital Information</h1>
        Hospital Name: {this.state.name}<br></br>
        location: {this.state.location}<br></br>
        email: {this.state.email}<br></br>
        {/* {this.state.id} */}
        {/* {this.state.hospital} */}
        

        <button onClick={(e) => this.deleteHospital(e)}>Delete Hospital</button>{' '}
        <button onClick={(e) => this.editHospital(e)}>Edit Hospital</button>{' '}
        <button onClick={(e) => this.addMember(e)}>Add Member</button>
      </div>
    )
  }
}

export default Hospital;