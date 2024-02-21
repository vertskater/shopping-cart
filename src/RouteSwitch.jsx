import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./Homepage/Home";
import Shop from "./Shop/Shop";
import SingleProduct from "./Shop/SingleProduct";

export default function RouteSwitch() {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
