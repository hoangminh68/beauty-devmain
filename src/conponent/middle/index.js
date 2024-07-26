import Slider from "react-slick";
import {
  Box2,
  BoxSlick,
  BoxSlickElm,
  ListContainer,
} from "../../view/landing-page/styled";
import { Wapper } from "../north";

const Middle = () => {
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
            src="https://www.youtube.com/embed/TxHE0Kmmcgk"
            title="Top 9 những địa điểm du lịch Đà Nẵng nổi tiếng"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <BoxSlick>
            <Slider {...settings}>
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
        </Box2>
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/PSqscwxujno"
          title="HƯỚNG DẪN DU LỊCH ĐÀ NẴNG TẤT TẦN TẬT . NAMAN RETREAT và MIKAZUKI . DA NANG VIET NAM TRAVEL GUIDE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <Box2>
          <h1></h1>
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
        </Box2>
      </ListContainer>
    </Wapper>
  );
};
export default Middle;

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
