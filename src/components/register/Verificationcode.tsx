import { useRef } from "react";
import { Link } from "react-router-dom";

const VerificationCode = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const email = localStorage.getItem("emailValue");
  const emailValue = email?.replace(/"|'/g, "");

  const handleKeyUp = (index, event) => {
    if (event.target.value.length === event.target.maxLength) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

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
      <div className="flex gap-2 justify-center mt-24">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            maxLength="1"
            ref={ref}
            onKeyUp={(event) => handleKeyUp(index, event)}
            className=" border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary"
          />
        ))}
      </div>
      <div className=" grid justify-center mt-14">
        <input
          type="submit"
          value="ثبت نام"
          className="bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-[4px] cursor-pointer font-semibold"
        />
      </div>
    </>
  );
};

export default VerificationCode;
