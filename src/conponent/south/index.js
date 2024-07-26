import Slider from "react-slick";
import {
  Box2,
  BoxSlick,
  BoxSlickElm,
  ListContainer,
} from "../../view/landing-page/styled";
import { Wapper } from "../north";

const South = () => {
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
            <h1 style={{ textAlign: "center" }}>Overview:</h1>
          </div>

          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/__5mr_Xtb30"
            title="Phu Quoc Paradise Pearl Island - Vietnam Travel Guide | Flycam Tp Phú Quốc | Traveller"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

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
        </Box2>
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/F8JwXQdcW9Q"
          title="HƯỚNG DẪN DU LỊCH PHÚ QUỐC 2024 . REVIEW TOUR 4 ĐẢO PHÚ QUỐC , CÁP TREO HÒN THƠM , ĐỊA TRUNG HẢI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <Box2>
          <h1></h1>
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
    </Wapper>
  );
};
export default South;

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
