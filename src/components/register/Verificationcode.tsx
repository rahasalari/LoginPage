import { Link } from "react-router-dom";
import FourNumberInput from "../fourNumberInput/fourNumberInput";

const VerificationCode = () => {
  const email = localStorage.getItem("emailValue");
  const emailValue = email?.replace(/"|'/g, "");

  return (
    <>
      <div className="flex ms-auto me-7">
        <Link
          className="text-primary text-xs pt-1 me-1 cursor-pointer font-semibold"
          to="/register"
        >
          ویرایش ایمیل
        </Link>
        <p className="me-1 font-semibold text-[16.5px]">: {emailValue}</p>
        <p className="font-semibold text-[16.5px] me-3">ارسال کد به ایمیل</p>
      </div>
      <div className="mt-24">
        <FourNumberInput value="ثبت نام" />
      </div>
    </>
  );
};

export default VerificationCode;
