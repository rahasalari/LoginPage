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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [visible, setVisible] = useState(false);
  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };

  return (
    <>
      <div className="pt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-36">
            <div>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute left-40 -top-3 text-sm font-semibold bg-white w-12 text-center"
                >
                  رمز
                </label>
                <input
                  id="passsword"
                  type={visible ? "text" : "password"}
                  className={`${
                    errors.password
                      ? "right-3 border-2 border-red h-12 w-54 mx-auto rounded text-right px-1 outline-red"
                      : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 rounded text-right px-1 outline-primary"
                  }`}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
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
                  className="absolute left-4 top-3.5 text-xl text-gray-700 cursor-pointer"
                />
              </div>
              <div className="flex justify-end mt-2">
                <ForgetPasswordModal />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute left-40 -top-3 text-sm font-semibold bg-white w-12 text-center"
              >
                ایمیل
              </label>
              <input
                id="email"
                className={`${
                  errors.email
                    ? "right-3 border-2 border-red h-12 w-54 mx-auto rounded text-right px-1 outline-red"
                    : "right-3 border h-12 w-54 mx-auto placeholder-gray-400 rounded text-right px-1 outline-primary"
                }`}
                {...register("email", {
                  required: true,
                })}
              />
              <br></br>
              {errors.email && errors.email.type === "required" && (
                <li className="text-red text-xs text-right me-1">
                  وارد کردن ایمیل اجباریست
                </li>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <input
              type="submit"
              value="ورود"
              className=" bg-primary px-16 pb-3 pt-1 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
            />
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
