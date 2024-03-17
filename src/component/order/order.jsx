import { useStore } from "/src/store/store.jsx";
import "./order.scss";
import droneIcon from "../../assets/drone.svg";
import { useNavigate } from "react-router-dom";

function Order() {
  //hämtar order nr och ETA för inlagd order
  const { orderNr, eta } = useStore((state) => ({
    orderNr: state.orderNr,
    eta: state.eta,
  }));
  //tömmer carten med denna funktion
  const clearCart = useStore((state) => state.clearCart);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    clearCart(); // Tömmer kundvagnen
    navigate("/"); // Navigerar användaren hem
  };

  return (
    <div className="order">
      <h3 className="orderNr">Ordernummer #{orderNr}</h3>
      <img src={droneIcon} alt="" />
      <h2 className="orderStatus">Din beställning är på väg!</h2>
      <p className="timeHolder">{eta} minuter</p>
      <button className="okBtn" onClick={handleButtonClick}>
        OK, cool!
      </button>
    </div>
  );
}
export default Order;
