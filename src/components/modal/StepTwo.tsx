import { useState } from "react";
import { useForm } from "react-hook-form";
import Timer from "../timer/Timer";
import { IoCloseOutline } from "react-icons/io5";

type Inputs = {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
};

function StepTwo(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //get code
  const onSubmit = (data) => {
    // const separateCode = Object.values(data);
    // const code = separateCode.join("");
    // console.log(code);
  };

  const email = localStorage.getItem("modifyEmail");
  const modifyEmail = email?.replace(/"|'/g, "");

  const [showModal, setShowModal] = useState<boolean>(true);

  const closeHandler = () => {
    setShowModal(false);
  };

  function click() {
    const separateCode = Object.values(data);
    const code = separateCode.join("");
    console.log(code);
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
            <div className="fixed inset-0 flex-row justify-center mx-auto my-auto w-144 h-[530px] bg-white border rounded-2xl">
              <div>
                <IoCloseOutline
                  className="bg-gray-200 rounded-md text-2xl ms-7 mt-6 w-7 h-6 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-base mt-16">
                تغییر رمز
              </p>
              <p className="flex justify-center font-bold text-gray-400 text-sm mt-3">
                را وارد کنید
                <span className=" text-primary px-2">{modifyEmail} </span>کد
                ارسال شده به
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2 justify-center mt-14">
                  <input
                    id="firstInput"
                    className="border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary"
                    maxLength={1}
                    {...register("firstInput", {
                      required: true,
                    })}
                  />
                  <input
                    id="secondInput"
                    className=" border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary "
                    maxLength={1}
                    {...register("secondInput", {
                      required: true,
                    })}
                  />
                  <input
                    id="thirdInput"
                    className=" border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary"
                    maxLength={1}
                    {...register("thirdInput", {
                      required: true,
                    })}
                  />
                  <input
                    id="fourthInput"
                    className=" border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary"
                    maxLength={1}
                    {...register("fourthInput", {
                      required: true,
                    })}
                  />
                </div>
                <div className="grid justify-items-center ms-60">
                  <Timer seconds={180} />
                </div>
                <div className=" grid justify-center mt-14">
                  <input
                    type="submit"
                    value="ادامه "
                    className="bg-primary px-15 pb-3 pt-2 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      click();
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="backdrop-blur-[2px] fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
}
export default StepTwo;
