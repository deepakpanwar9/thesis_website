import React from "react";
import blog_slide from "./blog_slide.jpg";
import blog_slide1 from "./blog_slide1.jpg";
import blog_slide2 from "./blog_slide2.jpg";
import Carousel from "react-bootstrap/Carousel";
import zIndex from "@material-ui/core/styles/zIndex";
function My_home_slider() {
  const mystyle = {
    height: "100%",
  };
  return (
    <div>
      <Carousel interval="2000">
        <Carousel.Item>
          <img
            className="b-block w-100"
            src={blog_slide2}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption>
            <h3>first slide label</h3>
            <p>scenry 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="b-block w-100"
            src={blog_slide1}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>scenry 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="b-block w-100"
            src={blog_slide}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>scenry 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default My_home_slider;
