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
const LineErrors = ({ errors }, { className }) => {
  return (
    <div className="flex gap-1 mx-auto ms-5 mt-2">
      <div className={className}></div>
      <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
      <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
      <div className="rounded-lg w-[52px] h-1 bg-gray-200"></div>
    </div>
  );
};

export default LineErrors;
