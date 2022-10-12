import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Nav">
      <Link to="/">
        <b className="Logo">CoffeTime</b>
      </Link>
      <ul className="Ul">
        <Link to="/category/reserve">
          <li className="Li">Reserve</li>
        </Link>
        <Link to="/category/blonde-roast">
          <li className="Li">Blonde Roast</li>
        </Link>
        <Link to="/category/medium-roast">
          <li className="Li">Medium Roast</li>
        </Link>
        <Link to="/category/dark-roast">
          <li className="Li">Dark Roast</li>
        </Link>
      </ul>
      <Link to='/cart'>
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
