import logo from "../../images/logo_updated/sierra.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Input } from "antd";
import "antd/dist/antd.css";
import "./footer.scss";
import {
  FaFacebookSquare,
  FaPinterestP,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const { Search } = Input;

const Footer = () => {
  return (
    <div className="footer container-fluid 1233312">
      <div className="row mt-4  ml-5">
        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 mt-4 column-1">
          <ul>
            <label>PRODUCTS</label>
            <li>Curtain and drapes</li>
            <li>Home Decore</li>
            <li>Bedding</li>
            <li>Hardware</li>
          </ul>
          <ul className="mt-5">
            <label>COMPANY</label>
            <li>About Sierra Textiles</li>
            <li>Terms and conditions</li>
            <li>Facilities</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-4 column-2">
          <ul className="connect-with-us">
            <label>CONNECT WITH US</label>
            <p>Join Our Community!</p>
            <p className="mb-1">
              Stay on the top of latest window treatment trends and events
            </p>
          </ul>

          <ul className="social-share">
            <label>SOCIAL SHARE</label>
            <div className="social-media mt-2 mb-2">
              <span>
                <Link
                  to={{
                    pathname: "https://www.facebook.com/sierratextileofficial	",
                  }}
                  target="_blank"
                >
                  <FaFacebookSquare />
                </Link>
              </span>

              <span>
                <Link
                  to={{
                    pathname: "https://twitter.com/TextileSierra",
                  }}
                  target="_blank"
                >
                  <AiOutlineTwitter />
                </Link>
              </span>

              <span>
                <Link
                  to={{
                    pathname:
                      "https://www.youtube.com/channel/UCBbnXQapdll1Tf8A1UyoPoA",
                  }}
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </span>
              <span>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/company/79144784	",
                  }}
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </span>
            </div>
          </ul>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
          <Search
            className="mt-5"
            placeholder="Subscribe to our newsletter"
            enterButton="Subcribe"
            size="large"
          />
          <Link to="/">
            <img src={logo} alt="" style={{ display: "grid" }} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2022 Sierra Textile | B-75/280, Sector A, Street # 3, Kashmir
          Colony, Karachi, Sindh, Pakistan.
        </p>

        <ul>
          <li>Privacy & Security</li>
          <li>Accessibility Statement</li>
          <li>Do Not Sell My Information</li>
          <li> Terms of Use</li>
          <li>Sitemap </li>
        </ul>
        <center>
          <hr
            style={{
              position: "relative",
              width: "40%",
            }}
          />
        </center>
        <p>Custom ecommerce designed and developed by Take4media</p>
      </div>
    </div>
  );
};

export default Footer;
