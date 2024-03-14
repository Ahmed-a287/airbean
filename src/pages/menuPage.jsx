import Menu from "../component/menu/menu";
import Header from "../component/header/header";
import "./menuPage.scss";
import menuBackground from "../assets/background.svg";

const menuPage = () => {
  const style = {
    backgroundImage: `url(${menuBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div className="menu" style={style}>
      <Header />
      <Menu />
    </div>
  );
};

export default menuPage;
