import { Outlet } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";
import Tooltip from "../tooltip/Tooltip";
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
    watch,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const emailValue = data.email;
    localStorage.setItem("emailValue", JSON.stringify(emailValue));

    const phoneNumberFormat = phone.toString().split(" ").join("");

    const datas = {
      password: data.password,
      repeatPassword: data.repeatPassword,
      email: data.email,
      phoneNumber: phoneNumberFormat,
    };

    if (data.password === data.repeatPassword && phone.length === 12) {
      console.log(datas);
    }
  };

  //states
  const [visible, setVisible] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [repeatePasswordError, setRepeatePasswordError] = useState("");

  //password visibility
  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };
  const unVisibleHandler = () => {
    setVisible(false);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordUnvisiblity = () => {
    setPasswordShown(false);
  };

  //tooltip visibility
  const tooltipshow = () => {
    setShowTooltip(true);
  };
  const tooltipUnshow = () => {
    setShowTooltip(false);
  };

  //phone format
  const phoneData = (e) => {
    let formattedNumber = e.target.value;

    formattedNumber = formattedNumber.replace(/\D/g, "");

    if (formattedNumber.length >= 4 && formattedNumber.length < 7) {
      formattedNumber = `${formattedNumber.slice(0, 3)} ${formattedNumber.slice(
        3
      )}`;
    } else if (formattedNumber.length >= 7) {
      formattedNumber = `${formattedNumber.slice(0, 3)} ${formattedNumber.slice(
        3,
        6
      )} ${formattedNumber.slice(6, 10)}`;
    }
    console.log(formattedNumber);

    setPhone(formattedNumber);

    if (phone.length === 11) {
      setPhoneError("");
    }
  };

  //password validation
  const checkPassword = watch("password");
  const letterRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
  const numberRegex = /\d/;
  const symbolRegex = /[^\w\s]/;

  let passwordErrors;
  let truePassword = [];
  if (checkPassword) {
    passwordErrors = [
      !letterRegex.test(checkPassword),
      !numberRegex.test(checkPassword),
      !symbolRegex.test(checkPassword),
      checkPassword.length < 10,
    ];
  }

  if (passwordErrors) {
    passwordErrors.forEach((item) => {
      if (item === true) {
        truePassword.push(item);
      }
    });
  }

  //triggers
  const blurPhoneNumberHandler = (phoneNumber) => {
    if (phone.length !== 12) {
      setPhoneError("شماره تماس را به صورت صحیح وارد کنید");
    } else {
      setPhoneError("");
    }
  };

  const blurEmailHandler = (email) => {
    trigger(email);
  };

  const blurPasswordHandler = (password) => {
    trigger(password);
  };

  const repeatPassword = watch("repeatPassword");
  const blurRepeatPasswordHandler = () => {
    if (repeatPassword !== checkPassword) {
      setRepeatePasswordError("مقدار تکرار رمز و رمز باید برابر باشد");
    } else {
      setRepeatePasswordError("");
    }
    if (repeatPassword === checkPassword) {
      setRepeatePasswordError("");
    }
  };

  return (
    <>
      <div className="pt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center space-x-32">
            <div>
              <div className="relative">
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-48 -top-3 text-sm font-semibold bg-white w-12 text-center"
                >
                  موبایل
                </label>
                <input
                  id="phoneNumber"
                  className={`${
                    phoneError
                      ? " right-3 font-semibold border-2 border-red h-13 w-60  mx-auto ms-4 rounded ps-20 pb-0.5 outline-red"
                      : " right-3 font-semibold border h-13 w-60  mx-auto placeholder-gray-400 ms-4 rounded ps-20 pb-0.5 outline-primary"
                  }`}
                  onChange={phoneData}
                  value={phone}
                  onBlur={blurPhoneNumberHandler}
                />

                <div className="absolute left-8 top-4">
                  <img src={flag} className=" w-5" />
                  <p className=" text-9 font-bold">ایران</p>
                </div>
                <span className="absolute font-semibold left-16 pt-[11.5px] text-slate-700">
                  +98
                </span>
                <div className="absolute left-15 top-3 border-r-2 border-gray-200 h-7"></div>
                <br></br>
                {phoneError ? (
                  <ul className="relative left-3 list-inside list-disc">
                    <li className="relative text-red text-xs text-right mt-1">
                      <span className=" absolute right-6">{phoneError}</span>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-48 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                ایمیل
              </label>
              <input
                id="email"
                className={`${
                  errors.email
                    ? "right-3 border-2 border-red h-13 w-60  mx-auto ms-4 rounded px-1 outline-red"
                    : "right-3 border h-13 w-60  mx-auto placeholder-gray-400 ms-4 rounded px-1 outline-primary"
                }`}
                {...register("email", {
                  required: "required",
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                onBlur={() => blurEmailHandler("email")}
              />
              <br></br>
              <ul className="relative left-3 list-inside list-disc">
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
            </div>
          </div>

          <div className="flex justify-center space-x-32 mt-20">
            <div>
              <div className="relative">
                <label
                  htmlFor="repeatPassword"
                  className="absolute left-40 -top-3 text-sm font-semibold bg-white w-20 text-center"
                >
                  تکرار رمز
                </label>
                <input
                  id="repeatPassword"
                  type={passwordShown ? "text" : "password"}
                  className={`${
                    errors.repeatPassword
                      ? "right-3 border-2 border-red h-13 w-60  mx-auto ms-4 rounded ps-10 pb-1 outline-red"
                      : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 ms-4 rounded ps-10 pb-1 outline-primary"
                  }`}
                  {...register("repeatPassword", {
                    required: true,
                  })}
                  onBlur={blurRepeatPasswordHandler}
                />
                <br></br>
                <MdOutlineVisibility
                  onMouseDown={togglePasswordVisiblity}
                  onMouseUp={togglePasswordUnvisiblity}
                  onMouseLeave={togglePasswordUnvisiblity}
                  className="absolute left-7 top-4 text-xl text-gray-700 cursor-pointer"
                />
              </div>
              {repeatePasswordError ? (
                <ul className="relative left-3 list-inside list-disc">
                  <li className="relative text-red text-xs text-right mt-1">
                    <span className=" absolute right-6">
                      {repeatePasswordError}
                    </span>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute left-48 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                رمز
              </label>

              <input
                onMouseEnter={tooltipshow}
                onMouseLeave={tooltipUnshow}
                id="password"
                type={visible ? "text" : "password"}
                className={`${
                  errors.password
                    ? "right-3 border-2 h-13 w-60 mx-auto ms-4 rounded ps-10 pb-1 outline-primary"
                    : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 ms-4 rounded ps-10 pb-1 outline-primary"
                }`}
                {...register("password", {
                  required: true,
                  minLength: 10,
                })}
                onBlur={() => blurPasswordHandler("password")}
              />
              {showTooltip && (
                <div className="absolute z-10 inset-0 flex-row mt-9 ms-32 ">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[10px] border-b-zinc-700 opacity-90 border-r-[8px] border-r-transparent mx-6"></div>
                  <div className="absolute w-40 h-22 bg-zinc-700 opacity-90 rounded-sm">
                    <Tooltip />
                  </div>
                </div>
              )}

              <br></br>
              <MdOutlineVisibility
                onMouseDown={visibleHandler}
                onMouseUp={unVisibleHandler}
                onMouseLeave={unVisibleHandler}
                className="absolute left-7 top-4 text-xl text-gray-700 cursor-pointer"
              />
              <LineErrors
                errors={errors}
                firstLineError={`${
                  (!passwordErrors && "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 4 &&
                    "rounded-lg w-[56px] h-1 bg-red") ||
                  (passwordErrors &&
                    truePassword.length < 4 &&
                    truePassword.length > 0 &&
                    "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 0 &&
                    "rounded-lg w-[56px] h-1 bg-success")
                }`}
                secondLineError={`${
                  (!passwordErrors && "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 4 &&
                    "rounded-lg w-[56px] h-1 bg-red") ||
                  (passwordErrors &&
                    truePassword.length === 3 &&
                    "rounded-lg w-[56px] h-1 bg-warning") ||
                  (passwordErrors &&
                    truePassword.length < 3 &&
                    truePassword.length > 0 &&
                    "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 0 &&
                    "rounded-lg w-[56px] h-1 bg-success")
                }`}
                thirdLineError={`${
                  (!passwordErrors && "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 4 &&
                    "rounded-lg w-[56px] h-1 bg-red") ||
                  (passwordErrors &&
                    truePassword.length > 1 &&
                    truePassword.length < 4 &&
                    "rounded-lg w-[56px] h-1 bg-warning") ||
                  (passwordErrors &&
                    truePassword.length === 1 &&
                    "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 0 &&
                    "rounded-lg w-[56px] h-1 bg-success")
                }`}
                fourthLineError={`${
                  (!passwordErrors && "rounded-lg w-[56px] h-1 bg-gray-200") ||
                  (passwordErrors &&
                    truePassword.length === 4 &&
                    "rounded-lg w-[56px] h-1 bg-red") ||
                  (passwordErrors &&
                    truePassword.length > 0 &&
                    truePassword.length < 4 &&
                    "rounded-lg w-[56px] h-1 bg-warning") ||
                  (passwordErrors &&
                    truePassword.length === 0 &&
                    "rounded-lg w-[56px] h-1 bg-success")
                }`}
              />
              {checkPassword && (
                <ul className="relative list-inside list-disc mt-1">
                  {!letterRegex.test(checkPassword) ||
                  !numberRegex.test(checkPassword) ||
                  !symbolRegex.test(checkPassword) ||
                  checkPassword.length < 10 ? (
                    <p
                      className={`${
                        !letterRegex.test(checkPassword) &&
                        !numberRegex.test(checkPassword) &&
                        !symbolRegex.test(checkPassword) &&
                        checkPassword.length < 10
                          ? "relative text-red text-[9.5px] font-bold text-right me-1"
                          : "relative text-warning text-[9.5px] font-bold text-right me-1"
                      }`}
                    >
                      : پسورد باید شامل موارد زیر باشد
                    </p>
                  ) : null}

                  {checkPassword.length < 10 && (
                    <li
                      className={`${
                        !letterRegex.test(checkPassword) &&
                        !numberRegex.test(checkPassword) &&
                        !symbolRegex.test(checkPassword) &&
                        checkPassword.length < 10
                          ? "relative text-red text-[9.5px] font-bold text-right "
                          : "relative text-warning text-[9.5px] font-bold text-right"
                      }`}
                    >
                      <span className=" absolute right-4">
                        حداقل 10 کاراکتر
                      </span>
                    </li>
                  )}
                  {!letterRegex.test(checkPassword) && (
                    <li
                      className={`${
                        !letterRegex.test(checkPassword) &&
                        !numberRegex.test(checkPassword) &&
                        !symbolRegex.test(checkPassword) &&
                        checkPassword.length < 10
                          ? "relative text-red text-[9.5px] font-bold text-right "
                          : "relative text-warning text-[9.5px] font-bold text-right"
                      }`}
                    >
                      <span className=" absolute right-4">
                        حروف بزرگ و کوچک
                      </span>
                    </li>
                  )}
                  {!numberRegex.test(checkPassword) && (
                    <li
                      className={`${
                        !letterRegex.test(checkPassword) &&
                        !numberRegex.test(checkPassword) &&
                        !symbolRegex.test(checkPassword) &&
                        checkPassword.length < 10
                          ? "relative text-red text-[9.5px] font-bold text-right"
                          : "relative text-warning text-[9.5px] font-bold text-right"
                      }`}
                    >
                      <span className="absolute right-4">اعداد</span>
                    </li>
                  )}
                  {!symbolRegex.test(checkPassword) && (
                    <li
                      className={`${
                        !letterRegex.test(checkPassword) &&
                        !numberRegex.test(checkPassword) &&
                        !symbolRegex.test(checkPassword) &&
                        checkPassword.length < 10
                          ? "relative text-red text-[9.5px] font-bold text-right "
                          : "relative text-warning text-[9.5px] font-bold text-right "
                      }`}
                    >
                      <span className=" absolute right-4">نشانه ها</span>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
          <div className=" grid justify-center mt-20">
            <input
              type="submit"
              value="ارسال کد"
              className="bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
            />
          </div>
          <div className="flex justify-center text-gray-500 text-xs mt-2">
            <p>.</p>
            <p className="text-gray-500 text-xs">را پذیرفته اید</p>
            <a className="text-info cursor-pointer px-1"> قوانین </a>
            <p className="text-gray-500 text-xs mt">
              با کلیک بر روی دکمه ارسال کد شما
            </p>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Register;
