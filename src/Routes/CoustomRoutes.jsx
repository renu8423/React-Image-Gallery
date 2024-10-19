
import { Routes, Route } from "react-router-dom";
import Imagedex from "../component/imagedex/imagedex.jsx";
import Imagedetail from "../component/imagedetails/imagedetail.jsx"

 const CustomRoutes =function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Imagedex />} />
      <Route path="/imagedetail/:id" element={<Imagedetail />} />
    </Routes>
  );
}

console.log(CustomRoutes);

export default CustomRoutes;


