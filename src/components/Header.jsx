import Logo from "../assets/logo.png";
import Customer from "../assets/customer.png";
import Back from "../assets/back.png";
import Music from "../assets/music.png";

const Header = () => {
  return (
    <div
      className="fixed w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-[31rem] z-100"
      style={{ zIndex: 100 }}
    >
      <div className="bg-[#ff9901] grid grid-cols-12 px-5 items-center py-2">
        <div className="col-span-2">
          <img alt="" src={Back} className="h-[37px] w-[37px]" />
        </div>
        <div className="col-span-7 sm:col-span-8 flex flex-row items-center justify-center">
          <img alt="" src={Logo} className="w-[70px]" />
        </div>
        <div className="col-span-3 sm:col-span-2 flex flex-row items-center justify-end gap-4">
          <img alt="" src={Customer} className="h-[37px] w-[37px]" />
          <img alt="" src={Music} className="h-[37px] w-[37px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
