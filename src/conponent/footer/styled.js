import styled from "styled-components";
export const Wapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  color: #fff;
  z-index: 1;
  padding: 70px 0px;
  a{
    color: #fff;
  }
  &::after{
    content: "";
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    z-index: -1;
  }
  .footer__menu {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 58%;
    .etr:nth-child(2n + 1) {
      width: 58%;
    }
  }
  a {
    text-decoration: none;
  }
  .etr__add {
    padding: 3px 0 0 0;
    .ttl:nth-child(1) {
      margin-bottom: 8px;
    }

    .ico--location {
      background-position: left top 2px;
      background-image: url("https://www.luavietours.com/assets/img/common/icon/ico_location_white.svg");
    }
    .ico {
      max-width: 365px;
      padding-right: 15px;
      padding-left: 21px;
      margin-bottom: 4px;
      background-size: 14px 14px;
      background-position: left top 3px;
      background-repeat: no-repeat;
    }
  }
  .ttl {
    font-size: 13px;
    font-size: 1.3rem;
    line-height: 1.38462;
    letter-spacing: 0em;
    font-weight: 700;
    margin-top: 14px;
  }
  li {
    list-style: none;
  }
  .footer__ttl {
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.375;
    letter-spacing: 0em;
    font-weight: 700;
  }
  .etr:nth-child(2n) {
    width: 42%;
    flex-wrap: wrap;
  }
  .sub {
    margin-top: 12px;
    li {
      margin-bottom: -3.5px;
    }
  }
  .footer__ttl {
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.375;
    letter-spacing: 0em;
    font-weight: 700;
  }
  .footer__contact {
    width: 42%;
  }
  .footer__ctc {
    max-width: 401px;
  }
  .footer__ctc form {
    position: relative;
    border: 1px solid #fff;
    margin: 19px auto 24px;
    .input {
      border: none;
      width: 100%;
      display: block;
      color: #000;
      font-size: 16px;
      line-height: 1.375;
      letter-spacing: 0em;
      padding: 6px 7px !important;
      height: auto !important;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      box-shadow: none;
    }
    .footer__ctc form .btn-send {
      z-index: 1;
      border: none;
      box-shadow: none;
      appearance: none;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 48px;
      height: 48px;
      background: url("https://www.luavietours.com/assets/img/common/icon/ico_send_white.svg")
        center / 24px 24px no-repeat;
    }
  }
`;
