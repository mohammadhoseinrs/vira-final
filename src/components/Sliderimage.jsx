import React, { Component } from "react";
import Slider from "react-slick";
import './Sliderimage.css'
import image2 from './../Assets/images/image2.png'
export default class CenterMode extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
      };
    return (
        <div className="md1">
        <Slider {...settings} >
          <div className="div1">
            <h3>1</h3>
          </div>
          <div className="div1">
            <h3>2</h3>
          </div>
          <div className="div1">
            <h3>3</h3>
          </div>
          <div className="div1">
            <h3>4</h3>
          </div>
          <div className="div1">
            <h3>5</h3>
          </div>
          <div className="div1">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}