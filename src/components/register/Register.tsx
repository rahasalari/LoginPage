import { Outlet } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import flag from "../../assets/flag.png";
import LineErrors from "../lineErrors/LineErrors";

type Inputs = {
  email: string;
  password: string;
  phoneNumber: string;
  repeatPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const emailValue = data.email;
    localStorage.setItem("emailValue", JSON.stringify(emailValue));
  };

  console.log(errors);

  const [visible, setVisible] = useState(false);
  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  //phone number format
  // const phoneNumberFormat = (phoneNumber) => {
  //   const number = phoneNumber.trim().replace(/[^0-9]/g, "");

  //   if (number.length < 4) return number;
  //   if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
  //   if (number.length < 11)
  //     return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  //   return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  // };

  return (
    <>
      <div className="pt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center space-x-32">
            <div>
              <div className="relative">
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
                >
                  موبایل
                </label>
                <input
                  id="phoneNumber"
                  defaultValue="+98"
                  className={`${
                    errors.phoneNumber
                      ? " right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded px-13 outline-red"
                      : " right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded px-13 outline-primary"
                  }`}
                  {...register("phoneNumber", {
                    required: true,
                  })}
                />

                <div className="absolute left-8 top-3.5">
                  <img src={flag} className=" w-5" />
                  <p className=" text-9 font-bold">ایران</p>
                </div>
                <div className="absolute left-15 top-2.5 border-r-2 border-gray-400 h-7"></div>
                <br></br>
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "required" && (
                    <li className="text-red text-xs float-right me-1">
                      وارد کردن ایمیل اجباریست
                    </li>
                  )}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                ایمیل
              </label>
              <input
                id="email"
                className={`${
                  errors.email
                    ? "right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded text-right px-1 outline-red"
                    : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                }`}
                {...register("email", {
                  required: "required",
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
              <br></br>
              {errors.email && errors.email.type === "required" && (
                <li className="text-red text-xs float-right me-1">
                  وارد کردن ایمیل اجباریست
                </li>
              )}
            </div>
          </div>

          <div className="flex justify-center space-x-32 mt-20">
            <div>
              <div className="relative">
                <label
                  htmlFor="repeatPassword"
                  className="absolute left-36 -top-3 text-sm font-semibold bg-white w-20 text-center"
                >
                  تکرار رمز
                </label>
                <input
                  id="repeatPassword"
                  type={passwordShown ? "text" : "password"}
                  className={`${
                    errors.password
                      ? "right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded text-right px-1 outline-red"
                      : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                  }`}
                  {...register("repeatPassword", {
                    required: true,
                    minLength: 8,
                  })}
                />
                <br></br>
                {errors.repeatPassword &&
                  errors.repeatPassword.type === "required" && (
                    <li className="text-red text-xs text-right me-1">
                      وارد کردن پسورد اجباریست
                    </li>
                  )}
                {errors.repeatPassword &&
                  errors.repeatPassword.type === "minLength" && (
                    <li className="text-red text-xs text-right me-1">
                      پسورد حداقل دارای 8 کاراکتر است
                    </li>
                  )}
                <MdOutlineVisibility
                  onClick={togglePasswordVisiblity}
                  className="absolute left-7 top-3.5 text-xl text-gray-700 cursor-pointer"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                رمز
              </label>

              <input
                data-tooltip-id="my-tooltip"
                id="password"
                type={visible ? "text" : "password"}
                className={`${
                  errors.password
                    ? "right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded text-right px-1 outline-red"
                    : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                }`}
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />
              <Tooltip
                id="my-tooltip"
                place="bottom-start"
                html="<ol> :پسورد باید شامل موارد زیر باشد
                </b><br />حروف بزرگ و کوچک
                </b><br />اعداد
                </b><br />نشانه ها
                </b><br />حداقل 10 کاراکتر باشد
                </ol>"
              />
              <br></br>
              {errors.password && errors.password.type === "required" && (
                <li className="text-red text-xs text-right me-1">
                  وارد کردن پسورد اجباریست
                </li>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <li className="text-red text-xs text-right me-1">
                  پسورد حداقل دارای 8 کاراکتر است
                </li>
              )}
              <MdOutlineVisibility
                onClick={visibleHandler}
                className="absolute left-7 top-3.5 text-xl text-gray-700 cursor-pointer"
              />
              <LineErrors errors={errors} />
            </div>
          </div>
          <div className=" grid justify-center mt-24">
            <input
              type="submit"
              value="ارسال کد"
              className="bg-primary px-13 pb-3 pt-2 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
            />
          </div>
          <p className="text-center text-gray-500 text-xs mt-2">
            با کلیک بر روی دکمه ارسال کد شما
            <a className="text-info cursor-pointer"> قوانین </a> را پذیرفته اید
          </p>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Register;
