import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//AVATARS IMPORTS
import avatar1 from "../avatar1.png";
import avatar2 from "../avatar2.jpg";
import avatar3 from "../avatar3.png";
import avatar4 from "../avatar4.png";
import avatar5 from "../avatar5.png";



const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        
        >
            <>
              <img src={avatar1} alt="John Doe 1"/>
              <div className="myCarousel">
              <h3>John Doe 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ullam!</p>

              </div>
            </> 
            <>
              <img src={avatar2} alt="John Doe 2"/>
              <div className="myCarousel">
              <h3>John Doe 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ullam!</p>

              </div>
            </>
            <>
              <img src={avatar3} alt="John Doe 3"/>
              <div className="myCarousel">
              <h3>John Doe 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ullam!</p>

              </div>
            </>
            <>
              <img src={avatar4} alt="John Doe 4"/>
              <div className="myCarousel">
              <h3>John Doe 4</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ullam!</p>

              </div>
            </>           
        </Carousel>
    )
}

export default TestimonialsCarousel
