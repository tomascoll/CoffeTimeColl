import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <div className="flex justify-around p-3 max-w-[1150px]  m-auto">
        <Link to="/" className="h-min">
          <b>CoffeTime</b>
        </Link>
        <ul className="flex gap-10 flex-col sm:flex-row">
          <div id="menu" className="flex-col sm:flex-row gap-1 flex mt-10 sm:gap-10 sm:mt-0">
            <Link to="/category/reserve">
              <li className=" text-center font-semibold bg-slate-100 rounded-md p-6 sm:p-1">Reserve</li>
            </Link>
            <Link to="/category/blonde-roast">
              <li className=" text-center font-semibold bg-slate-100 rounded-md p-6 sm:p-1">Blonde Roast</li>
            </Link>
            <Link to="/category/medium-roast">
              <li className=" text-center font-semibold bg-slate-100 rounded-md p-6 sm:p-1">Medium Roast</li>
            </Link>
            <Link to="/category/dark-roast">
              <li className=" text-center font-semibold bg-slate-100 rounded-md p-6 sm:p-1">Dark Roast</li>
            </Link>
          </div>
        </ul>
        <Link to="/cart" className="h-min w-[78px] flex justify-center">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
