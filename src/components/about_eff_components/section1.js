import logo from "../../images/logo/eff_black.png";
import "./style.scss";

const Section1 = (props) => {
  return (
    <>
      <div className="row section-1">
        <div className="col-lg-6 col-xl-6">
          <h1 className="mb-5">About Exclusive Fabrics</h1>

          <p className="para-without-image">{props.para1}</p>

          <div className="para-with-image mt-4">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 bg-1"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Section1;
