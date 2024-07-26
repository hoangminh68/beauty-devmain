import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "./view/landing-page";
import Layout from "./conponent/Layout/Layout";
import { useEffect } from "react";
import Time from "./conponent/time";
import North from "./conponent/north";
import Middle from "./conponent/middle";
import Easrt from "./conponent/east";
import South from "./conponent/south";
import Hotal from "./conponent/hotael";
import Footer from "./conponent/footer";
import Foood from "./conponent/food";
import Reviews from "./conponent/reviews";
import MenuBlock from "./conponent/menu/menublobk";

function App() {
  return (

    <BrowserRouter>
<MenuBlock/>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/north" element={<North />} />
          <Route path="/Middle" element={<Middle />} />
          <Route path="/Easrt" element={<Easrt />} />
          <Route path="/south" element={<South />} />
          <Route path="/Hotal" element={<Hotal />} />
          <Route path="/Foood" element={<Foood />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
