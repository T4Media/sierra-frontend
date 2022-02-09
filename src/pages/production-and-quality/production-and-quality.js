import Navbar from "../../components/navbar/navbar";
import "./production-and-quality.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import OurProcess from "./../../components/our-process/our-process";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaBroom, FaConnectdevelop } from "react-icons/fa";
import { RiZoomInFill } from "react-icons/ri";
import { RiDatabaseLine } from "react-icons/ri";
import { SiProducthunt, SiMarketo } from "react-icons/si";
import processImage from "../../images/4.jpg";

const ProductionAndQuality = (props) => {
  const sourcingService = [
    {
      id: 1,
      serviceName: "Production and Planning",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <BsCalendarCheckFill />,
    },
    {
      id: 2,
      serviceName: "All necessary tests on fabric & garments",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <FaBroom />,
    },
    {
      id: 3,
      serviceName: "AQL inspection",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <RiZoomInFill />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "Development", icon: <FaConnectdevelop /> },
    { id: "02", name: "Baseline System", icon: <RiDatabaseLine /> },
    { id: "03", name: "Production", icon: <SiProducthunt /> },
    { id: "04", name: "Release to Market", icon: <SiMarketo /> },
  ];

  const [classNamay, setClassNamay] = useState("production-and-quality");
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("production-and-quality blur");
  };

  const removeBlur = () => {
    setClassNamay("production-and-quality");
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

      <h1 className="service-name">Production and Quality Control</h1>

      <Services sourcingService={sourcingService} />

      <div className="process-img">
        <h1 className="our-process">Our Process</h1>

        <div className="img-and-text">
          <img src={processImage} alt="" />

          {sourcingProcess.map((sp, i) => (
            <div className={`process-${i + 1}`}>
              <h1>{sp.name}</h1>
              <p>
                Yarns, Fabrics, Garments and other Home textiles products are
                manufactured and exported to 49 different
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <InfoPanelImageSection />
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default ProductionAndQuality;
