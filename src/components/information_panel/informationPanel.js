import ShowBrandsButton from "../../components/showBrandsButton/showBrandsButton";
import logo from "../../images/logo_updated/sierra.png";

import "./informationPanel.scss";
import InfoPanelImageSection from "./../info-panel-image-section/info-panel-image-section";

const InformationPanel = () => {
  return (
    <div className="container information-panel">
      <center>
        <img className="logo-black" src={logo} alt="eff" />
      </center>

      <p>
        Generations of experience and distinctive British design are the
        foundation of the Romo brand. Renowned for our assorted library of
        contemporary and classic designs and versatile plains, our talented
        design team create elegantly crafted fabric and wallcovering collections
        that are diverse in style and enriched with a sophisticated colour
        palette. Romo is the founding brand of The Romo Group, comprising six
        established interior brands each with their own unique character and
        style.
      </p>

      <InfoPanelImageSection />
    </div>
  );
};

export default InformationPanel;
