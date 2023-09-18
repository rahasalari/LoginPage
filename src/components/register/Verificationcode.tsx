import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Timer from "../timer/Timer";

type Inputs = {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
};

const Verificationcode = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //get code
  const onSubmit = (data) => {
    const separateCode = Object.values(data);
    const code = separateCode.join("");
    console.log(code);
  };

  const email = localStorage.getItem("emailValue");
  const emailValue = email?.replace(/"|'/g, "");

  return (
    <>
      <div className="">
        <div className="flex float-right me-7">
          <Link
            className="text-primary text-xs pt-2 me-1 cursor-pointer"
            to="/register"
          >
            ویرایش ایمیل
          </Link>
          <p className="me-1 font-semibold semibold text-lg">: {emailValue}</p>
          <p className="font-semibold text-lg">ارسال کد به ایمیل</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 justify-center mt-24">
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
              value="ثبت نام"
              className="bg-primary px-15 pb-3 pt-2 text-white text-xl text-center rounded-sm cursor-pointer font-semibold"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Verificationcode;
