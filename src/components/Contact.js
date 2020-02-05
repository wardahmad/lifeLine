import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends React.Component{
    render() {
        return(

            <Form className="contactForm">
                <h3>Contact Us</h3><br></br>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Hospital Name</Label>
                  <Input type="text" name="password" id="hospitalName" placeholder="Name" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input type="text" name="address2" id="exampleAddress2" placeholder="Address"/>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState"/>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip"/>
                </FormGroup>  
              </Col>
            </Row>
            
            <Button>Send</Button>
          </Form>
            
        );
    }
}

export default Contact;