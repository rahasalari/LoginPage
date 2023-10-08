import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

type Inputs = {
  email: string;
};

const StepOne = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const modifyEmail = data.email;
    localStorage.setItem("modifyEmail", JSON.stringify(modifyEmail));
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const closeHandler = () => {
    setShowModal(false);
    reset();
    props.closeClick();
  };

  //email
  const modifyEmail = watch("email");

  function click(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(modifyEmail)) {
      localStorage.setItem("modifyEmail", JSON.stringify(modifyEmail));
      props.onCliclProp();
    }
    trigger(email);
  }

  const blurEmailHandler = (email) => {
    trigger(email);
  };

  return (
    <>
      <a
        className="relative text-info font-bold text-sm me-1 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        فراموشی رمز
      </a>
      {showModal && (
        <>
          <div className=" my-auto z-50">
            <div className="fixed inset-0 flex-row justify-center mx-auto my-auto w-[630px] h-[530px] bg-white border rounded-2xl">
              <div className="">
                <IoIosClose
                  className="bg-gray-200 rounded-md text-2xl ms-8 mt-7 w-10 h-9 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-sm mt-16">
                رمز عبور خود را فراموش کرده اید؟
              </p>
              <div
                onSubmit={handleSubmit(onSubmit)}
                className="relative text-center mt-16"
              >
                <label
                  htmlFor="email"
                  className="absolute right-52 -top-3 text-sm font-semibold bg-white w-12 "
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  className={`${
                    errors.email
                      ? " right-3 border-2 h-13 w-60 border-red mx-auto rounded ps-2 outline-red"
                      : " right-3 border h-13 w-60 mx-auto placeholder-gray-400 rounded ps-2 outline-primary"
                  }`}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  onBlur={() => blurEmailHandler("email")}
                />
                <br></br>
                <ul className="relative right-[164px] list-inside list-disc">
                  {errors.email && errors.email.type === "required" && (
                    <li className="relative text-red text-xs text-right mt-1">
                      <span className=" absolute right-6">
                        .وارد کردن ایمیل اجباریست
                      </span>
                    </li>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <li className="relative text-red text-xs text-right mt-1">
                      <span className=" absolute right-6">
                        .فرمت ایمیل را به طور صحیح وارد کنید
                      </span>
                    </li>
                  )}
                </ul>
                <a
                  className="absolute mt-2 right-48 text-info text-12 font-bold cursor-pointer"
                  onClick={closeHandler}
                >
                  بازگشت به صفحه ورود
                </a>
                <div className="flex justify-center mt-24">
                  <input
                    type="submit"
                    value="ادامه"
                    className=" bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-[4px] cursor-pointer font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      click();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[2px] fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
};
export default StepOne;
