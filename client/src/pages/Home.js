import React from "react";
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'




const Home =() =>{
	return (
		<div>
 

 <Carousel >
  <Carousel.Item >
    <img
	
      className="d-block w-100"
      src="/Images/img/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Let's Go Camping</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/img/5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Let's Go Camping</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/img/6.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Let's Go Camping</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
		
		<Footer />
			</div>
		
		  
	
	  );
	}

   
export default Home;