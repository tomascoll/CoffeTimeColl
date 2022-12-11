import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  function open() {
    const menu = document.querySelector("#menu");
    if (menu?.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <>
      <div className="flex justify-between p-3 max-w-[900px] flex-wrap m-auto">
        <Link to="/" className="h-min my-auto">
          <b>CoffeTime</b>
        </Link>
        <div>
          <button
            onClick={open}
            className="sm:hidden bg-zinc-300 rounded-lg w-10 h-10 text-3xl flex justify-center"
          >
            x
          </button>
        </div>
        <ul
          className="gap-10 hidden sm:flex w-full sm:w-auto text-center"
          id="menu"
        >
          <div
            id="menu"
            className="flex-col sm:flex-row gap-1 flex mt-10 sm:gap-10 sm:mt-0"
          >
            <Link to="/category/reserve">
              <li className=" text-center font-semibold hover:bg-slate-100 rounded-md p-6 sm:p-1">
                Reserve
              </li>
            </Link>
            <Link to="/category/blonde-roast">
              <li className=" text-center font-semibold hover:bg-slate-100 rounded-md p-6 sm:p-1">
                Blonde Roast
              </li>
            </Link>
            <Link to="/category/medium-roast">
              <li className=" text-center font-semibold hover:bg-slate-100 rounded-md p-6 sm:p-1">
                Medium Roast
              </li>
            </Link>
            <Link to="/category/dark-roast">
              <li className=" text-center font-semibold hover:bg-slate-100 rounded-md p-6 sm:p-1">
                Dark Roast
              </li>
            </Link>
          </div>
          <Link to="/cart" className="h-min  flex justify-center">
            <CartWidget />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
