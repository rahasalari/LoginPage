// const LineErrors = ({ errors }) => {
//   return (
//     <div className="flex gap-1 mx-auto ms-5 mt-2">
//       <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
//       <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
//       <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
//       <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
//     </div>
//   );
// };

// export default LineErrors;

//test
// const LineErrors = (props) => {
//   const { errors, className } = props;

//   return (
//     <div className="flex gap-1 mx-auto ms-5 mt-2">
//       {/* {for(let i = 0; i < 5 ; i++) {
//         console.log(i)

//       }} */}
//       <div className={className}></div>
//       <div className={className}></div>
//       <div className={className}></div>
//       <div className={className}></div>
//     </div>
//   );
// };

// export default LineErrors;

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
