import { useEffect, useState } from "react";
import useStore from "../../store/store";
import addIcon from "../../assets/add.svg";
import "./menu.scss";

const Menu = () => {
  const { addToCart } = useStore();
  //lista med alla kaffe
  const [coffee, setCoffee] = useState([]);
  //useEffect används här så att hemsidan renderas först medan data hämtas från API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );
        const data = await response.json();
        //uppdaterar coffee med ny data
        setCoffee(data);
      } catch (error) {
        console.error("Oops!", error);
      }
    };
    fetchData();
    // dependency array finns här så attusEffect körs en gång
  }, []);

  return (
    <div className="menu">
      <h2 className="menuHeader">Meny</h2>
      <ul>
        {coffee.menu
          ? coffee.menu.map((coffeeItem, index) => (
              <li key={index}>
                <div className="itemContainer">
                  <img
                    className="addIcon"
                    src={addIcon}
                    alt="add icon"
                    onClick={() => addToCart(coffeeItem)}
                    style={{ cursor: "pointer" }}
                  />

                  <h3 className="title">{coffeeItem.title}</h3>
                  <h3 className="price">{coffeeItem.price} kr</h3>
                  <p className="desc">{coffeeItem.desc}</p>
                </div>
              </li>
            ))
          : //visas medan api hämtas
            "Loading..."}
      </ul>
    </div>
  );
};

export default Menu;
