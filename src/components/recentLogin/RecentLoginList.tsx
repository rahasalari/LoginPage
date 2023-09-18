import Verification from "./RecentLogin";
const VerificationList = ({ name, career }) => {
  return (
    <div className=" me-10">
      <p className=" text-right text-lg font-bold mt-10 me-20">:ورودهای اخیر</p>
      <div className=" flex flex-wrap gap-12 float-right me-20 mb-14">
        <Verification name={"نازنین صادق"} career={"پروداکت دیزاینر"} />
        <Verification name={"نازنین صادق"} career={"پروداکت دیزاینر"} />
        <Verification name={"نازنین صادق"} career={"پروداکت دیزاینر"} />
      </div>
    </div>
  );
};
export default VerificationList;
