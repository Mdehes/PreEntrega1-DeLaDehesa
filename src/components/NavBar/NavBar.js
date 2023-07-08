import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.jpg";

const NavBar = () => {
return (
    <nav>
    <img src={logo} alt="logo" />
    <div>
        <button>Weapons</button>
        <button>Armor</button>
        <button>Items</button>
    </div>
    <CartWidget />
    </nav>
);
};
export default NavBar;