import navIcon from "../../assets/navicon.svg";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";
import "./header.scss";
import useStore from "../../store/store";

const Header = () => {
  const { cart } = useStore();
  //för att räkna antal produkter som finns i cart
  const totalQuantity = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return (
    <div className="headerContainer">
      <Link className="navIcon" to="/nav">
        <img src={navIcon} alt="Navigation Icon" />
      </Link>

      <Link className="cartIcon" to="/cart">
        <img className="cartLogo" src={cartIcon} alt="Cart Icon" />
        <p className="quantityHolder">{totalQuantity}</p>
      </Link>
    </div>
  );
};

export default Header;
