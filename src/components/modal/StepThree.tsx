import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md";
import LineErrors from "../lineErrors/LineErrors";

type Inputs = {
  password: string;
  repeatPassword: string;
};

const StepThree = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //get code
  const onSubmit = (data) => {
    console.log(data);
  };

  //states
  const [showModal, setShowModal] = useState<boolean>(true);
  const [visible, setVisible] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const closeHandler = () => {
    setShowModal(false);
    reset();
    props.closeClick();
  };

  //show password
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

  const blurPasswordHandler = (password) => {
    trigger(password);
  };

  const blurRepeatPasswordHandler = (repeatPassword) => {
    trigger(repeatPassword);
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
      checkPassword.length < 9,
    ];
  }

  if (passwordErrors) {
    passwordErrors.forEach((item) => {
      if (item === true) {
        truePassword.push(item);
      }
    });
  }

  //submit data
  const submitHandler = (e) => {
    e.preventDefault();
    const password = watch("password");
    const repeatPassword = watch("repeatPassword");
    if (truePassword.length === 0) {
      if (password === repeatPassword) {
        console.log(password);
      }
    }
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
              <div>
                <IoIosClose
                  className="bg-gray-200 rounded-md text-2xl ms-8 mt-7 w-10 h-9 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-base mt-3">
                تعریف رمز ورود
              </p>
              <p className="flex justify-center font-bold text-gray-400 text-sm mt-3">
                حداقل ۱۰ کاراکتر باشد
              </p>
              <div
                onSubmit={handleSubmit(onSubmit)}
                className="grid justify-center mt-11"
              >
                <div className="me-4">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="absolute left-48 -top-3 text-sm font-semibold bg-white w-12 text-center"
                    >
                      رمز
                    </label>

                    <input
                      id="password"
                      type={visible ? "text" : "password"}
                      className={`${
                        errors.password
                          ? "right-3 border-2  h-13 w-60 mx-auto ms-4 rounded text-right px-1 outline-primary"
                          : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                      }`}
                      {...register("password", {
                        required: true,
                        minLength: 10,
                      })}
                      onBlur={() => blurPasswordHandler("password")}
                    />
                    <br></br>
                    <LineErrors
                      errors={errors}
                      firstLineError={`${
                        (!passwordErrors &&
                          "rounded-lg w-[56px] h-1 bg-gray-200") ||
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
                        (!passwordErrors &&
                          "rounded-lg w-[56px] h-1 bg-gray-200") ||
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
                        (!passwordErrors &&
                          "rounded-lg w-[56px] h-1 bg-gray-200") ||
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
                        (!passwordErrors &&
                          "rounded-lg w-[56px] h-1 bg-gray-200") ||
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
                                ? "relative text-red text-[9.5px] font-bold text-right me-1"
                                : "relative text-warning text-[9.5px] font-bold text-right me-1"
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
                                ? "relative text-red text-[9.5px] font-bold text-right me-1"
                                : "relative text-warning text-[9.5px] font-bold text-right me-1"
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
                                ? "relative text-red text-[9.5px] font-bold text-right me-1"
                                : "relative text-warning text-[9.5px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-4">اعداد</span>
                          </li>
                        )}
                        {!symbolRegex.test(checkPassword) && (
                          <li
                            className={`${
                              !letterRegex.test(checkPassword) &&
                              !numberRegex.test(checkPassword) &&
                              !symbolRegex.test(checkPassword) &&
                              checkPassword.length < 10
                                ? "relative text-red text-[9.5px] font-bold text-right me-1"
                                : "relative text-warning text-[9.5px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-4">نشانه ها</span>
                          </li>
                        )}
                      </ul>
                    )}

                    <MdOutlineVisibility
                      onMouseDown={visibleHandler}
                      onMouseUp={unVisibleHandler}
                      onMouseLeave={unVisibleHandler}
                      className="absolute left-7 top-4 text-xl text-gray-700 cursor-pointer"
                    />
                  </div>
                  <div className="relative mt-8">
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
                          ? "right-3 border-2 border-red h-13 w-60 mx-auto ms-4 rounded text-right px-1 outline-red"
                          : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                      }`}
                      {...register("repeatPassword", {
                        required: true,
                      })}
                      onBlur={() => blurRepeatPasswordHandler("repeatPassword")}
                    />
                    <br></br>
                    <ul className="relative list-inside list-disc mt-1">
                      {errors.repeatPassword &&
                        errors.repeatPassword.type === "required" && (
                          <li className="relative text-red text-xs text-right me-1">
                            <span className=" absolute right-6">
                              وارد کردن پسورد اجباریست
                            </span>
                          </li>
                        )}
                    </ul>
                    <MdOutlineVisibility
                      onMouseDown={togglePasswordVisiblity}
                      onMouseUp={togglePasswordUnvisiblity}
                      onMouseLeave={togglePasswordUnvisiblity}
                      className="absolute left-7 top-4 text-xl text-gray-700 cursor-pointer"
                    />
                  </div>
                </div>
                <div className=" grid justify-center mt-12">
                  <input
                    type="submit"
                    value=" تغییر رمز"
                    className="bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
                    onClick={submitHandler}
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
export default StepThree;
