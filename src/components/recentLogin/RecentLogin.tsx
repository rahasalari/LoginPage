import { CgMoreVertical } from "react-icons/cg";
import profile from "../../assets/profile.jpg";

const Verification = ({ name, career }) => {
  return (
    <div className="mt-13">
      <div className="relative box-border bg-white lg:h-52 lg:w-48 md:h-48 md:w-40 p-4 border-4 border-white rounded-3xl  ">
        <div className="flex">
          <span className=" text-2xl">
            <CgMoreVertical />
          </span>
          <img
            src={profile}
            className=" absolute rounded-full bg-slate-600 h-20 w-20 ms-8 mt-3 "
          ></img>
          <div className="mt-28 text-center font-bold text-sm">
            <p>{name}</p>
            <p>{career}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verification;
