import Navbar from "./../../components/navbar/navbar";
import "./careers.scss";
import { useState, useEffect } from "react";
import CareerBanner from "../../components/careerBanner/careerBanner";
import Eff_Benefits from "../../components/eff_benfits/eff_benefits";
import JobOpening from "../../components/jobOpening/jobOpening";
import Footer from "./../../components/footer/footer";
import HorseLoader from "../../components/Loader/horseLoader";
import SierraLoader from "./../../components/Loader/sierraLoader";
import axios from "axios";

const Careers = (props) => {
  const [classNamay, setClassNamay] = useState("careers");
  const [spinner, setSpinner] = useState(false);
  const [careersData, setCareersData] = useState();

  const makeBlur = () => {
    setClassNamay("careers blur");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "careers/")
      .then((response) => {
        setCareersData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeBlur = () => {
    setClassNamay("careers");
  };

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

      <CareerBanner paragraph={careersData && careersData.firstPara} />
      <Eff_Benefits benefits={careersData && careersData.benefits} />
      <hr />
      <JobOpening jobs={careersData && careersData.jobs} />
      <Footer />
    </div>
  );
};

export default Careers;
