import "./about.scss";
import ownerImg from "../../assets/ownerImg.jpg";
import aboutBackground from "../../assets/background.svg";
import navIcn from "../../assets/navicon.svg";
import { Link } from "react-router-dom";

function About() {
  //ett annat sätt för bakgrund
  const style = {
    backgroundImage: `url(${aboutBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div className="about" style={style}>
      <Link className="navIcn" to="/nav">
        <img src={navIcn} alt="Navigation Icon" />
      </Link>
      <h1 className="aboutHeader">Vårt kaffe</h1>
      <h2 className="aboutText">
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </h2>
      <p className="aboutSmallText">
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p className="aboutSmallText">
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>

      <footer>
        <img className="ownerImg" src={ownerImg} alt="" />
        <h2 className="ownerName">Eva Cortado</h2>
        <h4 className="ownerTitle">VD & Grundare</h4>
      </footer>
    </div>
  );
}

export default About;
