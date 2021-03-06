import { fetchSubcategories } from "../src/services/slices/subCategorySlice";
import { fetchMaincategories } from "./services/slices/mainCategorySlice";
import SpecificProducts from "./pages/specificProducts/specificProducts";
import VerificationPage from "./pages/VerificationPage/verificationPage";
import "../node_modules/video-react/dist/video-react.css";
import logo2 from "./images/logo_updated/eff_logos4.png";
import logo from "./images/logo_updated/eff_logos2.png";
import Brouchers from "./pages/brouchers/brouchers";
import AboutEFF from "./pages/about_eff/about_eff";
import Sideba from "./components/sidebar/sidebar";
import Products from "./pages/products/products";
import { Route, Switch } from "react-router-dom";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import "../src/media_query.scss";
import "./App.scss";
import ContactPage from "./pages/contactPage/contactPage";
import Careers from "./pages/careers/careers";
import VideoLibrary from "./pages/video-library/video-library";
import Leadership from "./pages/leadership/leadership";
import Facilities from "./pages/facilities/facilities";
import SierraLoader from "./components/Loader/sierraLoader";

function App() {
  const [display, setDisplay] = useState(false);
  const [selectedProd, setSelectedProd] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Called BC 3");
    dispatch(fetchSubcategories());
    dispatch(fetchMaincategories());
  }, [dispatch]);

  const openRightMenu = () => {
    setDisplay(true);
  };

  const closeRightMenu = () => {
    setDisplay(false);
  };

  const selectProduct = (p) => {
    setSelectedProd(p);
  };

  return (
    <div className="App">
      <Sideba display={display} closeRightMenu={closeRightMenu} />

      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              st={{
                gradient: "gradient",
                color: "white",
                logo: logo2,
                position: "absolute",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/blogs"
          component={() => (
            <Blog
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/brouchers"
          component={() => (
            <Brouchers
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/about"
          component={() => (
            <AboutEFF
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/leadership"
          component={() => (
            <Leadership
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/facilities"
          component={() => (
            <Facilities
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/video-library"
          component={() => (
            <VideoLibrary
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/contact_us"
          component={() => (
            <ContactPage
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          exact
          path="/careers"
          component={() => (
            <Careers
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          exact
          path="/:product_name"
          component={() => (
            <Products
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              selectProduct={selectProduct}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/:product_name/:type"
          component={() => (
            <SpecificProducts
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              selectedSubCategory={selectedSubCategory}
              selectedProd={selectedProd}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
