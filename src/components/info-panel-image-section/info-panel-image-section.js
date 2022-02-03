import "./info-panel-image-section.scss";
import fa from "../../images/brands/fa.jpg";
import fm from "../../images/brands/fm.jpg";
import fo from "../../images/brands/fo.jpg";
import hpd from "../../images/logo/hpd.png";
import { Link } from "react-router-dom";

const InfoPanelImageSection = () => {
  return (
    <div className="row info-panel-images">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-1">
        <div id="all">
          <div className="view view-first">
            <img src={hpd} alt="" />

            <div className="mask">
              <h2>Half Price Drapes</h2>
              <p>
                Embracing the growing trend for outdoor living, external spaces
                are being transformed into stylish havens. Combining
                contemporary style with practicality and durability.
              </p>
              <Link to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-2">
        <img src={fa} alt="fa" />
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-3">
        <img src={fm} alt="fm" />
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-4">
        <img src={fo} alt="fo" />
      </div>
    </div>
  );
};

export default InfoPanelImageSection;
