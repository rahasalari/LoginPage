import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ForgetPasswordModal = () => {
  const [step, setStep] = useState(0);

  function stepHandler(e) {
    setStep((prevState) => prevState + 1);
  }

  function closeHandler(e) {
    setStep(0);
    console.log(step);
  }

  return (
    <>
      {step === 0 && (
        <StepOne onCliclProp={stepHandler} closeClick={closeHandler} />
      )}
      {step === 1 && (
        <StepTwo onCliclProp={stepHandler} closeClick={closeHandler} />
      )}
      {step === 2 && <StepThree closeClick={closeHandler} />}
    </>
  );
};

export default ForgetPasswordModal;
