import Slider from "react-slick";
import {
  Box2,
  BoxSlick,
  BoxSlickElm,
  ListContainer,
} from "../../view/landing-page/styled";
import { Wapper } from "../north";

const Easrt = () => {
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
            src="https://www.youtube.com/embed/_B2sYOSCbXo"
            title="Khám phá Nha Trang qua những địa danh nổi tiếng | IELTS Fighter"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <BoxSlick></BoxSlick>
        </Box2>
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/oWx7_FpjVt0"
          title="DU LỊCH NHA TRANG đến 9 Địa Điểm Vui và Đẹp Nhất tại Nha Trang. 9 Most Beautiful Places in Nha Trang"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/Q7Mmb7xlYQA"
          title="HƯỚNG DẪN DU LỊCH NHA TRANG 2024 . Ăn gì chơi gì Tại Nha Trang. Review Đảo khỉ, resort đẹp Nha Trang"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ListContainer>
    </Wapper>
  );
};
export default Easrt;
