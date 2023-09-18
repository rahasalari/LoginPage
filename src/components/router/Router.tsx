import { Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import Register from "../register/Register";
import Verificationcode from "../register/Verificationcode";

const Router = () => {
  return (
    <div className="bg-white grid content-center mx-auto rounded-3xl ms-28 me-28 pt-14 pb-36">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verificationcode" element={<Verificationcode />} />
      </Routes>
    </div>
  );
};
export default Router;
