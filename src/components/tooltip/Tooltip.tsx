const Tooltip = () => {
  return (
    <div className="">
      <div className="mt-3">
        <p className="text-white text-xs text-right font-semibold me-3">
          : پسورد باید شامل موارد زیر باشد
        </p>
        <ul className="text-right me-5 mt-1">
          <li className="text-white text-xs font-semibold">حروف بزرگ و کوچک</li>
          <li className="text-white text-xs font-semibold">اعداد</li>
          <li className="text-white text-xs font-semibold">نشانه ها</li>
          <li className="text-white text-xs font-semibold">حداقل 10 کاراکتر</li>
        </ul>
      </div>
    </div>
  );
};
export default Tooltip;
