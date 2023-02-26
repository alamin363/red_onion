import { Box } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        "&::before": {
          color: "#191919",
          // content:'"next"'
        },
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        "&::before": {
          color: "#191919",
          // content:'"pre"'
        },
      }}
      onClick={onClick}
    />
  );
}
const ImageSlider = ({ images }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box sx={{ width: "450px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={image}
                alt="meal"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
