import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

type Inputs = {
  email: string;
  password: string;
};

const StepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const emailValue = data.email;
    localStorage.setItem("emailValue", JSON.stringify(emailValue));
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const closeHandler = () => {
    setShowModal(false);
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
            <div className="fixed inset-0 flex-row justify-center mx-auto my-auto w-144 h-128 bg-white border rounded-2xl">
              <div>
                <IoCloseOutline
                  className="bg-gray-200 rounded-md text-2xl ms-7 mt-4 w-7 h-6 cursor-pointer"
                  onClick={closeHandler}
                />
              </div>
              <p className="flex justify-center font-bold text-gray-700 text-sm mt-16">
                رمز عبور خود را فراموش کرده اید؟
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative text-center mt-16"
              >
                <label
                  htmlFor="email"
                  className="absolute right-48 -top-3 text-sm font-semibold bg-white w-12 "
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  className={`${
                    errors.email
                      ? " right-3 border-2 border-red h-12 w-54 mx-auto rounded ps-2 outline-red"
                      : " right-3 border h-12 w-54 mx-auto placeholder-gray-400 rounded ps-2 outline-primary"
                  }`}
                  {...register("email", {
                    required: true,
                  })}
                />
                <a className="absolute mt-14 right-44 text-info text-12 font-bold cursor-pointer">
                  بازگشت به صفحه ورود
                </a>
                <div className="flex justify-center mt-28">
                  <input
                    type="submit"
                    value="ادامه"
                    className=" bg-primary px-20 pb-3 pt-2 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
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
};
export default StepOne;
