const LineErrors = (props) => {
  const {
    errors,
    firstLineError,
    secondLineError,
    thirdLineError,
    fourthLineError,
  } = props;

  return (
    <div className="flex gap-1 mx-auto ms-[19px] mt-2">
      <div className={firstLineError}></div>
      <div className={secondLineError}></div>
      <div className={thirdLineError}></div>
      <div className={fourthLineError}></div>
    </div>
  );
};

export default LineErrors;
