import styled from "styled-components";
import { fakeEcreational } from "../../fakeData";
import Slick from "./Carolsel";
import { Link } from "react-router-dom";
const BoxContent = ({data}) => {
  return (
    <BoxContainer>
      {data?.Bookmarks.map((Bookmarks ,index) => {
        return (
          <BoxGroup >
           {Bookmarks.title}
            <h5>{Bookmarks.title}</h5>
            {Bookmarks.content.map((item) => {
              let elements = [];
              for (let i = 1; i <= item.poin; i++) {
                elements.push(<img src="./assets/start.png" />);
              }
              return (
                <BoxElm>
                  <Slick imgs={item.imgs} />
                  
                  <h5>{item.title}</h5>
                  <BoxStart>{elements}</BoxStart>
                  <p>{item.des}</p>
                </BoxElm>
              );
            })}
          </BoxGroup>
        );
      })}
    </BoxContainer>
  );
};
export default BoxContent;
const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 10px;
  flex-wrap: wrap;
  h5 {
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    margin-top: 70px;
  }
`;
const BoxGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 10px;
  flex-wrap: wrap;
`;
const BoxElm = styled.div`
  width: calc((100% - 75px) / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  h5 {
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    margin-top: 0px;
  }
`;
const BoxStart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    max-width: 16px;
  }
`;
