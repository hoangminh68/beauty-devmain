import Landing from "../../view/landing-page";
import Footer from "../footer";
import MenuDestop from "../menu";
import MenuBlock from "../menu/menublobk";
import Time from "../time";
import { WapperLayout } from "./style";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <WapperLayout>
      <Outlet/>
      <Footer/>
    </WapperLayout>
  );
};
export default Layout;
