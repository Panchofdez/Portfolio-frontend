import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/ballerina2.jpg";
import PortfolioScreenshot from "../images/PortfolioScreenshot.png";
import WorkPageScreenshot from "../images/WorkPageScreenshot2.png";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div className="row display-flex flex-row w-100 m-0 p-0">
        <div
          className="col-md-6 display-flex flex-column justify-content-center pt-0 pt-md-5"
          style={{
            backgroundColor: "black",
            paddingLeft: "5vw",
          }}
        >
          <div className="m-auto pt-lg-3 headerText">
            <div className="row justify-content-center">
              <div className="col-md-12 my-md-5 my-3 px-5 pl-md-5 align-self-center">
                <h2
                  className="title mt-5"
                  style={{ color: "white", lineHeight: 1.5 }}
                >
                  A quick and easy way to showcase yourself and your work
                </h2>
                <Link
                  className="btn  mt-3 mb-5 mx-2 signup-btn button-outline "
                  to="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-sm-none d-none d-md-block"
          style={{
            height: "500px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className="container-fluid pt-3 w-100"
        style={{
          backgroundColor: "#f4f4f4",
          minHeight: "250px",
        }}
      >
        <div className="row px-5 m-auto mb-md-0 w-100">
          <div className="col-md-4 my-md-5 my-4  text-center">
            <i className="fas fa-camera mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Showcase your work through collections of photos and videos
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center ">
            <i className="fas fa-history mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Add events and achievements to your career timeline
            </h5>
          </div>
          <div className="col-md-4 my-md-5 my-4 text-center">
            <i className="fas fa-hands-helping mx-2 homepage-icons"></i>
            <h5 className="mt-3">
              Give and receive recommendations and testimonials
            </h5>
          </div>
        </div>
      </div>

      <div
        className="container-fluid w-100 justify-content-center"
        style={{ minHeight: "250px" }}
      >
        <div className="row w-100 m-0">
          <div className="col-md-6 col-12 p-3 mt-5 d-flex justify-content-center">
            <img
              src={WorkPageScreenshot}
              style={{ minHeight: "500px", width: "100" }}
              className="img-fluid elevated"
            />
          </div>
          <div className="col-md-6 col-12  my-5 d-flex align-items-center flex-column justify-content-center">
            <div className="px-sm-4 w-100">
              <h1 className="display-4 ">For</h1>
              <h1 className="display-4 ">Creative</h1>
              <h1 className="display-4 ">Professionals</h1>
            </div>

            <h5 className="px-sm-4 mt-3 lead" style={{ lineHeight: 2 }}>
              For creative professionals that can't rely on a regular resume and
              don't have the time, money or resources to make their own website.
              We make it easy to create and share your own visual
              resume/portfolio
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
