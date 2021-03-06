import Navbar from "./../../components/navbar/navbar";
import "./careers.scss";
import { useState, useEffect } from "react";
import CareerBanner from "../../components/careerBanner/careerBanner";
import Eff_Benefits from "../../components/eff_benfits/eff_benefits";
import JobOpening from "../../components/jobOpening/jobOpening";
import Footer from "./../../components/footer/footer";
import HorseLoader from "../../components/Loader/horseLoader";
import SierraLoader from "./../../components/Loader/sierraLoader";

const Careers = (props) => {
  const [classNamay, setClassNamay] = useState("careers");
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("careers blur");
  };

  const removeBlur = () => {
    setClassNamay("careers");
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

      <CareerBanner />
      <Eff_Benefits />
      <hr />
      <JobOpening />
      <Footer />
    </div>
  );
};

export default Careers;
