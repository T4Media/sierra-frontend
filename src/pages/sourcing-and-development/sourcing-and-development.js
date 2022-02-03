import Navbar from "../../components/navbar/navbar";
import "./sourcing-and-development.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import OurProcess from "./../../components/our-process/our-process";
import {
  FcPlanner,
  FcAdvertising,
  FcCustomerSupport,
  FcCheckmark,
} from "react-icons/fc";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";

import {
  MdOutlinePrecisionManufacturing,
  MdOutlineDesignServices,
} from "react-icons/md";
import { GiSharpShuriken } from "react-icons/gi";

const SourcingAndDevelopment = (props) => {
  const sourcingService = [
    {
      id: 1,
      serviceName: "Fabric sourcing",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <MdOutlinePrecisionManufacturing />,
    },
    {
      id: 2,
      serviceName: "Design",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 3,
      serviceName: "Celerity",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <GiSharpShuriken />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "PLANNING", icon: <FcPlanner /> },
    { id: "02", name: "SOURCING", icon: <FcAdvertising /> },
    { id: "03", name: "DESIGNING AND TESTING", icon: <FcCustomerSupport /> },
    { id: "04", name: "LAUNCH", icon: <FcCheckmark /> },
  ];

  const [classNamay, setClassNamay] = useState("sourcing-and-development");
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("sourcing-and-development blur");
  };

  const removeBlur = () => {
    setClassNamay("sourcing-and-development");
  };

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  });

  return spinner ? (
    <SierraLoader />
  ) : (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <h1 className="service-name">Sourcing and Product Development</h1>
      <Services sourcingService={sourcingService} />
      <OurProcess sourcingProcess={sourcingProcess} />
      <div className="container">
        <InfoPanelImageSection />
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default SourcingAndDevelopment;
