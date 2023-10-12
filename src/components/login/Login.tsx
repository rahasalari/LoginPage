import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineVisibility } from "react-icons/md";
import ForgetPasswordModal from "../modal/ForgetPasswordModal";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };

  const unVisibleHandler = () => {
    setVisible(false);
  };

  const blurPasswordHandler = (password) => {
    trigger(password);
  };

  const blurEmailHandler = (email) => {
    trigger(email);
  };

  return (
    <div className="reative">
      <div className="absolute flex justify-center w-full mt-28 -left-[110px]">
        <ForgetPasswordModal />
      </div>
      <div className="pt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-36">
            <div>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
                >
                  رمز
                </label>
                <input
                  id="passsword"
                  type={visible ? "text" : "password"}
                  className={`${
                    errors.password
                      ? "right-3 border-2 border-red h-13 w-60 mx-auto rounded ps-10 pb-1 px-1 outline-red"
                      : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 ps-10 pb-1 rounded px-1 outline-primary"
                  }`}
                  {...register("password", {
                    required: true,
                  })}
                  onBlur={() => blurPasswordHandler("password")}
                />
                <br></br>
                <ul className="relative left-3 list-inside list-disc">
                  {errors.password && errors.password.type === "required" && (
                    <li className="relative text-red text-xs text-right mt-1">
                      <span className=" absolute right-6">
                        .وارد کردن پسورد اجباریست
                      </span>
                    </li>
                  )}
                </ul>
                <MdOutlineVisibility
                  onMouseDown={visibleHandler}
                  onMouseUp={unVisibleHandler}
                  onMouseLeave={unVisibleHandler}
                  className="absolute left-4 top-4 text-xl text-gray-700 cursor-pointer"
                />
              </div>
              {/* <div className="flex justify-end mt-2">
                <ForgetPasswordModal />
              </div> */}
            </div>
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute left-44 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                ایمیل
              </label>
              <input
                id="email"
                className={`${
                  errors.email
                    ? "right-3 border-2 border-red h-13 w-60 mx-auto rounded px-1 outline-red"
                    : "right-3 border h-13 w-60 mx-auto placeholder-gray-400 rounded px-1 outline-primary"
                }`}
                {...register("email", {
                  required: true,
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
          <div className="flex justify-center mt-14">
            <input
              type="submit"
              value="ورود"
              className=" bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-[4px] cursor-pointer font-semibold"
            />
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
