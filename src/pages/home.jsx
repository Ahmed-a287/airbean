import "./home.scss";
import backgroundImage from "../assets/landing.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    //hela "Home" sidan reagerar som en knapp
    <div className="home">
      {
        <Link to="/menu" title="Meny">
          <img
            className="background"
            src={backgroundImage}
            alt="Backgorund Image"
          />
        </Link>
      }
    </div>
  );
};

export default Home;
