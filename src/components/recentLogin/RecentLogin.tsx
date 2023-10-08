import { FiMoreVertical } from "react-icons/fi";
import profile from "../../assets/profile.jpg";

const Verification = ({ name, career }) => {
  return (
    <div className="mt-9">
      <div className="relative box-border bg-white h-[180px] w-44 p-4 border-4 border-white rounded-3xl">
        <div className="flex">
          <span className=" text-2xl">
            <FiMoreVertical />
          </span>
          <img
            src={profile}
            className="absolute rounded-full ms-9 bg-slate-600 h-16 w-16 mt-3 border-2 "
          ></img>
          <div className="mt-24 text-center font-bold text-sm">
            <p>{name}</p>
            <p>{career}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verification;
