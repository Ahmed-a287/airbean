import "./nav.scss";
import closeIcon from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  //en react sätt för att navigera "specifikt"
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="nav">
      <button onClick={goBack} style={{ border: "none", background: "none" }}>
        <img className="closeIcon" src={closeIcon} alt="Close icon" />
      </button>

      <Link className="navHeader" to="/">
        Hem
      </Link>
      <figure> </figure>
      <Link className="navHeader" to="/menu">
        Meny
      </Link>
      <figure> .</figure>
      <Link className="navHeader" to="/about">
        Vårt kaffe
      </Link>
    </div>
  );
}

export default Nav;
