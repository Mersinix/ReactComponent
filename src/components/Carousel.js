import React from "react";
import {Carousel} from 'react-bootstrap';


function Carousell () {
    return (
        <div className="">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/pablo3.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/pablo1.jpg"
      alt="Third slide"
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/pablo3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    

            </div>
    )
}

export default Carousell



