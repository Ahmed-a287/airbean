import "./home.scss";
import backgroundImage from "../assets/landing.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
