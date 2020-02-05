import React from 'react';
import axios from 'axios';
//import axios from 'axios';
import jwt_decode from 'jwt-decode'
//import EditHospital from './EditHospital'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

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
    axios.get(`http://localhost:7000/hospital/${hospital._id}`)
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
    axios.delete(`http://localhost:7000/hospital/${this.state.id}`) 
    .then(res => {
      //console.log(res)
      console.log(res)
      this.props.history.push('./')
    } 
      )}

  editHospital=()=>{
    this.props.history.push(`./editHospital/${this.state.id}`)
  }

  addMember=()=>{
    this.props.history.push(`./addMember/${this.state.id}`)
  }


  render() {
    return (
      <div>
        <Card style={{ width: '33rem'}} className='hospitalCard'>
        <CardHeader>Hospital Information</CardHeader>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText>Hospital Name: {this.state.name}</CardText>

          <CardTitle></CardTitle>
          <CardText>Location: {this.state.location}</CardText>

          <CardTitle></CardTitle>
          <CardText>Email: {this.state.email}</CardText>

          <i aria-hidden="true" class="edit outline link icon" onClick={(e) => this.editHospital(e)}></i>          
          <i aria-hidden="true" class="delete link icon" onClick={(e) => this.deleteHospital(e)}></i>          
          {/* <Button onClick={(e) => this.deleteHospital(e)}>Delete Hospital</Button>{' '} */}
          {/* <Button onClick={(e) => this.editHospital(e)}>Edit Hospital</Button>{' '} */}
          
        </CardBody>
        <CardFooter><Button onClick={(e) => this.addMember(e)}>Add Member</Button></CardFooter>
      </Card>
      </div>
    )
  }
}

export default Hospital;