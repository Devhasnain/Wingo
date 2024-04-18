import {
  ArrowLeftCircleIcon,
  FaceSmileIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="fixed sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-[31rem] z-100" style={{zIndex:100}}>
      <div className="bg-[#ff9901] grid grid-cols-12 px-5 items-center">
        <div className="col-span-2">
          <ArrowLeftCircleIcon color="white" height={40} width={40} />
        </div>
        <div className="col-span-8 flex flex-row items-center justify-center">
          <img alt="" src={Logo} className="w-[130px]" />
        </div>
        <div className="col-span-2 flex flex-row items-center justify-end gap-4">
          <FaceSmileIcon color="white" height={60} width={60} />
          <InformationCircleIcon color="white" height={60} width={60} />
        </div>
      </div>
    </div>
  );
};

export default Header;
