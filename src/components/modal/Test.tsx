import { useForm } from "react-hook-form";
import { useState } from "react";

const Test = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <a
        className="relative text-info font-bold text-sm me-1 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        فراموشی رمز
      </a>
      {showModal && (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      )}
    </>
  );
};
export default Test;
