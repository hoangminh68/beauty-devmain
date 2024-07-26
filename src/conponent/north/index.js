import styled from "styled-components";
import {
  Box2,
  BoxSlick,
  BoxSlickElm,
  ListContainer,
} from "../../view/landing-page/styled";
import Slider from "react-slick";

const North = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Wapper>
      <ListContainer>
        <Box2>
          <div
            style={{
              display: "flex",
            padding: "10px",
              justifyContent: "center",
             
            }}
          >
            <h1 style={{textAlign: "center"}}>Overview:</h1>
          </div>

          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/Xm5FCCFp6Ps"
            title="DU LỊCH HA LONG BAY GIỚI THIỆU TIẾNG ANH - halong bay ha long bay luxury cruise ha long bay vietnam"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListvhl.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
        </Box2>

        <Box2>
          <h1></h1>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListvhl1.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
        </Box2>
        <Box2>
          <h1>Hotels in Ha Long Bay</h1>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListks.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                    <p>{item.adress}</p>
                    <p>{item.number}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
        </Box2>
        <Box2>
          <h1>Famous Restaurants in Ha Long:</h1>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListfood.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                    <p>{item.adress}</p>
                    <p>{item.number}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
        </Box2>
      </ListContainer>
    </Wapper>
  );
};
export default North;
export  const Wapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 100px;
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
const Conten = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const OutdoorListvhl = [
  {
    name: " Ha Long Bay",
    img: "https://statics.vinwonders.com/kinh-nghiem-du-lich-ha-long-7_1674039339.jpg",
  },
  {
    name: "Tuan Chau Island",
    img: "https://statics.vinwonders.com/kinh-nghiem-du-lich-ha-long-8_1674039349.jpg",
  },
  {
    name: "Cua Van Fishing Village",
    img: "https://statics.vinwonders.com/kinh-nghiem-du-lich-ha-long-10_1674039389.jpg",
  },
  {
    name: "Poem Mountain",
    img: "https://statics.vinwonders.com/kinh-nghiem-du-lich-ha-long-11_1674039399.jpg",
  },
];
const OutdoorListvhl1 = [
  {
    name: "Attraction in Ha Long",
    img: "https://statics.vinwonders.com/kinh-nghiem-du-lich-ha-long-12_1674039408.jpg",
  },
  {
    name: "Lan Ha Bay",
    img: "https://statics.vinwonders.com/vinh-lan-ha-2-compressed_1688286288.jpeg",
  },
  {
    name: "Bai Tu Long Bay",
    img: "https://statics.vinwonders.com/vinh-bai-tu-long-ngo-ngang-canh-sac-tua-chon-bong-lai-tien-canh-3-1641549879_1688286593.jpeg",
  },
  {
    name: "Old Town Ha Long",
    img: "https://statics.vinwonders.com/13dc2452-cf2d-49b7-87ee-4ae7cc839d89%20(1)_1688286663.jpg",
  },
];
const OutdoorListks = [
  {
    name: " Vinpearl Resort & Spa Hạ Long",
    adress: "Rieu Island, Bai Chay, Ha Long City, Quang Ninh Province",
    number: "84-203 385 7858",
    img: "https://statics.vinwonders.com/styles/images_530_x_312/public/2021_08/vinpearl-resort-&-spa-ha-long-1_1629197795.jpg.webp?itok=IJbpNaF3",
  },
  {
    name: "Tuan Chau Resort Ha Long",
    adress: "Address: Tuan Chau Island, Ha Long City, Quang Ninh Province.",
    number: "84-203 385 6895",
    img: "https://owa.bestprice.vn/images/articles/uploads/top-12-khach-san-ha-long-gia-tot-co-vi-tri-dep-nhat-5e6af3aecf72c.jpg",
  },
  {
    name: " À la Carte Ha Long Bay",
    adress: "Address: HH03 Central Peninsula - Ha Long Marina, Quang Ninh.",
    number: "84-203 385 7858",
    img: "https://owa.bestprice.vn/images/articles/uploads/top-12-khach-san-ha-long-gia-tot-co-vi-tri-dep-nhat-5e6af3aecf817.jpg",
  },
  {
    name: " Mường Thanh Holiday",
    adress:
      "Address: Halong Road, Bai Chay Ward, Ha Long City, Quang Ninh Province",
    number: "84-203 385 7858",
    img: "https://owa.bestprice.vn/images/media/a-la-carte-ha-long-65573271a4144.jpg",
  },
];

const OutdoorListfood = [
  {
    name: "Cua Vang Ha Long Restaurant",
    adress: "Address: 32 Phan Chu Trinh Street, Bai Chay Ward, Ha Long City",
    number: "84-203 385 7858",
    img: "https://statics.vinwonders.com/nha-hang-ha-long-02_1629085171.jpg",
  },
  {
    name: "Thuy Chung Seafood Restaurant ",
    adress: "Address: 50 Halong Road, Bai Chay Ward, Ha Long City",
    number: "84-203 385 357",
    img: "https://statics.vinwonders.com/nha-hang-ha-long-09_1629085409.jpg",
  },
  {
    name: " À la Carte Ha Long Bay",
    adress: "Address: HH03 Central Peninsula - Ha Long Marina, Quang Ninh.",
    number: "84-203 385 7858",
    img: "https://owa.bestprice.vn/images/articles/uploads/top-12-khach-san-ha-long-gia-tot-co-vi-tri-dep-nhat-5e6af3aecf817.jpg",
  },
  {
    name: " Mường Thanh Holiday",
    adress:
      "Address: Halong Road, Bai Chay Ward, Ha Long City, Quang Ninh Province",
    number: "84-203 385 7858",
    img: "https://owa.bestprice.vn/images/media/a-la-carte-ha-long-65573271a4144.jpg",
  },
];
