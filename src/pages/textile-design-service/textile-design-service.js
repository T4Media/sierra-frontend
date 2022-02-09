import Navbar from "../../components/navbar/navbar";
import "./textile-design-service.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import OurProcess from "./../../components/our-process/our-process";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import { FaSketch } from "react-icons/fa";
import { MdGraphicEq, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineSketch } from "react-icons/ai";
import { GiMedievalBarracks } from "react-icons/gi";
import { HiPresentationChartLine } from "react-icons/hi";
import processImage from "../../images/4.jpg";

const TextileDesignService = (props) => {
  const sourcingService = [
    {
      id: 1,
      serviceName: "Graphics Design Services",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <MdGraphicEq />,
    },
    {
      id: 2,
      serviceName: "Illustrations & Sketches",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <FaSketch />,
    },
    {
      id: 3,
      serviceName: "Product Visualization",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <MdOutlineProductionQuantityLimits />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "Idea Research", icon: <GiTeamIdea /> },
    { id: "02", name: "Sketching and Sampling", icon: <AiOutlineSketch /> },
    { id: "03", name: "Evaluation", icon: <GiMedievalBarracks /> },
    { id: "04", name: "Presentation", icon: <HiPresentationChartLine /> },
  ];

  const [classNamay, setClassNamay] = useState("textile-design-service");
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("textile-design-service blur");
  };

  const removeBlur = () => {
    setClassNamay("textile-design-service");
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

      <h1 className="service-name">Textile And Design Services</h1>

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

export default TextileDesignService;
