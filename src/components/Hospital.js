import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

class Hospital extends React.Component {
  state = {
    name: "",
    location: "",
    email: "",
    hospital: "",
    id: ""
  }

  componentDidMount() {
    var hospital = jwt_decode(localStorage.token).hospital
    console.log(hospital)
    axios.get(`http://localhost:7000/hospital/${hospital._id}`)
      .then(res => {

        console.log(res.data.hospital.name)
        this.setState({
          name: res.data.hospital.name,
          location: res.data.hospital.location,
          email: res.data.hospital.email,
          id: hospital._id
        })
      })

      .catch(console.log)
  }

  deleteHospital = (e) => {
    axios.delete(`http://localhost:7000/hospital/${this.state.id}`)
      .then(res => {
        //console.log(res)
        console.log(res)
        this.props.history.push('./')
      }
      )
  }

  editHospital = () => {
    this.props.history.push(`./editHospital/${this.state.id}`)
  }

  addMember = () => {
    this.props.history.push(`./addMember/${this.state.id}`)
  }


  render() {
    return (
      <div>
        <Card style={{ width: '33rem' }} className='hospitalCard'>
          <CardHeader><p className="hospitalFont">Hospital Information</p></CardHeader>
          <CardBody>
            <CardTitle></CardTitle>
            <CardText><p className="hospitalPar">Hospital Name: {this.state.name}</p></CardText>

            <CardTitle></CardTitle>
            <CardText><p className="hospitalPar">Location: {this.state.location}</p></CardText>

            <CardTitle></CardTitle>
            <CardText><p className="hospitalPar">Email: {this.state.email}</p></CardText>

            <i aria-hidden="true" class="edit outline link icon" onClick={(e) => this.editHospital(e)}></i>
            <i aria-hidden="true" class="delete link icon" onClick={(e) => this.deleteHospital(e)}></i>


          </CardBody>
          <CardFooter><Button color="success" onClick={(e) => this.addMember(e)}>Add Member</Button></CardFooter>
        </Card>
      </div>
    )
  }
}

export default Hospital;