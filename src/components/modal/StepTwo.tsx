import { useState, useRef } from "react";
import FourNumberInput from "../fourNumberInput/FourNumberInput";
import { IoIosClose } from "react-icons/io";

function StepTwo(props) {
  //show modal
  const [showModal, setShowModal] = useState<boolean>(true);
  const closeHandler = () => {
    setShowModal(false);
    props.closeClick();
    // reset();
  };

  //get email
  const email = localStorage.getItem("modifyEmail");
  const modifyEmail = email?.replace(/"|'/g, "");

  function click() {
    props.onCliclProp();
    console.log("a");
  }

  return (
    <>
      {showModal && (
        <>
          <a
            className="relative text-info font-bold text-sm me-1 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            فراموشی رمز
          </a>
          <div className=" my-auto z-50">
            <div className="fixed inset-0 flex-row justify-center mx-auto my-auto w-[630px] h-[530px] bg-white border rounded-2xl">
              <div>
                <IoIosClose
                  className="bg-gray-200 rounded-md text-2xl ms-8 mt-7 w-10 h-9 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-base mt-14">
                تغییر رمز
              </p>
              <p className="flex justify-center font-bold text-gray-400 text-sm mt-3">
                : را وارد کنید
                <span className=" text-primary px-2">{modifyEmail} </span>کد
                ارسال شده به
              </p>
              <div className="mt-14">
                <FourNumberInput value="ادامه" clickProp={click} />
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[2px] fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
}
export default StepTwo;
