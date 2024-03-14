import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import arrowUp from "../../assets/arrowUp.svg";
import arrowDown from "../../assets/arrowDown.svg";
import "./cart.scss";
import xIcon from "../../assets/close.svg";
function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, sendOrder } = useStore();
  let total = cart.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="cart">
      {/* En go back button */}
      <button onClick={goBack} style={{ border: "none", background: "none" }}>
        <img className="xIcon" src={xIcon} alt="X icon" />
      </button>

      <h1 className="cartTitle">Din beställning</h1>
      {cart.map((item, index) => (
        <h3 className="coffeeName" key={index}>
          {item.item.title}
          <div className="quantityHolders">
            <button
              className="quantityBtn"
              onClick={() => increaseQuantity(item.item.title)}
            >
              <img src={arrowUp} alt="Increase quantity" />
            </button>
            <p className="quantityNr">{item.quantity}</p>
            <button
              className="quantityBtn"
              onClick={() => decreaseQuantity(item.item.title)}
            >
              <img src={arrowDown} alt="Decrease quantity" />
            </button>
          </div>
          <br />
          <p className="itemPrice">{item.item.price} kr</p>
        </h3>
      ))}
      <section className="totalLine">
        <h2>Total</h2>
        <h2>{total} kr</h2>
      </section>
      <p className="priceInfo">inkl moms + drönarleverans</p>

      <br />
      {/* För att skicka ordern först och sen ta använderen vidare till orderstatus*/}
      <button
        className="takeBtn"
        onClick={() => {
          if (cart.length > 0) {
            sendOrder(cart);
            navigate("/order");
          } else {
            //Ifall varukorgen är tom
            alert("Din varukorg är tom!");
          }
        }}
      >
        Take my money!
      </button>
    </div>
  );
}

export default Cart;
