import { Route, Routes } from "react-router-dom";
import Home from "../screen/Home/Home";
import productView from "../screen/productView/productView";
import Info from "../screen/InfoProduct/Info";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/viewall" Component={productView} />
      <Route path="/productdetails" Component={Info} />
    </Routes>
  );
};

export default MainRouter;
