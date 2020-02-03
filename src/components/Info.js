//"use strict"
import React from 'react';
//import { Card, Button, Container, Image } from 'react-bootstrap';
import { Card, Button} from 'react-bootstrap';

import img4 from './img/img4.jpg';

class Info extends React.Component {
  render() {
    return (

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Donate your blood, save lives.</Card.Title>
          <Card.Text>
            You can save up to three lives everytime you donate your blood to any rejested hospital or medical center
              </Card.Text>
          <Button variant="primary">Donate</Button>
        </Card.Body>
        <Card.Img src={img4} rounded mx-auto d-block />
      </Card>

    );
  }
}

export default Info;