import { useRef } from "react";
import Timer from "../timer/Timer";

const FourNumberInput = (props) => {
  const { value } = props;

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleKeyUp = (index, event) => {
    if (event.target.value.length === event.target.maxLength) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const firstInput = e.target[0].value;
    const secondInput = e.target[1].value;
    const thirdInput = e.target[2].value;
    const fourthInput = e.target[3].value;
    const arrayCode = [firstInput, secondInput, thirdInput, fourthInput];
    const code = arrayCode.join("");
    console.log(code);
    props.clickProp();
  };

  return (
    <>
      <form className="" onSubmit={SubmitHandler}>
        <div className="flex gap-2 justify-center">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              maxLength="1"
              ref={ref}
              onKeyUp={(event) => handleKeyUp(index, event)}
              className=" border-b-8 w-16 outline-0 text-2xl font-semibold text-center focus:border-b-primary"
            />
          ))}
        </div>
        <div className="grid justify-items-center ms-60">
          <Timer />
        </div>
        <div className=" grid justify-center mt-14">
          <input
            type="submit"
            value={value}
            className="bg-primary px-20 pb-4 pt-3 text-white text-xl text-center rounded-[4px] cursor-pointer font-semibold"
          />
        </div>
      </form>
    </>
  );
};

export default FourNumberInput;
