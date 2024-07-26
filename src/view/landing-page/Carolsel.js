import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const Slick = ({imgs})=>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        // autoplaySpeed: 2000,
        waitForAnimate: true,
        fade: true,
      };
      return (
        <SlickBox>
          <Slider {...settings}>
            {imgs.map((img)=>{
                return <img src={img} />
            })}
          </Slider>
        </SlickBox>
      );
}
export default Slick

const SlickBox = styled.div`
    width: 100%;
    aspect-ratio: 412/275;
    .slick-slide{
        aspect-ratio: 412/275;
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
            border-radius: 16px;
        }
    }
`