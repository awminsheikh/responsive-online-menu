import logo from "../assets/img/logo.png"
const Header = () => {
  return (
    <div className="w-5/6 h-5/6 bg-green-900 flex-center rounded-xl">
      <div className="w-5/6 h-full text-white flex-center">
        <div>
            <span className="w-2/3 font-extralight"> we wish you enjoy your food and your time</span>
        </div>
        <div className="w-1/3 h-full rounded-full">
            <img src={logo} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
