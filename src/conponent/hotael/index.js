import Slider from "react-slick";
import {
  Box2,
  BoxSlick,
  BoxSlickElm,
  ListContainer,
} from "../../view/landing-page/styled";
import styled from "styled-components";

const Hotal = () => {
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
          <h1>Famous Hotels in Nha Trang...</h1>
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
        <Box2>
          <h1>Famous Hotels in Phu Quoc:...</h1>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListfoodpq.map((item) => {
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
          <h1>Famous Hotels in Da Nang:...</h1>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListfooddn.map((item) => {
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
export default Hotal;
const Wapper = styled.div`
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
    name: "Amiana Resort Nha Trang",
    adress: "Address: Nguyen Thien Thuat Street",
    number: "84-203 385 7858",
    img: "https://dimg04.c-ctrip.com/images/0M71b120009nz0o7eA8DD_Q60.jpg_.webp",
  },
  {
    name: "Ibis Styles Nha Trang ",
    adress: "Address: 86 Hung Vuong Street, Loc Tho Ward",
    number: "84-203 385 357",
    img: "https://dimg04.c-ctrip.com/images/0M73l120009nz0e8uE4F6_Q60.jpg_.webp",
  },
  {
    name: " Alana Nha Trang Beach Hotel",
    adress: "Address: 07 Tran Quang Khai Street | Distance from the city center",
    number: "84-203 385 7858",
    img: "https://dimg04.c-ctrip.com/images/0M76k120009nz0gji1154_Q60.jpg_.webp",
  },
  {
    name: "Sheraton Nha Trang",
    adress:
      "Address: 26-28 Tran Phu Street",
    number: "84-203 385 7858",
    img: "https://dimg04.c-ctrip.com/images/0M71b120009nz0qsd4E1B_Q60.jpg_.webp",
  },
];
const OutdoorListfoodpq = [
    {
      name: "VinOasis Phú Quốc",
      adress: "Address: Bai Dai, Ganh Dau, Phu Quoc, Kien Giang 922251, Vietnam",
      number: "84-203 385 7858",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1681201128/blog/lv02ody5jevemdtjkvcz.webp",
    },
    {
      name: "Muong Thanh Phu Quoc Hotel ",
      adress: "Address: Group 3, Ap Duong Bao, Phu Quoc, Kien Giang 92509, Vietnam",
      number: "84-203 385 357",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1681201150/blog/mmgzrxnd9k1nvgkqfes6.webp",
    },
    {
      name: " Crowne Plaza Phú Quốc",
      adress: "Address: Bai Dai Tourism Area, Ganh Dau, Phu Quoc, Kien Giang, Vietnam",
      number: "84-203 385 7858",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1681201162/blog/mkfwpi5npn5qat8uifch.webp",
    },
    {
      name: "Miana Phú Quốc",
      adress:
        "Address: 73 Đường Trần Hưng Đạo, TT. Dương Đông, Phú Quốc, Kiên Giang 92000Street",
      number: "84-203 385 7858",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1681201176/blog/rqwwygcewym20iawdovq.webp",
    },
  ];

  const OutdoorListfooddn = [
    {
      name: "Melia Vinpearl Danang Riverfront",
      adress: "Address: Khách sạnMelia Vinpearl Danang Riverfront, Vietnam",
      number: "84-203 385 7858",
      img: "https://statics.vinwonders.com/khach-san-Da-Nang-03.jpg",
    },
    {
      name: "Marriott Resort ",
      adress: "Address: Danang Marriott Resort & Spa , Vietnam",
      number: "84-203 385 357",
      img: "https://statics.vinwonders.com/khach-san-Da-Nang-05.jpg",
    },
    {
      name: " Calix Hotel",
      adress: "Address: Bai Dai Tourism Area, Ganh Dau, Phu Quoc, Kien Giang, Vietnam",
      number: "84-203 385 7858",
      img: "https://statics.vinwonders.com/khach-san-Da-Nang-09.jpg",
    },
    {
      name: "HAIAN Beach Hotel & Spa",
      adress:
        "Address: Halina Hotel and ApartmentStreet",
      number: "84-203 385 7858",
      img: "https://statics.vinwonders.com/khach-san-Da-Nang-08.jpg",
    },
  ];