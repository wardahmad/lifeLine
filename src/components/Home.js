import React from 'react';
import { Carousel, Container, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

class Home extends React.Component {
  render() {
    return (

      <Carousel>
        <Carousel.Item>
          <Image
            className="rounded mx-auto d-block 300px250"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>International Standards</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="rounded mx-auto d-block 300px250"
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>They live when you give</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="rounded mx-auto d-block 300px250"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Over 100 partners all over The Kingdom</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}

export default Home;