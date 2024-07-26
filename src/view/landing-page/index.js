import styled from "styled-components";
import MenuDestop from "../../conponent/menu";
import Time from "../../conponent/time";
import { fakeEcreational } from "../../fakeData";
import BoxContent from "./NecessaryThings";
import {
  Box2,
  BoxFilter,
  BoxSlick,
  BoxSlickElm,
  LandingWapper,
  ListContainer,
  Panner,
  SearchBox,
  SelectBox,
  SelectElm,
  Tab,
  Tabs,
} from "./styled";
import { useState } from "react";
import Slider from "react-slick";

const Landing = () => {
  const [tabActive, setTabActive] = useState(1);
  const [activeElm, setActiveElm] = useState(
    <BoxContent data={fakeEcreational.Necessary_Things} />
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <LandingWapper>
      <Panner>
        <h3>
          Welcome to Vietnam, where our stunning beaches and vibrant culture
          awaits
        </h3>
      </Panner>
     
      <ListContainer>
        <h3>Nha Trang City :</h3>
        <p>
          Nha Trang is most famous for its stunning white sand beaches. But
          that's not all; the city also boasts amusement parks, mud baths, golf
          courses, and the historic Po Nagar Cham Towers, along with numerous
          hotels and restaurants. Culinary enthusiasts seeking adventure can try
          "bún chả cá," a noodle dish made from sailfish and jellyfish, while
          most people can enjoy fresh seafood, delicious noodles, and savory
          bánh xèo (Vietnamese savory pancakes).
        </p>
        <h6>Distinctive Features of Nha Trang.</h6>
        <Tabs>
          {ArrayTabs.map((item) => {
            return (
              <Tab
                key={item.id}
                className={tabActive === item.id ? "activeTab" : ""}
                onClick={() => {
                  setTabActive(item.id);
                  setActiveElm(item.data);
                }}
              >
                <span>{item.title}</span>
              </Tab>
            );
          })}
        </Tabs>
        {activeElm}
        <Box2>
          <h1>Wonderful Things About Nha Trang</h1>
          <h2>Nearby offshore islands</h2>

          <BoxSlick>
            <Slider {...settings}>
              {NearbyList.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
          <div>
            <h1>
              Travel to Da Nang: Explore All the Famous Spots of Vietnam's Most
              Livable City
            </h1>
          </div>
          <h2>Da Nang Tourist Area</h2>
          <BoxSlick style={{ width: "100%" }}>
            <Slider {...settings1}>
              {BarList.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
          <h2>Waterfalls and Mountains in Da Nang</h2>
          <p>Address:</p>
          <p>
            Located right at the foot of Ba Na Mountain, Dream Stream is an
            attractive ecotourism destination that draws visitors for
            sightseeing. This Da Nang tourist spot boasts picturesque scenery
            with lush green forests, crystal-clear stream water, and a cool
            climate year-round. It is ideal for activities such as fun games,
            exploration, camping, and outdoor picnics.
          </p>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorList.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
          <h1>
            Travel to Ha Long: Explore the Most Famous Landmarks and Delicious
            Dishes
          </h1>
          <p>Address :</p>
          <p>
            Ha Long, located in Quang Ninh Province about 180 km from Hanoi, is
            known as the northern paradise of tourism. Thanks to its convenient
            location, modern infrastructure, and developed transportation
            system, Ha Long attracts tens of millions of domestic and
            international visitors each year.
          </p>
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
          <h1>Phu Quoc Tourist Area</h1>
          <p>Address:</p>
          <p>
            Phu Quoc is an island located in the Gulf of Thailand, off the coast
            of Cambodia, but administratively it is part of Vietnam. It is
            situated in Kien Giang Province, in the southwest of Vietnam. The
            island is known for its beautiful beaches, resorts, and natural
            landscapes.
          </p>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListpq.map((item) => {
                return (
                  <BoxSlickElm>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </BoxSlickElm>
                );
              })}
            </Slider>
          </BoxSlick>
          <BoxSlick>
            <Slider {...settings}>
              {OutdoorListpq1.map((item) => {
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
      </ListContainer>
    </LandingWapper>
  );
};
export default Landing;
const Menukkk = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 99999999999999999999999999999999999999999999999999999999999999999999999;
`;
const ArrayTabs = [
  {
    title: "Necessary Things.",
    id: 1,
    data: <BoxContent data={fakeEcreational.Necessary_Things} />,
  },
  {
    title: "Family Friendly.",
    id: 2,
    data: <BoxContent data={fakeEcreational.Family_Friendly} />,
  },
  {
    title: "Nightlife",
    id: 3,
    data: <BoxContent data={fakeEcreational.Nightlife} />,
  },
];

const NearbyList = [
  {
    name: "Hon Mun Island",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/25/99/b7/hon-mun-island.jpg?w=300&h=300&s=1",
  },
  {
    name: "Hon Mieu Island",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/3a/36/b9/beautiful.jpg?w=300&h=300&s=1",
  },
  {
    name: "Binh Ba Island",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/69/fe/58/d-o-binh-ba.jpg?w=300&h=300&s=1",
  },
  {
    name: "Monkey Island Tourist Area",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/73/51/00/monkey-selfie-moment.jpg?w=300&h=300&s=1",
  },
  {
    name: "Yen Island - Hon Noi",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c3/c2/4f/nice-picture.jpg?w=300&h=-1&s=1",
  },
];

const BarList = [
  {
    name: "Danang Rong Bridge",
    img: "https://statics.vinwonders.com/du-lich-da-nang_1657939501.JPG",
  },
  {
    name: "Bang Reef",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-2_1631853665.jpg",
  },
  {
    name: " Marble Mountains",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-4_1631853895.jpg",
  },
];
const OutdoorList = [
  {
    name: " Dream Stream",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-6_1631854557.jpg",
  },
  {
    name: "Ba Do Phot Waterfall",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-7_1631854639.jpg",
  },
  {
    name: "Heaven's Well",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-11_1631861818.jpg",
  },
  {
    name: "Non Nuoc Beach",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-da-nang-19_1631864478.jpg",
  },
];
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

const OutdoorListpq = [
  {
    name: "Doi Moi Island",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-hon-doi-moi_1624268141.jpg",
  },
  {
    name: "Hon Mot Island",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-3_1660811426.JPG",
  },
  {
    name: "Ong Lang Beach",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-5_1660811483.JPG",
  },
  {
    name: "Sao Beach",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-1_1689939293.jpg",
  },
];

const OutdoorListpq1 = [
  {
    name: "Khem Beach",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-6_1660811789.jpg",
  },
  {
    name: "Coral Reef Diving Island",
    img: "https://statics.vinwonders.com/Goi-y-30-dia-diem-du-lich-phu-quoc-dep-nao-long-khong-the-bo-qua-17.jpg",
  },
  {
    name: "Tranh Stream",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-9_1660812453.JPG",
  },
  {
    name: "Mong Tay Island",
    img: "https://statics.vinwonders.com/dia-diem-du-lich-phu-quoc-11_1660812832.JPG",
  },
];
