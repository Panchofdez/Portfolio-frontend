import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/ballerina2.jpg";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div className="row display-flex flex-row">
        <div
          className="col-md-6 display-flex flex-column justify-content-center pt-5 w-100"
          style={{
            backgroundColor: "black",
            paddingLeft: "5vw",
          }}
        >
          <div className="m-auto pt-lg-3 headerText">
            <div className="row justify-content-center">
              <div className="col-md-12 my-md-5 my-3 px-sm-3 pl-md-5">
                <h2
                  className="title mt-5"
                  style={{ color: "white", lineHeight: 1.5 }}
                >
                  A quick and easy way to showcase yourself and your work
                </h2>
                <Link
                  className="btn  my-3 mx-2 signup-btn button-outline"
                  to="/signup"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-sm-none d-none d-md-block w-100"
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
        className="container-fluid pt-3"
        style={{
          backgroundColor: "#f4f4f4",
          minHeight: "250px",
        }}
      >
        <div className="row px-5 m-auto mb-md-0">
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

      <div className="container-fluid" style={{ minHeight: "250px" }}>
        <div className="row container justify-content-center align-items-center m-auto">
          <div className="col-md-10 col-12  my-5">
            <h5 className="px-4 mt-3" style={{ lineHeight: 2 }}>
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
