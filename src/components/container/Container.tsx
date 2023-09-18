import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Router from "../router/Router";
import RecentLoginList from "../recentLogin/RecentLoginList";

const Container = () => {
  const location = useLocation();
  const address = location.pathname;

  const [selected, setSelected] = useState(address);

  return (
    <div className="bg-cover bg-aliceprimary h-screen w-full grid items-center">
      <div className="bg-cover bg-snow rounded-3xl h-8/9 ms-15 me-15 mt-10 mb-10 ">
        <p className="  text-center text-4xl font-bold pt-20">AccessTool</p>
        <div className="flex justify-center mt-24">
          <Link
            to="/register"
            onClick={() => setSelected("/register")}
            className={`${
              selected === "/register" || selected === "/verificationcode"
                ? "bg-white text-black border-t-2 border-t-primary px-8 pb-3 pt-2 rounded-t-md font-bold text-sm"
                : "bg-snow px-8 pb-3 pt-2 rounded-t-md text-sm text-gray-600 hover:bg-white hover:text-black hover:border-t-2 hover:border-t-primary"
            }`}
          >
            ثبت نام
          </Link>
          <Link
            to="/login"
            onClick={() => setSelected("/login")}
            className={`${
              selected === "/login" || selected === "/"
                ? "bg-white text-black border-t-2 border-t-primary px-9 pb-3 pt-2 rounded-t-md font-bold text-sm"
                : "bg-snow px-9 pb-3 pt-2 rounded-t-md text-sm text-gray-600  hover:bg-white hover:text-black hover:border-t-2 hover:border-t-primary"
            }`}
          >
            ورود
          </Link>
        </div>
        <div className="mb-24">
          <Router />
        </div>
        {selected === "/login" || selected === "/" ? <RecentLoginList /> : null}
      </div>
    </div>
  );
};

export default Container;
