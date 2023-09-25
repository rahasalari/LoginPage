import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ForgetPasswordModal = () => {
  const [step, setStep] = useState(0);

  function stepHandler(e) {
    setStep((prevState) => prevState + 1);
  }

  return (
    <>
      {step === 0 && <StepOne onCliclProp={stepHandler} />}
      {step === 1 && <StepTwo onCliclProp={stepHandler} />}
      {step === 2 && <StepThree />}
    </>
  );
};

export default ForgetPasswordModal;
