const Tooltip = () => {
  return (
    <div className="">
      <div className="py-2">
        <p className="text-white text-[9.5px] text-right font-semibold me-3">
          : پسورد باید شامل موارد زیر باشد
        </p>
        <ul className="relative text-right me-5 mt-1">
          <li className="text-white text-[9.5px] font-semibold">
            <span>حروف بزرگ و کوچک</span>
          </li>
          <li className="text-white text-[9.5px] font-semibold">اعداد</li>
          <li className="text-white text-[9.5px] font-semibold">نشانه ها</li>
          <li className="text-white text-[9.5px] font-semibold">
            حداقل 10 کاراکتر
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Tooltip;
