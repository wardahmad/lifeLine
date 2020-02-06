import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/donor.jpg';
import img2 from './img/Ethnic-Diversity-LS.jpg';
import img3 from './img/img3.jpg';

class Home extends React.Component {
  render() {
    return (

      <Carousel className="carousel">
        <Carousel.Item>
          <Image
            className="rounded mx-auto d-block carousel"
            src={img1}
            alt="First slide"
            height={500}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="rounded mx-auto d-block carousel"
            src={img2}
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="rounded mx-auto d-block carousel"
            src={img3}
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}

export default Home;