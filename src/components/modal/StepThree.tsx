import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { MdOutlineVisibility } from "react-icons/md";
import LineErrors from "../lineErrors/LineErrors";

type Inputs = {
  password: string;
  repeatPassword: string;
};

const StepThree = () => {
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
  };

  //show password
  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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
            <div className="fixed inset-0 flex-row justify-center mx-auto my-auto w-144 h-[530px] bg-white border rounded-2xl">
              <div>
                <IoCloseOutline
                  className="bg-gray-200 rounded-md text-2xl ms-7 mt-6 w-7 h-6 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-base mt-6">
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
                      className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
                    >
                      رمز
                    </label>

                    <input
                      id="password"
                      type={visible ? "text" : "password"}
                      className={`${
                        errors.password
                          ? "right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded text-right px-1 outline-red"
                          : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
                      }`}
                      {...register("password", {
                        required: true,
                        minLength: 10,
                      })}
                      onBlur={() => blurPasswordHandler("password")}
                    />
                    <br></br>
                    <LineErrors errors={errors} />
                    {checkPassword && (
                      <ol className="relative list-inside list-decimal mt-1">
                        <p
                          className={`${
                            !letterRegex.test(checkPassword) &&
                            !numberRegex.test(checkPassword) &&
                            !symbolRegex.test(checkPassword) &&
                            checkPassword.length < 9
                              ? "relative text-red text-[9px] font-bold text-right me-1"
                              : "relative text-warning text-[9px] font-bold text-right me-1"
                          }`}
                        >
                          : پسورد باید شامل موارد زیر باشد
                        </p>
                        {checkPassword.length < 9 && (
                          <li
                            className={`${
                              !letterRegex.test(checkPassword) &&
                              !numberRegex.test(checkPassword) &&
                              !symbolRegex.test(checkPassword) &&
                              checkPassword.length < 9
                                ? "relative text-red text-[9px] font-bold text-right me-1"
                                : "relative text-warning text-[9px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-3">
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
                              checkPassword.length < 9
                                ? "relative text-red text-[9px] font-bold text-right me-1"
                                : "relative text-warning text-[9px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-3">
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
                              checkPassword.length < 9
                                ? "relative text-red text-[9px] font-bold text-right me-1"
                                : "relative text-warning text-[9px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-3">اعداد</span>
                          </li>
                        )}
                        {!symbolRegex.test(checkPassword) && (
                          <li
                            className={`${
                              !letterRegex.test(checkPassword) &&
                              !numberRegex.test(checkPassword) &&
                              !symbolRegex.test(checkPassword) &&
                              checkPassword.length < 9
                                ? "relative text-red text-[9px] font-bold text-right me-1"
                                : "relative text-warning text-[9px] font-bold text-right me-1"
                            }`}
                          >
                            <span className=" absolute right-3">نشانه ها</span>
                          </li>
                        )}
                      </ol>
                    )}

                    <MdOutlineVisibility
                      onMouseDown={visibleHandler}
                      onMouseUp={visibleHandler}
                      className="absolute left-7 top-3.5 text-xl text-gray-700 cursor-pointer"
                    />
                  </div>
                  <div className="relative mt-8">
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
                        errors.repeatPassword
                          ? "right-3 border-2 border-red h-12 w-54 mx-auto ms-4 rounded text-right px-1 outline-red"
                          : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 ms-4 rounded text-right px-1 outline-primary"
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
                      onMouseUp={togglePasswordVisiblity}
                      className="absolute left-7 top-3.5 text-xl text-gray-700 cursor-pointer"
                    />
                  </div>
                </div>
                <div className=" grid justify-center mt-12">
                  <input
                    type="submit"
                    value=" تغییر رمز"
                    className="bg-primary px-13 pb-3 pt-2 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
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
