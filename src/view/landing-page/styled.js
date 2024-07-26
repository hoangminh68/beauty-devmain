import styled from "styled-components";
export const LandingWapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 7%;
  &::after {
    content: "";
    width: 100vw;
    background-image: url("./assets/panner1.png");
    aspect-ratio: 1728/897;
    position: absolute;
    top: -83px;
    left: 50%;
    background-size: cover;
    transform: translateX(-50%);
    z-index: -2;
  }
  &::before {
    content: "";
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    aspect-ratio: 1728/897;
    position: absolute;
    top: -83px;
    left: 50%;
    background-size: cover;
    transform: translateX(-50%);
    z-index: -1;
  }
p{
  font-size: 24px !important;
}
h1{
  font-size: 30px !important;
}
h2{
  font-size: 30px !important;
}
`;
export const Panner = styled.div`
  width: 100%;
  aspect-ratio: 1520/1125;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h3 {
    font-size: 55px;
    text-align: center;
    line-height: 75px;
    color: #fff;
  }
`;
export const BoxFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 80px;
`;
export const SearchBox = styled.div`
  width: calc(50% - 25px);
  padding: 8px 16px;
  border: 1px solid rgba(170, 168, 168, 1);
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  img {
    max-width: 22px;
  }
  input {
    width: calc(100% - 52px);
    background-color: transparent;
    outline: none;
    border: none;
  }
`;
export const SelectBox = styled.div`
  width: calc(50% - 25px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;
export const SelectElm = styled.div`
  width: calc(50% - 15px);
  border: 1px solid rgba(170, 168, 168, 1);
  padding: 8px 16px 8px 24px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: 20px;
    background-color: #fff;
    transform: translateY(-50%);
    color: #000;
    font-size: 12px;
    padding: 0px 5px;
    font-weight: 600;
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -150px;
  gap: 20px;
  overflow: hidden;
  h3 {
    font-size: 26px;
    font-weight: 700;
    width: 100%;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    width: 100%;
  }
  h6{
    font-size: 20px;
    font-weight: 700;
    width: 100%;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 15px;
  &::after{
    width: 100%;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    height: .5px;
    content: "";
    z-index: 1;
  }
  .activeTab{
    background-color: #fff;
    border: 0.5px solid rgba(0,0,0,0.2);
    transition: all 0.3s linear;
    border-bottom: 0.5px solid #fff;
  }
`
export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  position: relative;
  z-index: 2;
  border-radius: 10px 10px 0px 0px;
  transition: all 0.3s linear;
  border-bottom: 0.5px solid #fff;
  cursor: pointer;
  span{
    font-size: 16px;
    font-weight: 500;
    width: 100%;
  }
`
export const Box2 = styled.div`
  margin-top: 70px;
  width: 100%;
  position: relative;
  h1{
    font-size: 26px;
    font-weight: 700;
    width: 100%;
  }
  h2{
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    margin-top: 20px;
  }
`
export const BoxSlick = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0px 40px;
  .slick-slider{
    width: 100%;
  }
  .slick-next, .slick-prev{
    background-color: #333;
    border-radius: 50%;
  }
`
export const BoxSlickElm = styled.div`
  padding: 10px;
  img{
    width: 100%;
    border-radius: 12px;
    aspect-ratio: 1;
    object-fit: cover;
  }
  p{
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    margin-top: 10px;
  }
`