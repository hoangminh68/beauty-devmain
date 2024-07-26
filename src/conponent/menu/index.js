import styled from "styled-components";
import Time from "../time";
import { BtnGroup, Logo, MenuDestopWapper, NavList } from "./style";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from "react";
const MenuDestop = () => {
  const [show, setshow] = useState(false);
  const [ishow, setishow] = useState(false);
  const handleishow = () => {
    setishow(!ishow);
  };
  const handleshow = () => {
    setshow(!show);
  };
  return (
    <MenuDestopWapper>
      <Logo>
        <Link to="/">
          <img src="./logo180.png" alt="Logo" />
        </Link>
      </Logo>
      <NavList>
        <TitleMenu onClick={handleshow}>
          <p> Our Top Picks</p>
        </TitleMenu>
        {show && (
          <NavBar>
            <Link to={"/north"} onClick={handleshow}>
              North
            </Link>
            <Link to={"middle"} onClick={handleshow}>
              Middle
            </Link>
            <Link to={"/Easrt"} onClick={handleshow}>
              East
            </Link>
            <Link to={"/south"} onClick={handleshow}>
              South
            </Link>
          </NavBar>
        )}
        <NavBareTitle onClick={handleishow}>
          <p>
          Tourist Guide
          </p>
        </NavBareTitle>
        {ishow && (
          <NavBare>
            <Link to={"/Hotal"}onClick={handleishow}>Accomodation</Link>
            <Link to={"/Foood"}onClick={handleishow}>Food and Drink</Link>
          </NavBare>
        )}
        <Link to="/Reviews">
          Reviews
        </Link>
      </NavList>
      {/* <BtnGroup>
        <button>
          <img src="./assets/icons_search.svg" />
        </button>
        <button>Sign Up</button>
        <button>Login</button>
      </BtnGroup> */}
    </MenuDestopWapper>
  );
};

export default MenuDestop;
const NavBar = styled.div`
  position: absolute;
  top: 60px;
  left: 70%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 99999999999999999999999999999999;
  background-color: #004775;
  padding: 18px;
  border-radius: 5px;
  a {
    z-index: 99999999999999999999999999999999999999999999999999999;
  }
`;
const TitleMenu = styled.div`
  position: relative;
  z-index: 11111111111111111111111111111111111111111111111111111;
  :hover {
    color: red;
    ${NavBar} {
      display: block;
    }
  }
  p {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    z-index: 9999999999999999;
  }
`;
const NavBare = styled.div`
  position: absolute;
  top: 60px;
  left: 85%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 7px;
  z-index: 999999999999999999;
  background-color: #004775;
  padding: 16px;
  border-radius: 5px;
  a {
    z-index: 9999;
  }
`;
const NavBareTitle = styled.div`
 position: relative;
 z-index: 999999999999999999999999;
  :hover {
    color: red;
    ${NavBar} {
      display: block;
    }
  }
  p {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    z-index: 9999999999999999;
  }
`;
