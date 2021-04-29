import React from "react";
import blog_slide from "./blog_slide.jpg";
import blog_slide1 from "./blog_slide1.jpg";
import blog_slide2 from "./blog_slide2.jpg";
import Carousel from "react-bootstrap/Carousel";
import zIndex from "@material-ui/core/styles/zIndex";
function Blog_slider() {
  const mystyle = {
    height: "80vh",
    zIndex: -1,
  };
  return (
    <div>
      <Carousel interval="2000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={blog_slide2}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={blog_slide1}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={blog_slide}
            alt="1st image"
            style={mystyle}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Blog_slider;
